function mostrar() {
    //tomo la edad  

    var edad;

    edad = txtIdEdad.value;

    if (edad > 17) {
        alert("Eres mayor de edad");
    } else if (edad > 13 && edad < 17) {
        alert("Eres un adolescente");
    } else if (edad < 13) {
        alert("Eres de niño");
    }

} //FIN DE LA FUNCIÓN