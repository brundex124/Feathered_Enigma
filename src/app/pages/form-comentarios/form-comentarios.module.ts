import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormComentariosPageRoutingModule } from './form-comentarios-routing.module';

import { FormComentariosPage } from './form-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormComentariosPageRoutingModule
  ],
  declarations: [FormComentariosPage]
})
export class FormComentariosPageModule {}
