function mostrar() {
    //tomo la edad  

    var edad;

    edad = txtIdEdad.value;

    //version 1
    /*
     if (edad > 17 || edad < 13) {
         alert("No eres en adolescente");
     }*/

     /* VERSION 2
     if ( !(edad > 17 || edad < 13) ) {
         alert("No eres en adolescente");
     }*/

    //version 2
    if (edad > 17) 
    {
        if (edad < 13) 
        {
            alert("No eres un adolescente");
        }
    }

    //Version 3
    

} //FIN DE LA FUNCIÓN