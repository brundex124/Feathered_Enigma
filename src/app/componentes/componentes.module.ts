import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [HeaderComponent,NavBarComponent],
  exports:[HeaderComponent,NavBarComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentesModule { }
