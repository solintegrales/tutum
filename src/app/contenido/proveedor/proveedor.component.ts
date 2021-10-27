import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SproveedorService } from 'src/app/servicios/sproveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit {

  constructor(private pro_ser: SproveedorService) { }

  //------------variables globales
  proveedor: any;
  proData: any;
  dpro: any;
  vpro= false;

  ngOnInit(): void {
    this.consultar();
  }

  //-----------------consultar proveedor
  consultar() {
    //----------consulto prueba
    this.pro_ser.cargar()
      .subscribe(res => {
      this.proveedor = res;
        console.log('menu: ', this.proveedor);
      });
  }
 //-------------------ver proveedor
  vercoti(dato: any) {
    console.log(dato);
    this.pro_ser.ver(dato)
      .subscribe(res => {
        this.dpro = res;
        console.log(this.dpro);
        this.mostrar('ver');
      });
  }

  //-------------------ver datos

  mostrar(dato: any) {
    switch (dato) {
      case 'volver':
        this.vpro = false;
        break;
      case 'ver':
        this.vpro = true;
        break;
    }
  }

}
