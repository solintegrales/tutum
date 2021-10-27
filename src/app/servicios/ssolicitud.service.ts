import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsolicitudService {

  constructor(private db: AngularFirestore) { }
  
  //-------------------carga juzgado
  cargar() {
    return this.db.collection('solicitudes', ref => ref
                  .orderBy('fecha', 'desc'))
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
  
  ver(dato: any) {
    return this.db.collection('solicitudes', ref => ref
                  .where('cliente', '==', dato))
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
}
