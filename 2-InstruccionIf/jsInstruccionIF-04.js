function mostrar() {
    //tomo la edad  

    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

    if (edad < 18) {

        if (edad > 12) {
            alert("Eres un adolescente");
        }
    }

} //FIN DE LA FUNCIÓN