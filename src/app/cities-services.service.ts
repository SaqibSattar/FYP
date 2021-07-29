import { Injectable } from '@angular/core';
import { Cities} from './cities.model';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesServicesService {
  private city: Cities[]=[];

  constructor(private http: HttpClient ) { }
  getCities() {
     this.http.get("http://localhost:3000/api/city")
    .subscribe(response => {
    console.log(response);
    //this.city = response.json();

   })
}
}
