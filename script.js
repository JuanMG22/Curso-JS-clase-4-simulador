// Variables que se utilizan
let nProductos = parseInt(prompt("Ingresa la cantidad de productos que quiere cargar"));
let nombreProducto;
let codigoProducto;
let precioSinIva;
let precioConIva;
let precioVenta;
let ganancia;
let producto;


// Bucle for que sirva para elegir la cantidad de productos a cargar
for (let i = 1; i <= nProductos; i++) {

    // Llamada de funciones
    ingresoNombreProducto();
    ingresoCodigoProducto();
    ingresoCosto();
    sumarIva();
    ingresoPrecioVenta()
    calcularGanancia();
    escribirProducto();
}

    // Funciones
    function ingresoNombreProducto() {
        nombreProducto = prompt("Ingrese nombre de producto");
        return nombreProducto;
    }

    function ingresoCodigoProducto() {
        codigoProducto = prompt("Ingrese codigo de producto");
        return codigoProducto;
    }

    function ingresoCosto () {
    precioSinIva = parseInt(prompt("Ingrese el precio del producto"));
    if (precioSinIva < 0) {
        alert("Ingrese un precio válido")
        }
        return precioSinIva;
    }

    function sumarIva () {
        precioConIva =  precioSinIva * 1.21;
        return parseInt(precioConIva);
    }

    function ingresoPrecioVenta() {
        precioVenta = prompt("Ingrese precio de venta");
        return precioVenta;
    }

    function calcularGanancia () {
        ganancia =  precioSinIva - precioVenta;
        return ganancia;
    }

    function escribirProducto() {
        console.log( `Nombre de producto ${nombreProducto}`);
        console.log( `Codigo ${codigoProducto}`);
        console.log( `Precio sin IVA $${precioSinIva}`);
        console.log(`Precio con IVA $${precioConIva}`);
        console.log(`Precio de venta $${precioVenta}`);
        console.log(`El producto genera una ganancia de $${ganancia}`);
    }





