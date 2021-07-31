import { Injectable } from '@angular/core';
import { Cities} from './cities.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CitiesServicesService {

   // Define API
   apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient ) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// HttpClient API get() method => Fetch Cities list
getCities(): Observable<Cities> {
  return this.http.get<Cities>(this.apiURL + '/api/city')
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
//   getCities() {
//      this.http.get("http://localhost:3000/api/city")
//     .subscribe(response => {
//     console.log(response);
//     //this.city = response.json();

//    })
// }
}
