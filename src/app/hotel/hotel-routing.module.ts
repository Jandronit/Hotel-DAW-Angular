import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import {HomeComponent} from "./pages/home/home.component";
import { LandingComponent } from './pages/landing/landing.component';
import {NosotrosComponent} from "./pages/nosotros/nosotros.component";
import {RestauranteComponent} from "./pages/restaurante/restaurante.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'landing',
        component:  LandingComponent
      },
      {
        path: 'habitaciones',
        component:  HabitacionesComponent
      },
      {
        path: 'restaurante',
        component:  RestauranteComponent
      },
      {
        path: 'nosotros',
        component:  NosotrosComponent
      },
      {
        path: 'contacto',
        component:  ContactoComponent
      },
      {
        path: 'blog',
        component:  BlogComponent
      },
      {
        path: '**',
        redirectTo: 'landing'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
