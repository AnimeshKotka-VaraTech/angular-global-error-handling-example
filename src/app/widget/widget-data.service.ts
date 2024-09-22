import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task.model';
import { catchError, of } from 'rxjs';
import { EventSource } from 'event-source-polyfill'

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {

  public eventSource!: EventSource;

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Task[]>(`https://jsonplaceholder.typicode.com/todo?_start=0&_limit=3`)
      .pipe(
        catchError(err => of([]))
      );
  }

  addTaskSync(task: Task): Task | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }

  async connect() {
    this.eventSource = new EventSource('http://localhost:3000/sse');
    this.eventSource.onmessage = (event) => {
      // Handle the SSE message
      console.log(event);
    };
  }

  disconnect() {
    this.eventSource.close();
  }
}
