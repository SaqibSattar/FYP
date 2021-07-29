import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
{path : '' , redirectTo : '/home' , pathMatch : 'full'},
{path: 'home' , component : ServicesComponent},
{path: 'city', component: CitiesComponent},
{path: '**' , component : ServicesComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
