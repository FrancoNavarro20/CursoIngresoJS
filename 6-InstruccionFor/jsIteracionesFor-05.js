/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	var i; //inicializacion de variable for
	var numero;

	for(;;) //for infinito - se va a repetir infinitas veces
	{
		numero = prompt("Ingrese un numero:", 0);
		numero = parseInt(numero);

		if(numero == 9)
		{
			break;
		}	
	}	

	alert("Salimos del bucle for");
}//FIN DE LA FUNCIÓN