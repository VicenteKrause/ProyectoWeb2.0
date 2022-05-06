import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { NosotrosComponent } from './screen/nosotros/nosotros.component';
import { EstadoComponent } from './screen/estado/estado.component';
import { TarjetasComponent } from './screen/tarjetas/tarjetas.component';
import { TransporteComponent } from './screen/transporte/transporte.component';
import { LoginComponent } from './screen/login/login.component';

const routes: Routes = [
  { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path: 'nosotros',component: NosotrosComponent },
  { path: 'estado',component: EstadoComponent },
  { path: 'tarjetas',component: TarjetasComponent },
  { path: 'transporte',component: TransporteComponent },
  { path: 'login',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
