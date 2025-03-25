import { Component } from '@angular/core';
import { ConsultasService } from './services/consultas.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {


  constructor(private firebaseService: ConsultasService) { }

  ngOnInit() {
    // Llamamos al servicio para obtener los datos de Firestore
/*     this.firebaseService.getDatos().subscribe(respuesta => {
      console.log('Datos de Firestore:', respuesta);  // Aquí imprimimos los datos en la consola
    }); */
  }
}
