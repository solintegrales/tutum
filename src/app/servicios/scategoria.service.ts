import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScategoriaService {

  constructor(private db: AngularFirestore) { }
  
  //-------------------carga juzgado
  cargar() {
    return this.db.collection('categorias', ref => ref
                  .orderBy('nombre', 'asc'))
                  .snapshotChanges()
                  .pipe(
                    map(actions =>
                     actions.map(resp => {
                     const data = resp.payload.doc.data() as any;
                       const id = resp.payload.doc.id;                       
                     return {id, ...data};
                     }))
                    ); 
  }

   
  //------------------crear juzgado
  crear(datos: any){
    return this.db.collection('categorias').add(datos);
  }
  

  //-------------------borrar juzgado
  borrar(id: string){
    return this.db.collection('categorias').doc(id).delete();
  }

  
  //------------------editar juzgado
   editar(id: string, datos: any){
    return this.db.collection('categorias').doc(id).update(datos);
   }


}
