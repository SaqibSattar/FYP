import { Injectable } from '@angular/core';
import { Provider} from './provider.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

    // Define API
    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient ) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    // HttpClient API get() method => Fetch Provider list
    getProvider(): Observable<Provider> {
      return this.http.get<Provider>(this.apiURL + '/serviceProvider')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

     // Error handling
     handleError(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
    }
