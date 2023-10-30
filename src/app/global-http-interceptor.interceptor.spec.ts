import { TestBed } from '@angular/core/testing';

import { GlobalHttpInterceptorInterceptor } from './global-http-interceptor.interceptor';

describe('GlobalHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalHttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalHttpInterceptorInterceptor = TestBed.inject(GlobalHttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
