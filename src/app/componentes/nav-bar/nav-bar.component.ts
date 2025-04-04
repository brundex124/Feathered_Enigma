import { Component, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
  tab:string;
}

@Component({
  standalone:false,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {

  elementos: Elemento[]=[
    {
      //primer elemento de la lista
      icono: 'home',
      nombre: 'Principal',
      ruta:'/principal',
      tab:'principal'
    },
    {
      icono: 'image',
      nombre: 'Galeria',
      ruta:'/galeria',
      tab:'galeria'

    },
    {
      icono: 'library',
      nombre: 'Historia',
      ruta:'/historia',
      tab:'historia'

    },
    {
      icono: 'game-controller',
      nombre: 'Mecanicas',
      ruta:'/personajes',
      tab:'personajes'

    },
    {
      icono: 'people',
      nombre: 'Colaboradores',
      ruta:'/colaboradores',
      tab:'colaboradores'

    },
  ];
  constructor() { }

  ngOnInit() {}

}
