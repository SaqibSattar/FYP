import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cities } from '../cities.model';
import { HttpClient } from '@angular/common/http';
import { CitiesServicesService } from '../cities-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city :Cities[]=[] ;
  constructor(private service: CitiesServicesService,private http: HttpClient) {  }
  ngOnInit() {
   //return this.http.get("http://localhost:3000/api/city")
    //.subscribe(response => {
   //console.log(response);
  console.log(this.service.getCities())
    //})
    }
}
