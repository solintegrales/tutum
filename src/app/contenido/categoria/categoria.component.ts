import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScategoriaService } from 'src/app/servicios/scategoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  constructor(private cate_ser: ScategoriaService, private storage: AngularFireStorage) { }

  //------------variables globales
  categoria: any;
  cateData: any;
  nuevacate = false;
  editarcate = false;
  cateimagen: any;
  separar: any;
  extimagen: any;
  porsubida!: Observable<number>;
  urlarchivo!: Observable<string>;
  

  ngOnInit(): void {
    this.con_cate();
  }

  //----------------mostrar formularios
  mostrarfor(dato:any) {
    switch (dato) {
      case "nuevo":
        this.nuevacate = true;
        this.editarcate = false;
        break;
      case "edtar":
        this.nuevacate = false;
        this.editarcate = true;
        break;
      case "cancelar":
        this.nuevacate = false;
        this.editarcate = false;
        break;
    }
  }

  //-----------------consultar menu principal
  con_cate() {
    //----------consulto prueba
    this.cate_ser.cargar()
      .subscribe(res => {
      this.categoria = res;
        console.log('menu: ', this.categoria);
        
      });
  }

  //------------------guardo la categoria
  //-----------formulario reactivo
  inscateForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  //----validar formulario
  
  get nombreNoValido() {
    return this.inscateForm.get('nombre')?.invalid && this.inscateForm.get('nombre')?.touched;
  }
  get imagenNoValido() {
    return this.inscateForm.get('imagen')?.invalid && this.inscateForm.get('imagen')?.touched;
  }
  
  // -----------limpiar formula
  private limpiar() {
    this.inscateForm.patchValue({
      nombre: '',
      imagen: ''
    });
  }

  //------------guardo caso
  inscate(datos: any) {
    console.log(datos);
    let datos2= {
      Nombre: datos.nombre,
      Imagen: ''
    }
    let nombreimg = datos.nombre + '.' + this.extimagen;
    console.log(datos2);
    console.log(this.cateimagen.target.files[0]);
    
    this.limpiar();
    Swal.fire({
      title: 'Está seguro?',
      text: 'Se va a guardar la categoría:' + datos.nombre,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar'
    }).then((result) => {
      if (result.isConfirmed) {
        //this.subirimg(nombreimg)
        console.log(this.cateimagen);
        const ruta = 'categorias/' + datos.nombre + '.' + this.extimagen;
        //console.log(ruta);
        const archivo = this.cateimagen.target.files[0];
        console.log(archivo);
        //subo el archivo
        const ref = this.storage.ref(ruta);
        const sub = this.storage.upload(ruta, archivo);
        console.log('subio');
        
        /* this.cate_ser.crear(datos2).then(() => {
          console.log('Guardo');
        }) */
      }
    })
  }
  
  //------------capturo imagen y separo datos
  imgcate(datos: any) {
    this.cateimagen = datos;
    let nameimg = this.cateimagen.target.files[0].name;
    this.separar = nameimg.split(".");
    this.extimagen = this.separar[1];
    //console.log(this.cateimagen.target.files[0]);
  }

  //--------------subo imagen
  subirimg(nombre: any) {
    const ruta = 'categorias/' + nombre;
    const archivo = this.cateimagen.target.files[0];
    console.log(archivo);
    
    //subo el archivo
    const ref = this.storage.ref(ruta);
    const sub = this.storage.upload(ruta, archivo);
    console.log('se subio archivo');
   /*  this.porsubida != sub.percentageChanges();
    sub.snapshotChanges().pipe(finalize(() => {
      ref.getDownloadURL().subscribe(urlFile => {
        this.urlarchivo = urlFile;
      })
    })).subscribe(); */
  }

}
