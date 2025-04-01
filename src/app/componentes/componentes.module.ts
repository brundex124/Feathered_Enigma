import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [HeaderComponent,NavBarComponent,DetalleComponent],
  exports:[HeaderComponent,NavBarComponent,DetalleComponent],
  imports: [
    IonicModule,
    CommonModule,
    
  ]
})
export class ComponentesModule { }
