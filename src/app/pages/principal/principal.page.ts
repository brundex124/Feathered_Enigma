import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonicModule, IonIcon } from '@ionic/angular';
import { info, reseñas } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  standalone:false,
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],

})
export class PrincipalPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

    resena: reseñas[] = [];  // Arreglo para almacenar los escenarios obtenidos de la base de datos */


  constructor(private firebaseService: ConsultasService,private cdr: ChangeDetectorRef) { } 

  ngOnInit() {
  
    this.firebaseService.getDatosReseñas().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.resena = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });
  }

}
