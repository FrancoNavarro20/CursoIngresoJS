function mostrar() {
    //tomo la edad  
    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);
    /*
        if (edad > 18) {
            alert("Eres mayor  de edad");
        } else {
            alert("Eres menor de edad");
        }
    */

    if (edad > 18) {
        alert("Eres mayor de edad");
    }
    if (edad < 17) {
        alert("Eres menor de edad");
    }

} //FIN DE LA FUNCIÓN