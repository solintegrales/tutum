import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//-------------firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
//---------------fin firebase


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaloginComponent } from './plantillas/plantillalogin/plantillalogin.component';
import { PlantillaComponent } from './plantillas/plantilla/plantilla.component';
import { LoginComponent } from './contenido/login/login.component';
import { MenuComponent } from './partes/menu/menu.component';
import { SuperiorComponent } from './partes/superior/superior.component';
import { FooterComponent } from './partes/footer/footer.component';
import { CategoriaComponent } from './contenido/categoria/categoria.component';
import { CotizacionComponent } from './contenido/cotizacion/cotizacion.component';
import { ProveedorComponent } from './contenido/proveedor/proveedor.component';
import { SolicitudComponent } from './contenido/solicitud/solicitud.component';
import { UsuarioComponent } from './contenido/usuario/usuario.component';
import { PrincipalComponent } from './contenido/principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaloginComponent,
    PlantillaComponent,
    LoginComponent,
    MenuComponent,
    SuperiorComponent,
    FooterComponent,
    CategoriaComponent,
    CotizacionComponent,
    ProveedorComponent,
    SolicitudComponent,
    UsuarioComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
