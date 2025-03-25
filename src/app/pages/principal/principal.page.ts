import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonicModule, IonIcon } from '@ionic/angular';
import { info } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  standalone:false,
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],

})
export class PrincipalPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  //historias: info[] = [];


  constructor(/*private firebaseService: ConsultasService*/) { }

  ngOnInit() {
  
    // this.firebaseService.getDatos().subscribe({
    //   next: (data) => {
    //     console.log('Datos recibidos:', data);
    //     this.historias = data;
    //   },
    //   error: (err) => {
    //     console.error('Error obteniendo datos:', err);
    //   }
    // });
  }

}
