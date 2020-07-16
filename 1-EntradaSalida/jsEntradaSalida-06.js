/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    //alert("Ok")

    //Primero escribir las variables

    var numeroUno;
    var numeroDos;
    var suma;

    //
    numeroUno = txtIdNumeroUno.value;
    numeroUno = parseInt(numeroUno);
    //
    numeroDos = txtIdNumeroDos.value;
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos; //Sin convertir estos datos a enteros(parseInt) se los puede en modo string  restar("-"),multiplicar(*) y dividir(/)

    alert(suma);




    /*
    var numeroUno;
    var numeroDos;
    var resultado

    numeroUno = parseInt(txtIdNumeroUno.value);
    numeroDos = parseInt(txtIdNumeroDos.value);

    resultado = numeroUno + numeroDos;

    alert("La suma es " + resultado);
*/
}