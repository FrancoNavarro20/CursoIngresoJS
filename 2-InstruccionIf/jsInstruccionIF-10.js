/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

Nombre: Franco Navarro
*/

function mostrar() {

    //Genero el número RANDOM entre 1 y 10 

    var nota;
    var numRamdom;
    var mensaje;

    numRamdom = Math.floor(Math.random() * 10 + 1);
    nota = prompt("Escriba su nota", numRamdom);

    /*
    if (nota < 4) {
        alert("La proxima se puede");
    } else if (nota > 4 && nota < 9) {
        alert("Aprobo");
    } else if (nota > 8 && nota < 11) {
        alert("Excelente");
    }
    */

    if(nota < 4)
    {
        alert("La proxima se puede");
        mensaje = "La proxima se puede";
    }else
    {
        if(nota < 9)
        {
            alert("Aprobo");
            mensaje = "Aprobo";
        }else
        {
            alert("Excelente");
            mensaje = "Excelente";
        }
    }

    alert(mensaje); //Poniendo un solo alert y no 3
} //FIN DE LA FUNCIÓN