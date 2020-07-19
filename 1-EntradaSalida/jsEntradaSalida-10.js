/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    //alert("ok");

    var importe; //1000
    var descuento;
    var resultado;

    importe = txtIdImporte.value;
    importe = parseInt(importe);

    //descuento = importe * 25 / 100;


    descuento = (importe * 1.25) - importe; // 1250 - 1000; => 250
    resultado = importe - descuento;

    /*
    descuento = importe * 25 / 100; // => 250

    resultado = importe - descuento; // => 750
    
    */

    txtIdResultado.value = resultado;

    //Promedio es la suma total de todos los numeros , dividido por la cantidad de numeros que ingrese!!!
}