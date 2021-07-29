import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cities } from '../cities.model';
import { CitiesServicesService } from '../cities-services.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  City: Cities[] = [];

  constructor(private service: CitiesServicesService) {  }
  ngOnInit() {
   //return this.http.get("http://localhost:3000/api/city")
    //.subscribe(response => {
   //console.log(response);
   // https://jsonplaceholder.typicode.com/posts (if we getting data from this site then it doesn't gives error)
    //})
    this.loadCities()
    }


// Get Cities list
loadCities() {
  return this.service.getCities().subscribe((data: any) => {
    this.City = data;
  })
}

}
