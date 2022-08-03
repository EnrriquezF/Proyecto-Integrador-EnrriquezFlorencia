import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoArgProgComponent } from './component/logo-arg-prog/logo-arg-prog.component';
import { RRSSComponent } from './component/rrss/rrss.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcerDeComponent } from './component/acer-de/acer-de.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    RRSSComponent,
    BannerComponent,
    AcerDeComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
