import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { FormComponent } from './common/form/form.component';
import { HourlyComponent } from './common/form/hourly/hourly.component';
import { FromAirportComponent } from './common/form/from-airport/from-airport.component';
import { ToAirportComponent } from './common/form/to-airport/to-airport.component';
import { DoorToDoorComponent } from './common/form/door-to-door/door-to-door.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurFleetsComponent } from './components/our-fleets/our-fleets.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavBarComponent,
    CarouselComponent,
    FormComponent,
    HourlyComponent,
    FromAirportComponent,
    ToAirportComponent,
    DoorToDoorComponent,
    CheckoutComponent,
    FooterComponent,
    OurFleetsComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
