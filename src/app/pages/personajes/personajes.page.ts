import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { personajes, controles, items } from '../../interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
import { DetalleItemsComponent } from 'src/app/componentes/detalle-items/detalle-items.component';

@Component({
  standalone: false,  
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
    personajes: personajes[] = [];  // Arreglo para almacenar los escenarios obtenidos de la base de datos */
    controles:controles[]=[];
    items:items[]=[];

    constructor(private firebaseService: ConsultasService,private cdr: ChangeDetectorRef, private modalCtrl: ModalController) { }

    async verDetalle(id: string) {
      console.log(id)
      /*Dado que es una petición (promesa) es un proceso
      asincrono espera la respuesta del componente modal
      al recibirla se vincula con la vista de detalle */
      const modal = await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps: { id }
      });
      //Se visualisa el componente de detalle
      modal.present();
    }

    async verDetalleItems(id: string) {
      /*Dado que es una petición (promesa) es un proceso
      asincrono espera la respuesta del componente modal
      al recibirla se vincula con la vista de detalle */
      const modal = await this.modalCtrl.create({
        component: DetalleItemsComponent,
        componentProps: { id }
      });
      //Se visualisa el componente de detalle
      modal.present();
    }

    
  ngOnInit() {
    this.firebaseService.getDatosPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });

    this.firebaseService.getDatosControles().subscribe({
      next: (data) => {
        this.controles = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });


    this.firebaseService.getDatosItems().subscribe({
      next: (data) => {
        this.items = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });



  }

}
