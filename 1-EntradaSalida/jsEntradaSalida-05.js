/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
    var edadIngresada;
    var nombreIngresado;

    nombreIngresado = txtIdNombre.value;
    edadIngresada = txtIdEdad.value;

    alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

    //testing
    alert("Usted se llama" + nombreIngresado);
    alert("y tiene " + edadIngresada + "años");

    alert();

}