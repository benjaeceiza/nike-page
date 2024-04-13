

function pedir(cantidadFuncion) {
    cantidadFuncion = parseInt(prompt("Cuantos desea llevar?"));
    return cantidadFuncion;
}


function control(contador, cantidadFuncion) {
    while (cantidadFuncion <= 0 || cantidadFuncion > 50 || isNaN(cantidadFuncion)) {
        cantidadFuncion = parseInt(prompt("Ingrese un numero entre 1 y 50"));
    }

    while ((contador + cantidadFuncion) > 50) {
        cantidadFuncion = parseInt(prompt("Por favor ingrese un numero menor, ya que supera nuestro stock"));
        while (cantidadFuncion <= 0) {
            cantidadFuncion = parseInt(prompt("Ingrese un numero entre 1 y 50"));
        }
    }

    return cantidadFuncion;
}

let precioTotal = 0;
let opcion;
let cantidad;
let contadorTacos = 0;
let contadorPastas = 0;
let contadorHam = 0;
let contadorMila = 0;


do {
    opcion = parseInt(prompt("MENU DE OPCIONES:\n\n1.Tacos = $15\n2.Milanesas = $20\n3.Pastas = $25\n4.Hamburguesa = $20\n5.Carrito\n\n6.salir"));
    switch (opcion) {
        case 1:

            if (contadorTacos === 50) {
                alert("Lo lamento nos quedamos sin tacos");
                break;
            }

            cantidad = pedir(cantidad);


            cantidad = control(contadorTacos, cantidad);

            contadorTacos = contadorTacos + cantidad;
            precioTotal = precioTotal + (15*cantidad);
            break;
        case 2:

            if (contadorMila === 50) {
                alert("Lo lamento nos quedamos sin milanesas");
                break;
            }
            cantidad = pedir(cantidad);

            cantidad = control(contadorMila, cantidad);

            contadorMila = contadorMila + cantidad;
            precioTotal = precioTotal + (20*cantidad);
            break;

        case 3:
            if (contadorPastas === 50) {
                alert("Lo lamento nos quedamos sin pastas");
                break;
            }
            cantidad = pedir(cantidad);

            cantidad = control(contadorPastas, cantidad);

            contadorPastas = contadorPastas + cantidad;
            precioTotal = precioTotal + (25*cantidad);
            break;
        case 4:
            if (contadorHam === 50) {
                alert("Lo lamento nos quedamos sin Hamburguesas");
                break;
            }
            cantidad = pedir(cantidad);

            cantidad = control(contadorHam, cantidad);

            contadorHam = contadorHam + cantidad;
            precioTotal = precioTotal + (20*cantidad);
            break;
        case 5:
            alert("CARRITO DE COMPRAS:\n\nORDENES DE TACOS: " + contadorTacos + "\n\nORDENES DE MILANESAS: " + contadorMila + "\n\nORDENES DE PASTAS: " + contadorPastas + "\n\nORDENES DE HAMBURGUESAS: " + contadorHam +"\n\nTOTAL A PAGAR: " + precioTotal);
            break;
        case 6:
            alert("GRACIAS POR USAR EL MENU, VUELVA PRONTOS");
            break;
        default:
            alert("Ingrese un numero entre 1 y 6");
            break;
    }

} while (opcion !== 6);