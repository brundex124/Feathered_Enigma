import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComentariosPage } from './form-comentarios.page';

const routes: Routes = [
  {
    path: '',
    component: FormComentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormComentariosPageRoutingModule {}
