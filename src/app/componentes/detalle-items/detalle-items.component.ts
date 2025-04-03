import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { items } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  standalone: false,
  selector: 'app-detalle-items',
  templateUrl: './detalle-items.component.html',
  styleUrls: ['./detalle-items.component.scss'],
})
export class DetalleItemsComponent implements OnInit {
   //Generamos un input para cecibir el id
  @Input() id:any;
  //Declaramos los objetos que almacenarán el detalle recuperado
  detalleItems = {} as items;
  constructor(private detalle: ConsultasService, private modalCtrl: ModalController) { }


  // Método para cerrar el modal
  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.detalle.getDetalleItems(this.id).subscribe(
      (respuesta) => {
        console.log(respuesta);
        if (respuesta) {

          this.detalleItems = respuesta;
        }
      }
    );
  }

}
