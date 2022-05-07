import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './screen/home/home.component';
import { NosotrosComponent } from './screen/nosotros/nosotros.component';
import { EstadoComponent } from './screen/estado/estado.component';
import { TransporteComponent } from './screen/transporte/transporte.component';
import { TarjetasComponent } from './screen/tarjetas/tarjetas.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './screen/login/login.component';
import { SingUpComponent } from './screen/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    NosotrosComponent,
    EstadoComponent,
    TransporteComponent,
    TarjetasComponent,
    CarouselComponent,
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
