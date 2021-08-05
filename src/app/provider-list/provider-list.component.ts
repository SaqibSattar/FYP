import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider.model';
import { ProviderService } from '../provider.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {


  provider: Provider[] = [];

  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.loadProvider()
  }
  // Get Provider list
  loadProvider() {
  return this.service.getProvider().subscribe((data: any) => {
    this.provider = data.Service
    console.log(this.provider)
  });
  }
}
