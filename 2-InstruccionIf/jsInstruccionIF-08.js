/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
 */

function mostrar() {
    //tomo la edad  
    var edad;
    var estadoCivilIngresado;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

    estadoCivilIngresado = estadoCivil.value;

    /*
    //Version 1
    if (edad > 17 && estadoCivilIngresado == "Soltero") {

        alert("Es soltero y no es menor");
    }
    */

    /*
    //Version 2
    if (edad > 17) {
        if (estadoCivilIngresado == "Soltero") {
            alert("Es soltero y no es menor");
        }
    }
    */

    //Version 3
    if (!(edad < 17 && estadoCivilIngresado != "Soltero")) {
        alert("Es soltero y no es menor");
    }

} //FIN DE LA FUNCIÓN