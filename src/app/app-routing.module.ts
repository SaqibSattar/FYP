import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { HhComponent } from './hh/hh.component';
import { PaymentComponent } from './payment/payment.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { ServicesComponent } from './services/services.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ZzComponent } from './zz/zz.component';

const routes: Routes = [
{path : '' , redirectTo : '/home' , pathMatch : 'full'},
{
  path: 'home',component: CitiesComponent},
  {path: 'home/service', component: ServicesComponent},

  {path: 'home/service/provider-list', component: ProviderListComponent},

{path: 'home/service/provider-list/register', component: UserRegistrationComponent},

{path: 'home/service/provider-list/register/date', component: DatePickerComponent},
{path: 'home/service/provider-list/register/date/payment', component: PaymentComponent},

{path: 'home/service/provider-list/register/date/payment/thanks', component: ThankYouComponent},
//{path: '**', component: CitiesComponent},
{path: '**' ,redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
