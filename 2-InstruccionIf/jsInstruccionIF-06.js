function mostrar() {
    //tomo la edad  

    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);
    
    /* version 1

        if (edad > 17) {
            alert("Eres mayor de edad");
        }
        if (edad < 18) {
            if (edad > 12) {
                alert("Eres un adolescente");
            }
        }
        if (edad < 13) {
            alert("Eres un niño");
        }
*/

  /* Version 2

    if (edad > 17) {
        alert("Eres mayor de edad");
    } else if (edad > 13 && edad < 17) {
        alert("Eres un adolescente");
    } else if (edad < 13) {
        alert("Eres de niño");
    }
    */

//Version 3
    if (edad < 13) //15
    {
        alert("Eres un niño");
    } 
    else
     {
        if (edad < 18)
        {
            alert("Eres un adolescente");
        } 
        else 
        {
            alert("Eres un mayor de edad");
        }
    }

    if(edad < 13) //17
    {
        alert("Eres un niño");
    }
    else
    {
        if(edad < 18) //45
        {
            alert("Eres un adolescente");
        }
        else()
        {
            alert("Eres mayor de edad");
        }
    }
  

} //FIN DE LA FUNCIÓN