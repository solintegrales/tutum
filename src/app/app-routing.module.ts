import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './contenido/categoria/categoria.component';
import { CotizacionComponent } from './contenido/cotizacion/cotizacion.component';
import { LoginComponent } from './contenido/login/login.component';
import { PrincipalComponent } from './contenido/principal/principal.component';
import { ProveedorComponent } from './contenido/proveedor/proveedor.component';
import { SolicitudComponent } from './contenido/solicitud/solicitud.component';
import { UsuarioComponent } from './contenido/usuario/usuario.component';
import { PlantillaComponent } from './plantillas/plantilla/plantilla.component';
import { PlantillaloginComponent } from './plantillas/plantillalogin/plantillalogin.component';

const routes: Routes = [
  {
    path:'plantillalogin', component:PlantillaloginComponent
  },
  {
    path:'plantilla', component:PlantillaComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'categoria', component:CategoriaComponent
  },
  {
    path:'cotizacion', component:CotizacionComponent
  },
  {
    path:'proveedor', component:ProveedorComponent
  },
  {
    path:'solicitud', component:SolicitudComponent
  },
  {
    path:'usuario', component:UsuarioComponent
  },
  {
    path:'principal', component:PrincipalComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
