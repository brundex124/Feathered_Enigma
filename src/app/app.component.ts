import { Component } from '@angular/core';
import { ConsultasService } from './services/consultas.service';
import { Platform } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  titulo: string = 'Inicio';


  constructor(private firebaseService: ConsultasService,private platform: Platform,private router: Router) {
    this.initializeApp();// Llamamos a la función que inicializa la app y establece el modo oscuro posteriormente

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.actualizarTitulo(event.urlAfterRedirects);
      }
    });
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

  actualizarTitulo(url: string) {
    // Definir títulos según la ruta
    const titulos: { [key: string]: string } = {
      '/principal': 'Principal',
      '/galeria': 'Galeria',
      '/historia': 'Historia',
      '/personajes':'Personajes',
      '/colaboradores':'Colaboradores'
    };


    this.titulo = titulos[url] || 'Página Desconocida';
  }

  ngOnInit() {
   
  }
}
