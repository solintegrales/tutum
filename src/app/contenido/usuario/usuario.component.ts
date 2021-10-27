import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SusuarioService } from 'src/app/servicios/susuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private user_ser:SusuarioService) { }

  //------------variables globales
  usuario: any;
  userData: any;
  duser: any;
  vuser= false;

  ngOnInit(): void {
    this.consultar();
  }

  //-----------------consultar usuarios
  consultar() {
    //----------consulto prueba
    this.user_ser.cargar()
      .subscribe(res => {
      this.usuario = res;
        console.log('menu: ', this.usuario);
      });
  }
 //-------------------ver usuarios
  veruser(dato: any) {
    console.log(dato);
    this.user_ser.ver(dato)
      .subscribe(res => {
        this.duser = res;
        console.log(this.duser);
        this.mostrar('ver');
      });
  }

  //-------------------ver datos

  mostrar(dato: any) {
    switch (dato) {
      case 'volver':
        this.vuser = false;
        break;
      case 'ver':
        this.vuser = true;
        break;
    }
  }

}
