import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  standalone:false,
  selector: 'app-form-comentarios',
  templateUrl: './form-comentarios.page.html',
  styleUrls: ['./form-comentarios.page.scss'],
})
export class FormComentariosPage implements OnInit {
  constructor(private toastController: ToastController,private firebase: ConsultasService,private redireccion: Router) { }
    // Definición de los campos de la reseña
  formulario = { usuario: '', puntuacion: 1,comentario:'' };

  async guardarFormulario() {//Recolecta los datos del formulario

    if (this.formulario.usuario && this.formulario.puntuacion && this.formulario.comentario) {
      await this.firebase.guardarDatos(this.formulario);
      this.mostrarToast('Reseña enviada correctamente', 'success');
        this.redireccion.navigate(['/principal']); //Redireccion una vez guardado correctamente el formulario

    } else {
      this.mostrarToast('Rellene los campos faltantes', 'danger');
    }
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color
    });
    await toast.present();
  }


  ngOnInit() {
  }

}
