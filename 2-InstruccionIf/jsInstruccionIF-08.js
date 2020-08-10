/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

/*
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
   x a todos los mayores de edad, mostrar el mensaje "se responsable"
   x a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
   x a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
   x a los niños tambien informar "hagan la tarea" 
   x a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
    a los mayores de edad solteros, tambien informar "a vivir la vida"
    a los mayores de edad casados , tambien informar "a disfrutar la pareja"
    a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/


function mostrar() 
{
    //tomo la edad  
    var edadIngresada;
    var estadoCivilIngresado;
    var mensaje;
     
    edad = txtIdEdad.value;
    edad = parseInt(edad);
    estadoCivilIngresado = estadoCivil.value;

    if(edad > 17 && edad < 60)
    {
        //mensaje = "Se responsable";
        
        switch(estadoCivilIngresado)
        {
            case "Soltero":
                mensaje = "Se responsable, pero a vivir la vida";
                break;
            case "Casado":
                mensaje ="Se responsable , a disfrutar de la pareja";
                break;
            case "Divorciado":
                mensaje = "Se responsable , a intentarlo nuevamente";
                break;
        }
    }
    else
    {
        if(edad < 13)
        {
            mensaje = "Respeta a tus mayores, hagan la tarea";
        }
        else
        {
            if(edad < 18)
            {
                switch(estadoCivilIngresado)
                {
                    case "Casado":
                    case "Divorciado":
                        mensaje = "Respeta a tus mayores, sos muy joven para no ser soltero";
                        break;
                    default:
                        mensaje = "Respeta a tus mayores";
                        break;    
                }
            }
            else
            {
                if(edad > 59)
                {
                    switch(estadoCivilIngresado)
                    {
                        case "Soltero":
                            mensaje = "Se responsable, eres persona de riesgo,  pero a vivir la vida";
                            break;
                        case "Casado":
                            mensaje =  "Se responsable, eres persona de riesgo, a disfrutar de la pareja"; 
                            break;
                        case "Divorciado":
                            mensaje = "Se responsable, eres persona de riesgo, a intentarlo nuevamente";
                            break;    
                    }
                    
                }
            }
        }
    } 

    alert(mensaje);

}//FIN DE LA FUNCIÓN



















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
   

    //Version 3
    if (!(edad < 17 && estadoCivilIngresado != "Soltero")) {
        alert("Es soltero y no es menor");
    }
     */



    



