//Primera pre entrega Avila

let precioItem;
let nombreItem;
let cantidad;
let nombreUser;
let total = 0; ///vamos a mostrar el total de la suma de cada item por su cantidad
let opcion; /// 'si' 'no'
let ticket = ``;

alert('Bienvenido a su tienda Online!!');
nombreUser = prompt("Ingrese su nombre!");


do {
    ///pido precio y nombre del item
    nombreItem = prompt("Ingrese nombre del producto");
    precioItem = Number(prompt("Ingrese precio"));


    while (precioItem < 0) { ///Mientras el precio este mal le voy a pedir que ingrese otro
        precioItem = Number(prompt('Precio invalido, ingrese otro'));
    }

    cantidad = parseInt(prompt("Ingrese cantidad"));

    while (cantidad <= 0) { ///mientras la cantidad sea menor o igual a 0, le pedimos que la vuelva a ingresar
        cantidad = parseInt(prompt('Cantidad invalida, ingrese otra'));
    } 
    ticket = ticket + `Nombre del producto: ${nombreItem} \n Precio unitario: $${precioItem} \n Cantidad: ${cantidad} \n Subtotal: $${cantidad * precioItem} \n\n`
    total = total + cantidad * precioItem;

    opcion = prompt("Desea comprar otro producto?"); ///le pregunto si desea ingresar otro item, asi vuelvo a iterar o terminar el bucle

} while (opcion == 'si');

alert(`${ticket} El total para ${nombreUser} es de: $${total}`);
//alert('El total para ' + nombreUser + ' es de ' + total);



