function mostrar() {
    //tomo la edad  

    var edad;
    var EstadoCivil;

    edad = document.getElementById("txtIdEdad").value;

    EstadoCivil = document.getElementById("estadoCivil").value;


    if (edad > 18 && EstadoCivil != "Soltero") {

        alert("Eres demaciodo pequeño para ser Soltero");
    }

} //FIN DE LA FUNCIÓN