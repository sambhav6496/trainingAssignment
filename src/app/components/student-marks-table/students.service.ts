import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

const URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  getStudents() {
    return this.http.get(`${URL}students`).pipe(
      map((res: any) => res),
      catchError((error: any) => {
        return observableThrowError(error || 'Server error');
      })
    );
  }
}
