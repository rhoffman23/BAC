import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { userLogin } from '../models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appURL;
      this.myApiUrl = 'api/userLogin/';
  }

  getUserLogins(): Observable<userLogin[]> {
    return this.http.get<userLogin[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getUserLogin(u_id: number): Observable<userLogin> {
      return this.http.get<userLogin>(this.myAppUrl + this.myApiUrl + u_id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveUserLogin(userLogin): Observable<userLogin> {
      return this.http.post<userLogin>(this.myAppUrl + this.myApiUrl, JSON.stringify(userLogin), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateUserLogin(u_id: number, userLogin): Observable<userLogin> {
      return this.http.put<userLogin>(this.myAppUrl + this.myApiUrl + u_id, JSON.stringify(userLogin), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteUserLogin(u_id: number): Observable<userLogin> {
      return this.http.delete<userLogin>(this.myAppUrl + this.myApiUrl + u_id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
