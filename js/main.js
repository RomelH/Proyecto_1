//Defino mi array de productos
const productos = [
    {
        id: 1, 
        nombre: "RemeraWild",
        oferta: true,
        precio: 3000,
        cantidad: 0
    },
    {
        id: 2,
        nombre: "JeansCrug",
        oferta: false,
        precio: 7000,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "ChombaSalman",
        oferta: true,
        precio: 5000,
        cantidad: 0
    },
    {
        id: 4,
        nombre: "FaldaRusty",
        oferta: true,
        precio: 3000,
        cantidad: 0
    },
    {
        id: 5,
        nombre: "CamisaSalman",
        oferta: false,
        precio: 8000,
        cantidad: 0
    },
    {
        id: 6,
        nombre: "GorroAzul",
        oferta: true,
        precio: 4000,
        cantidad: 0
    }
]
class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.maxProductosParaDescuento = 3;
        this.descuentoPorProducto = 0;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let cantProd = 0;
        let producto = productos.find(prod => prod.id === id);
        console.log(producto);
        
        if (producto) {
            console.log(producto.oferta);
            if(producto.oferta===true){
                cantProd = parseInt(prompt("Ingrese cantidad de " + producto.nombre + ". \nOferta: Si compra 3 o mas 10% de descuento" ));
            } else {
                cantProd = parseInt(prompt("Ingrese cantidad de " + producto.nombre + ":" ));
            }
            console.log(cantProd);
            if(cantProd){
                if(this.productos.some(prod => prod.id === id)){
                    producto.cantidad += cantProd;
                } else {
                    producto.cantidad = cantProd;
                    this.productos.push(producto);
                    console.log(this.productos.cantidad)
                }
            }
        } else {
            console.log("No se encontró el Producto con #" + id + "!");
        }
    }

    listarCarrito() {
        let salida = "";
    
        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "  " + item.cantidad + " Unid.\n";
        })
    
        return salida;
    }

    aplicarDescuento() { //Si tengo 3 o más productos con oferta en mi Carrito, aplico un descuento
        let descuentoTotal = 0;
        this.productos.forEach(item => {
            if((item.oferta === true) && (item.cantidad >= this.maxProductosParaDescuento)){
                descuentoTotal += (((item.precio*item.cantidad)*this.descuento) / 100);
            }
        });
        return descuentoTotal;
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(item => {
           total += (item.precio*item.cantidad);
        });

        return total;
    }
}

function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    });
    return salida;
}

const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal + "\nGracias por su compra!!");

