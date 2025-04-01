import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  standalone:false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  // Input sirve para recibir 
  @Input() titulo: string='';
  constructor() {
    
  }

  

  
  ngOnInit() {}

}
