/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos=1;
	respuesta= true;




	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese numeros positivos :");
		numeroIngresado = parseInt(numeroIngresado);


		while(numeroIngresado == 0)
		{
			numeroIngresado = prompt("Ingrese numeros positivos :");
			numeroIngresado = parseInt(numeroIngresado);
		}	



		if(numeroIngresado > 0)
		{
			sumaPositivos+=numeroIngresado;
		}
		else
		{	
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;			
		}
		



		respuesta = confirm("¿Desea seguir ingresando numeros?");
	}


		/*
		if(multiplicacionNegativos == 1)
		{
			txtIdProducto.value = "No se ingresaron numeros negativos";
		}
		else
		{
			txtIdProducto.value=multiplicacionNegativos;
		}	
		*/


	if(multiplicacionNegativos == 1)
		{
			multiplicacionNegativos = "No se ingresaron numeros negativos";
		}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN