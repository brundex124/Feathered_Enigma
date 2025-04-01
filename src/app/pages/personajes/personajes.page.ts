import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { personajes } from '../../interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';

@Component({
  standalone: false,  
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
    personajes: personajes[] = [];  // Arreglo para almacenar los escenarios obtenidos de la base de datos */
    controles=[]=[{
      boton:"Barra Espaciadora",
      accion:"Saltar",
      foto:"../../../assets/img/tecla_barra.png"
      },{
      boton:"Letra A",
      accion:"Moverse a la Izquierda",
      foto:"../../../assets/img/tecla_A.png"
      },
      {
        boton:"Letra D",
        accion:"Moverse a la Derecha",
        foto:"../../../assets/img/tecla_D.png"
      },
      {
        boton:"Letra K",
        accion:"Disparar",
        foto:"../../../assets/img/tecla_K.png"
      }
    ]

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

    
  ngOnInit() {
    this.firebaseService.getDatosPersonajes().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.personajes = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });
  }

}
