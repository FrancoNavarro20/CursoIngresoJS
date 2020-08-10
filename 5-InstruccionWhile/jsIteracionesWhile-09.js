/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
 
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta= true;
	numeroMinimo = 0;
	numeroMaximo = 0;

	while(respuesta== true)
	{
		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo )
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo)
		{	
			numeroMinimo = numeroIngresado;
		}

		respuesta=confirm("¿Desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN