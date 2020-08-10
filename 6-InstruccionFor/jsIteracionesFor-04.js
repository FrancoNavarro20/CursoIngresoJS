/*
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	var i;
	var respuesta;

	for(i = 0; i < 10; i++)
	{
		alert("Hola");

		respuesta = prompt("¿Desea mostrar el mensaje de nuevo?");
		if(respuesta == "no")
		{
			break;
		}	
	}	

}//FIN DE LA FUNCIÓN