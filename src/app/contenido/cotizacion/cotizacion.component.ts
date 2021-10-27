import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScotizacionService } from 'src/app/servicios/scotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {

  constructor(private coti_ser: ScotizacionService) { }

  //------------variables globales
  cotizacion: any;
  cotiData: any;
  dcoti: any;
  vcoti= false;

  ngOnInit(): void {
    this.consultar();
  }

  //-----------------consultar cotizaciones
  consultar() {
    //----------consulto prueba
    this.coti_ser.cargar()
      .subscribe(res => {
      this.cotizacion = res;
        console.log('menu: ', this.cotizacion);
      });
  }
 //-------------------ver cotización
  vercoti(dato: any) {
    console.log(dato);
    this.coti_ser.ver(dato)
      .subscribe(res => {
        this.dcoti = res;
        console.log(this.dcoti);
        this.mostrar('ver');
      });
  }

  //-------------------ver datos

  mostrar(dato: any) {
    switch (dato) {
      case 'volver':
        this.vcoti = false;
        break;
      case 'ver':
        this.vcoti = true;
        break;
    }
  }

}
