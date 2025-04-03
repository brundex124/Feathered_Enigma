import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { personajes, escenarios, info, reseñas, controles, items } from '../interfaces/interfaces';
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
  private collectionControles: AngularFirestoreCollection<controles>;
  private collectionItems: AngularFirestoreCollection<items>;

  /*
   * Observable que almacena los datos de los escenarios provenientes de la base de datos.  
   * Se actualiza en tiempo real con los cambios en Firestore.
   */
  datosHistoria: Observable<info[]>;
  datosEscenarios: Observable<escenarios[]>;
  datosPersonajes: Observable<personajes[]>;
  datosReseñas: Observable<reseñas[]>;
  datosControles: Observable<controles[]>;
  datosItems: Observable<items[]>;


  constructor(private firestore: AngularFirestore) {
    // Inicializamos las colecciones de Firestore para obtener los datos de las colecciones.
    this.collectionHistoria = this.firestore.collection<info>('Historias');
    this.collectionEscenarios = this.firestore.collection<escenarios>('Escenarios');
    this.collectionPersonajes = this.firestore.collection<personajes>('Personajes');
    this.collectionReseñas = this.firestore.collection<reseñas>('Reseñas');
    this.collectionControles = this.firestore.collection<controles>('Controles');
    this.collectionItems = this.firestore.collection<items>('Items');


    //Almacenamos los datos de las colecciones en las variables para pasar los datos que se usaran el metodo getDatosNombreFuncion .
    this.datosHistoria = this.collectionHistoria.valueChanges();
    this.datosPersonajes = this.collectionPersonajes.valueChanges();
    this.datosEscenarios = this.collectionEscenarios.valueChanges();
    this.datosReseñas = this.collectionReseñas.valueChanges();
    this.datosControles = this.collectionControles.valueChanges();
    this.datosItems = this.collectionItems.valueChanges();

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

  getDatosControles(): Observable<controles[]> {
    return this.datosControles;
  }
  getDatosItems(): Observable<items[]> {
    return this.datosItems;
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

  getDetalleItems(nombre: string): Observable<items | undefined> {
    return from(this.collectionItems.ref.where('nombre', '==', nombre).get().then(snapshot => {
      if (!snapshot.empty) {
        return snapshot.docs[0].data() as items;
      }
      return undefined;
    }));
  }


  /**Almacenr info de fromulario a firebase */
  async guardarDatos(datos: { usuario: string, puntuacion: number, comentario: string }) {
    try {
      // Agrega el documento en la colección de reseñas
      const docRef = await this.collectionReseñas.add({
        comentario: datos.comentario,
        usuario: datos.usuario,
        puntuacion: datos.puntuacion
        
      });
      console.log('Reseña guardada con ID:', docRef.id);
    } catch (error) {
      console.error('Error al guardar reseña:', error);
    }
  }

}
