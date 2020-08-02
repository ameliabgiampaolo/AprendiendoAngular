import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: ` 
        <h1> {{ titulo }} </h1>
        <p>{{ comentario }}</p>
        <h2> Estamos en el {{year}} </h2>
    `
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONETE";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        console.log("Componente mi-componente cargado !!");
        console.log(this.titulo, this.comentario, this.year);
    }
}