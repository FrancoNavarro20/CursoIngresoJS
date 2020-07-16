/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {

    var edad;

    var nombre;

    nombre = txtIdNombre.value;
    edad = txtIdEdad.value;

    //Concatenacion este es el que va !!
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");


    //testing
    alert("Usted se llama" + nombreIngresado);
    alert("y tiene " + edadIngresada + "años");



}