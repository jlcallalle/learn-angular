# Angular v8

## Instalar

Requisitos:
- NodeJS > 12
- Angular LCI  > 8

Complementos Visual Studio Code
- Angular 
- language services
- TsLint**


Instalar Angular

``` js
npm i -g  @angular/cli
ng --version 
```

Crear App
``` js
ng new angular-8
```

Iniciar **Proyecto**
``` js
ng serve    // entorno desarrollo
ng build --prod  // entorno produccion
ng serve --port 4600  // cambiar puerto
```

## String Interpolation
``` js
Title: {{ title }} 
{{ 'Hola Mundo' }}
{{ 1 + 2 }} 
```

## Data binding en Angular - NgModel
Enlace de datos del componente al template

En app.component.html 
``` html
<input type="text" [(ngModel)]="title">
{{ title }}
```

Esta directiva trabaja en formulario por ello se requiere importar

En app.module.ts
``` js
// decorador 'Component'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ],
})
```

Esto permite que los cambios que haga en el template, aplican en la variable

## Uso Condicionales - *ngIf
Hacer condicionales dentro de un template

``` html
<div *ngIf="title === 'nicolas' ">
  esto es un div
</div>
```


## Uso Listar - ngFor add y delete (event click)

En app.componentes.ts: Se crea una lista array 'Items'
``` js
export class AppComponent {
  title = 'myapp';
  items = ['nicolas', 'julian', 'sandra'];
}
```

En ap.componentes.html : Mostramos e iteramos la lista y tambien un evento click:

``` html
<button (click)="addItem()">Click me!</button>
<ul>
  <li *ngIf="items.length === 0"> La lista esta vacia </li>
  <li *ngFor="let item of items; index as i; trackBy: trackByFn">
    {{ i }} - {{ item }}
    <button (click)="deleteItem(i)">delete</button>
  </li>
</ul>
```

En app.componentes.ts
``` js
  addItem() {
    console.log('add');
    this.items.push('nuevo Item');
  }

  deleteItem(index: number) {
    console.log('delete');
    this.items.splice(index, 1);
  }
```

## Uso Listar - ngFor para recorrer objetos

En ap.componentes.ts : Creamos un array de objetos 
``` js
export class AppComponent {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];
}
```

En ap.componentes.html 
``` html
<div *ngFor="let product of products">
  {{ product.title }}
  <img [src]="product.image" alt="">
  {{ product.price }}
</div>
```
Ahora hemos logrado imprimir los productos dentro del tempalte



Es buena practica poder "Tipear" nuestros objetos, para ello utilizamos el elemento 'Interface' dentro del lenguaje de TypeScript

Para hello creamos el archivo: "product.model.ts", agregamos representación clara de lo que va tener un producto. luego importamos.

``` js
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}
```
objeto = {}, este tipo de variable no es iterable, tiene que ser un "ARRAY"

## Uso de ngSwitch

``` html
<input type="text" [(ngModel)]="title">
<div [ngSwitch]="title">
  <p *ngSwitchCase=" 'jorge' "> este es jorge</p>
  <p *ngSwitchCase=" 'julian' "> este es julian</p>****
  <p *ngSwitchCase=" 'camilo' "> este es camilo</p>
  <p *ngSwitchDefault> No hay match</p>
</div>
```

## Components