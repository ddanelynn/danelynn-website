import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { FlowerSetComponent } from './flower-set/flower-set.component';
import { FlowerScrollComponent } from './flower-scroll/flower-scroll.component';
import { TractComponent } from './tract/tract.component';
import { PlaneComponent } from './plane/plane.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { StarComponent } from './star/star.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeComponent,
    HomeComponent,
    FlowerSetComponent,
    FlowerScrollComponent,
    TractComponent,
    PlaneComponent,
    NavbarMobileComponent,
    StarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
