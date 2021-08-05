import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
{path : '' , redirectTo : '/home' , pathMatch : 'full'},
{
  path: 'home',component: CitiesComponent},
  {path: 'home/service', component: ServicesComponent},
  // children: [
  //   { path: 'service', component: ServicesComponent }   //url = home/service
  //           ]
//},
{path: 'service-provider', component: ServiceProviderListComponent},
//{path: '**', component: CitiesComponent},
{path: '**' ,redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
