import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { escenarios, info } from '../../interfaces/interfaces';
@Component({
  standalone: false,
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  // Arreglo para almacenar los escenarios obtenidos de la base de datos */
  escenarios: escenarios[] = [];
  
  /// Constructor del componente que inyecta los servicios necesarios y controlador que nos ayudara a forzar la detección de cambios

  constructor(private firebaseService: ConsultasService,private cdr:ChangeDetectorRef) { }

  // Realiza una suscripción a los datos  que proporcionados por el servicio segun lo requerido con el getDatosNombreFuncion.

  ngOnInit() {
    this.firebaseService.getDatosEscenarios().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
      // Ord  enar los datos por el campo "Nivel" de forma ascendente
        this.escenarios = data.sort((a, b) => a.Escenario - b.Escenario);
        this.cdr.detectChanges();// Fuerza la detección de cambios para asegurar que la vista se actualice una vez que se obtienen una respues.
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });
  }

}
