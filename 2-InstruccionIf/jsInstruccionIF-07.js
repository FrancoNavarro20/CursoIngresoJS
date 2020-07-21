function mostrar() {

    /*Operadores if
        if ("lalal") {
            alert("No estra");
        }
        if ("lalal") {
            alert("Si entra");
        }
        if (1) // Si deja pasar!! 
        {
            alert("No estra");
        }
        if (0) //No deja pasar!!
        {
            alert("Si entra");
        }
    */


    //tomo la edad 
    var edad;
    var EstadoCivil;

    edad = document.getElementById("txtIdEdad").value;
    edad = parseInt(edad);

    EstadoCivil = document.getElementById("estadoCivil").value;

    //Version 1
    /*
     if (edad < 18) 
     {
     
      if(estadoCivil != "Soltero")
      {
         alert("Es muy pequeño para ser Soltero");
      }

     }
     */

    //Version 2

    /* 
      if(edad < 18 && estadoCivil != "Soltero")
     {
         alert("Eres muy pequeño para ser Soltero");
     }
    */

    //Version 3
    if (!(edad > 18 && estadoCivil == "Soltero")) //De esta manera de cambia "!" te cambia los operadores por su contrario (< y !==) 
    {
        alert("Eres muy pequeño para ser Soltero");
    }

} //FIN DE LA FUNCIÓN