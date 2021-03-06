import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { CitiesComponent } from './cities/cities.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { AddImageComponent } from './add-image/add-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { AuthInterceptor } from './auth-interceptor';
import { HhComponent } from './hh/hh.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ZzComponent } from './zz/zz.component';
import { AbComponent } from './ab/ab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    CitiesComponent,
    ProviderListComponent,
    ServiceProviderListComponent,
    AddImageComponent,
    UserRegistrationComponent,
    DatePickerComponent,
    PaymentComponent,
    HhComponent,
    ThankYouComponent,
    ZzComponent,
    AbComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
