import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage implements OnInit {

  colaboradores = [] = [
    {
      foto: "../../../assets/img/woman.png",
      nombre: "Alejo Pineada Abigail ",
      rol: "Diseñadora"
    },{
      foto: "../../../assets/img/man.png",
      nombre: "Pablo Ivan Alcantar Tamayo",
      rol: "Desarollador"
    },{
      foto:"../../../assets/img/man.png",
      nombre:"Martin Ulises Gómez Castro",
      rol:"Tester"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
