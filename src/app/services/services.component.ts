import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
service = '';

constructor() { }

  ngOnInit(): void {
  }

selectService(data: string) {
this.service = data;
console.log(this.service);
}

}
