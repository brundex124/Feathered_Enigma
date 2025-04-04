export interface info{
    id:string;
    Texto:string;
}

export interface escenarios{ 
    Escenario:number;
    Nombre:string;
    Descripcion:string;
    foto:string;
}


export interface personajes{ 
    Nombre:string;
    Personaje:string;
    Descripcion:string;
    Foto:string;
    Foto_vida:string;
    Vida:number;
}

export interface reseñas{
    usuario:string,
    puntuacion:number,
    comentario:string,
}

export interface controles{
    boton:string,
    accion:string,
    foto:string,
}

export interface items{
    nombre:string,
    accion:string,
    descripcion:string,
    foto:string,
}