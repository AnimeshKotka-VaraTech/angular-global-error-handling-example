import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
    constructor(private readonly snackbar: MatSnackBar, private readonly zone: NgZone) { }

    handleError(error: unknown): void {
        this.zone.run(() => {
            this.snackbar
                .open('Work in progress',
                    'Close',
                    {
                        duration: 2000
                    });
            console.log('-'.repeat(100));
            console.log(error);
            console.log('-'.repeat(100));
        })



    }
} 