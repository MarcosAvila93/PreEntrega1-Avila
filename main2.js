function productoTienda(totalProducto, costo, cantidad) {
    return totalProducto + costo * cantidad;
}
let total = 0;
let pinturaLatex = 1;
let rodillo = 2;
let pincel = 3;
let lijas = 4;
let diluyente = 5;
let opcion;
let comenzar;
do {
    opcion = parseInt(prompt("Elija el código del producto que desea comprar : 1.Pintura Látex  2.Rodillos  3.Pinceles  4.Lijas  5.Diluyentes"));
    switch (opcion) {
        case pinturaLatex:
            cantidadProducto = parseInt(prompt("La pintura látex tiene un costo de $1200, ¿Cuántas desea comprar?"));
            total = productoTienda(total, 1200, cantidadProducto);
            alert('El total de su compra es $' + total );
            break;
        case rodillo:
            cantidadProducto = parseInt(prompt("El rodillo tiene un costo de $500, ¿Cuántos desea comprar?"));
            total = productoTienda(total, 500, cantidadProducto);
            alert(total);
            break;
        case pincel:
            cantidadProducto = parseInt(prompt("El pincel tiene un costo de $450, ¿Cuántos desea comprar?"));
            total = productoTienda(total, 450, cantidadProducto);
            alert(total);
            break;
        case lijas:
            cantidadProducto = parseInt(prompt("La lija tiene un costo de $200, ¿Cuántos desea comprar?"));
            total = productoTienda(total, 200, cantidadProducto);
            alert(total);
            break;
        case diluyente:
            cantidadProducto = parseInt(prompt("El diluyente tiene un costo de $1000, ¿Cuántos desea comprar?"));
            total = productoTienda(total, 1000, cantidadProducto);
            alert(total);
            break;
        default:
            alert("Ingrese una opcion valida, por favor")

        //total = total+precio*cantidad
    }
    comenzar = prompt("Desea agregar algo más a su compra? Si/No")

} while (comenzar !== "no")

alert("El total de su compra es de $" + total+ ". Muchas gracias por su compra");





