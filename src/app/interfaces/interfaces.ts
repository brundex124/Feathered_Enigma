export interface info{
    id:string;
    Texto:string;
}

export interface escenarios{ 
    Escenario:number;
    Nombre:string;
    foto:string;
}


export interface personajes{ 
    Nombre:string;
    Personaje:string;
    Descripcion:string;
    Foto:string;
    Vida:number;
}

export interface reseñas{
    usuario:string,
    puntuacion:number,
    comentario:string,
}