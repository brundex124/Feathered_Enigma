import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonLabel, IonContent, IonGrid, IonNote, IonRow, IonCol, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { personajes } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  standalone:false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  //Generamos un input para cecibir el id
  @Input() id:any;
  //Declaramos los objetos que almacenarán el detalle recuperado
  detallePersonaje={} as personajes;
  
  constructor(private detalle:ConsultasService,private modalCtrl: ModalController) { }

// Método para cerrar el modal
regresar() {
  this.modalCtrl.dismiss();
}

  ngOnInit() {
    this.detalle.getDetalle(this.id).subscribe(
      (respuesta) => {
        console.log(respuesta);
        if (respuesta) {
          
          this.detallePersonaje = respuesta;
        }
      }
    );
  }

}
