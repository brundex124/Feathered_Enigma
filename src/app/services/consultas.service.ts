import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { personajes, escenarios, info, reseñas } from '../interfaces/interfaces';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  /**   
    * Colección de  la base de datos de Firestore.  
    * Se usa para obtener y gestionar los datos de las colecciónes.
    */
  private collectionHistoria: AngularFirestoreCollection<info>;
  private collectionEscenarios: AngularFirestoreCollection<escenarios>;
  private collectionPersonajes: AngularFirestoreCollection<personajes>;
  private collectionReseñas: AngularFirestoreCollection<reseñas>;

  /*
   * Observable que almacena los datos de los escenarios provenientes de la base de datos.  
   * Se actualiza en tiempo real con los cambios en Firestore.
   */
  datosHistoria: Observable<info[]>;
  datosEscenarios: Observable<escenarios[]>;
  datosPersonajes: Observable<personajes[]>;
  datosReseñas: Observable<reseñas[]>;


  constructor(private firestore: AngularFirestore) {
    // Inicializamos las colecciones de Firestore para obtener los datos de las colecciones.
    this.collectionHistoria = this.firestore.collection<info>('Historias');
    this.collectionEscenarios = this.firestore.collection<escenarios>('Escenarios');
    this.collectionPersonajes = this.firestore.collection<personajes>('Personajes');
    this.collectionReseñas = this.firestore.collection<reseñas>('Reseñas');

    //Almacenamos los datos de las colecciones en las variables para pasar los datos que se usaran el metodo getDatosNombreFuncion .
    this.datosHistoria = this.collectionHistoria.valueChanges();
    this.datosPersonajes = this.collectionPersonajes.valueChanges();
    this.datosEscenarios = this.collectionEscenarios.valueChanges();
    this.datosReseñas = this.collectionReseñas.valueChanges();

  }


  // Métodos que retorna los datos de la colección de Firestore segun la coleccion solicitada.
  
  getDatosHistoria(): Observable<info[]> {
    return this.datosHistoria;
  }

  getDatosEscenarios(): Observable<escenarios[]> {
    return this.datosEscenarios;
  }

  getDatosPersonajes(): Observable<personajes[]> {
    return this.datosPersonajes;
  }
  
  getDatosReseñas(): Observable<reseñas[]> {
    return this.datosReseñas;
  }

  getDetalle(nombre: string): Observable<personajes | undefined> {
    return from(this.collectionPersonajes.ref.where('Nombre', '==', nombre).get().then(snapshot => {
      if (!snapshot.empty) {
        return snapshot.docs[0].data() as personajes;
      }
      return undefined;
    }));
  }



  // private collection: AngularFirestoreCollection<info>;
  // datos: Observable<info[]>;

  // constructor(private firestore: AngularFirestore) {
  //   this.collection = this.firestore.collection<info>('personajes');
  //   this.datos= this.collection.valueChanges();
  // }

  // getDatos(): Observable<info[]> {
  //   return this.datos;
  // }



}
