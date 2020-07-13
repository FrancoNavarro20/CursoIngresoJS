/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
    var nombreIngresado;
    nombreIngresado = txtIdNombre.value; //No olvidar el ".value" , el error es => [object HTMLInputElement]
    //nombreIngresado = document.getElementById('txtIdNombre').value;

    alert("Su nombre es " + nombreIngresado);

}