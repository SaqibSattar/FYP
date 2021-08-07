import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
service = '';

constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

selectService(data: string) {
this.service = data;
console.log(this.service);
this.router.navigate(['home/service/provider-list'])
}

}
