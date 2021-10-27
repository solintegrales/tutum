import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SsolicitudService } from 'src/app/servicios/ssolicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  constructor(private sol_ser: SsolicitudService) { }

  //------------variables globales
  solicitud: any;
  solData: any;
  dsol: any;
  vsol= false;

  ngOnInit(): void {
    this.consultar();
  }

  //-----------------consultar solicitudes
  consultar() {
    //----------consulto prueba
    this.sol_ser.cargar()
      .subscribe(res => {
      this.solicitud = res;
        console.log('menu: ', this.solicitud);
      });
  }
 //-------------------ver solicitud
  versol(dato: any) {
    console.log(dato);
    this.sol_ser.ver(dato)
      .subscribe(res => {
        this.dsol = res;
        console.log(this.dsol);
        this.mostrar('ver');
      });
  }

  //-------------------ver datos

  mostrar(dato: any) {
    switch (dato) {
      case 'volver':
        this.vsol = false;
        break;
      case 'ver':
        this.vsol = true;
        break;
    }
  }

}
