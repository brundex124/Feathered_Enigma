import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { info } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  standalone:false,
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
    historias: info[] = [];  // Arreglo para almacenar los escenarios obtenidos de la base de datos */

  /// Constructor del componente que inyecta los servicios necesarios y controlador que nos ayudara a forzar la detección de cambios
  constructor(private firebaseService: ConsultasService,private cdr: ChangeDetectorRef) { } 

  // Realiza una suscripción a los datos  que proporcionados por el servicio segun lo requerido con el getDatosNombreFuncion.
  ngOnInit() {
    this.firebaseService.getDatosHistoria().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.historias = data;
        this.cdr.detectChanges();//detecta los cambios en la vista y los aplica en tiempo real
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });
  }

}
