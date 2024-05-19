var topping = prompt("Elegir un topping ('Oreo, Kitkat o Kinder')").toLowerCase();
var precio = 0;
var precioFinal = 8500;
if(topping == "oreo")
{
    precio = 10;
} else if(topping == "kitkat")
{
    precio = 15
} else if(topping == "kinder")
{
    precio = 25
} else 
{
    alert("No tenemos ese topping, seleccione uno de los indicados");
}

console.log("El precio final del helado es de" +(precioFinal + precio));


var pedido = prompt("Ingrese lo que quiera").toLowerCase();
switch (pedido) {
    case "carne":
        console.log("Su bebida es vino tinto");
        break;
    case "pescao":
        console.log("Su bebida es vino blanco");
        break;
    case "verdura":
        console.log("Su bebida es agua");
        break;
    default:
        
        console.log("Elija carne pescado o verdura");
        break;
}

var arrayDeDatos = [1,2,3,4];
var cantidad = arrayDeDatos.length;
console.log("Primer recorrido");
for (let index = 0; index < cantidad; index++) {
    console.log(arrayDeDatos[index]);
    arrayDeDatos.push(Math.floor(Math.random() * 8));
}
console.log("Recorrido de vuelta");
for (let index = 0; index < arrayDeDatos.length; index++) {
    console.log(arrayDeDatos[index]);
}

var numero = 0; 
while(numero < 11)
{
    console.log(numero + " es mas chico que 11");
    numero++;
}
