import { Component } from '@angular/core';
import { ConsultasService } from './services/consultas.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {


  constructor(private firebaseService: ConsultasService,private platform: Platform) {
    this.initializeApp();// Llamamos a la función que inicializa la app y establece el modo oscuro posteriormente

   }
  initializeApp() {
    this.platform.ready().then(() => {
      // Establecer el modo oscuro por defecto para no tener conflictos con los temas de los usuarios y se presente la app en modo oscuro por defecto
      this.setDarkMode();
    });
  }

  setDarkMode() {
    document.body.classList.add('dark');// Añadimos la clase dark al body para que se muestre la app en modo oscuro con los estilos css global
  }

  ngOnInit() {
    // Llamamos al servicio para obtener los datos de Firestore
/*     this.firebaseService.getDatos().subscribe(respuesta => {
      console.log('Datos de Firestore:', respuesta);  // Aquí imprimimos los datos en la consola
    }); */
  }
}
