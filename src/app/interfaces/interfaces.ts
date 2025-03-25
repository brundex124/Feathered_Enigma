//interfaz para los escenarios la cual contiene los atributos que se obtendran de la base de datos de Firebase

export interface Personajes{
    id: number;
}


export interface info{
    id:string;
    Texto:string;
}

export interface escenarios{ 
    Escenario:number;
    Nombre:string;
    foto:string;
}