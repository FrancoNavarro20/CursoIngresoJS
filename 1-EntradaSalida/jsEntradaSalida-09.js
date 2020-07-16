/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {


    //alert("ok");

    var sueldo;
    var aumento10;
    var resultado;

    //Tomando y parseando los numeros a enteros

    sueldo = txtIdSueldo.value;
    sueldo = parseInt(sueldo);

    //Aumentando el 10%
    //aumento10 = (10 * sueldo) / 100;

    //Sumando numero1 al 10%
    //resultado = sueldo + aumento10;

    resultado = sueldo * 1.1; //Manera resumida de poner el 10% del sueldo

    //Resultado final!!
    txtIdResultado.value = resultado;
}