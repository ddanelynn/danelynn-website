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
import { LightComponent } from './light/light.component';

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
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
