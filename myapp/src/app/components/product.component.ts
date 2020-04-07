// indicamos que tipo será, en este caso 'Component'
// los decoradores se usan antes de escribir la clase
import { Component } from '@angular/core';

@Component({
  selector: 'app-product', // indicamos nombre de
  templateUrl: './product.component.html' // enlace html
})

// creamos clase ProductComponente, con 'export' indicamos que se puede usar en cualquier parte
// Se agrega contexto, caracteristicas del producto
export class ProductComponent {


}
