function calcularDescuento(Total,porcentaje){
    return Total - (Total*porcentaje/100);
}

function calcularTotal(precio,cantidad){
    if(cantidad >= 3){
        return calcularDescuento(precio*cantidad,10);
    } else{
        return precio*cantidad;
    }
}

function ingresarCantTotal(precio){
    cantProd = parseInt(prompt("Ingrese la cantidad que desea comprar"));
    if(cantProd >= 0){
        alert("El total a pagar es: "+calcularTotal(precio,cantProd)+"\n¡Gracias por su compra!");   
    }else{
        alert("Cantidad ingresada no valida")
    }
}


let precioRemeraWild = 3000
let precioJeansCrug = 7000
let precioChombaSalman = 5000
let precioFaltaRusty = 3000
let precioCamisaSalman = 8000
let precioGorroAzul = 4000

function cargaBody(){
let opcion = prompt(
        "Elija un articulo: \n1-Remera: Wild $3000 \n2-Jeans Crug: $7000 \n3-Chomba Salman: $5000 \n4-Falda Rusty: $3000 \n5-Camisa Salman: $8000 \n6-Gorro Azul: $4000 \n*Para compars de 3 unidades o mas 10% de descuento*\nPresiona X para finalizar"
        );
let cantProd = 0 
    while (opcion != "X" && opcion != "x" && opcion == false) {
        
        switch (opcion) {
            case "1": 
                ingresarCantTotal(precioRemeraWild);
                break;
            case "2":
                ingresarCantTotal(precioJeansCrug)
                break;
            case "3": 
            ingresarCantTotal(precioChombaSalman);
                break;
            case "4":
                ingresarCantTotal(precioFaltaRusty);
                break;
            case "5":
                ingresarCantTotal(precioCamisaSalman);
                break;
            case "6":
                ingresarCantTotal(precioGorroAzul);
                break;
            default:
                alert("Articulo NO disponible");
                break;
        }
        opcion = prompt(
            "Elija un articulo: \n1-Remera: Wild $3000 \n2-Jeans Crug: $7000 \n3-Chomba Salman: $5000 \n4-Falda Rusty: $3000 \n5-Camisa Salman: $8000 \n6-Gorro Azul: $4000 \n*Para compars de 3 unidades o mas 10% de descuento*\nPresiona X para finalizar"
            );
    }
}