/*
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	//asignacion de variables
	var i;
	var repetciones;

	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	for(i = 0; i < repeticiones; i++)
	{	
		document.write("Hola UTN FRA <br>");
	}	

}//FIN DE LA FUNCIÓN