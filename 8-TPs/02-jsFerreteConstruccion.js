/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    var largoTerreno;
    var anchoTerreno;
    var perimetro; // buscar perimetro
    // var suma;
    var alambre;

    largoTerreno = txtIdLargo.value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = txtIdAncho.value;
    anchoTerreno = parseInt(anchoTerreno);

    perimetro = largoTerreno * 2 + anchoTerreno * 2;
    alambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es " + alambre);
}

function Circulo() {

    var radioTerreno;
    var longitud;

    radioTerreno = txtIdRadio.value;
    radioTerreno = parseInt(radioTerreno);

    longitud = (2 * Math.PI * radioTerreno) * 3;

    alert(`La cantidad de alambre a comprar es ${longitud.toFixed(2)}`);

}

function Materiales() {

    var largo;
    var ancho;
    var sumar;
    var cemento;
    var cal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    suma = largo * ancho;

    cemento = suma * 2;

    cal = suma * 3;

    alert(`Para ${suma}m2 se necesitaran ${cal} bolsas de cal.`);
}