/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	var i; //inicializar la variable del for
	var numeroIngresado;
	var numerosPrimos;
	var divisores;
	var bandera;

	i = 0;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	divisores = 0;
	bandera = true;

	for(i = 1; i <= numeroIngresado; i++)
	{
		if((numeroIngresado % i) == 0)
		{
			divisores++;
		}
		if(divisores > 2)
		{
			bandera = false;
			break;
		}
	}	

	if(bandera == true)
	{
		mensaje = numeroIngresado + " es primo";
	}
	else
	{
		mensaje = numeroIngresado + " no es primo";
	}


	document.write(mensaje);









	/*contando cuantas veces es divisible el numero introducido!!!;
	for(i = 0; i <= numeroIngresado; i++)
	{
		if((numeroIngresado % 2) != 0)
		{
			contadorNumerosPrimos++;
		}
		else
		{
			contadorNumerosNoPrimos++;
		}	
	}

	//verificacion de numeros primos
	if(contadorNumerosPrimos == 2)
	{
		mensajeNumeros = numeroIngresado + " es un numero primo";
	}
	else
	{
		mensajeNumeros = numeroIngresado + " no es un numero primo";
	}
	
	//Mostrar mensaje !!!
	document.write(mensaje);
	*/
}//FIN DE LA FUNCIÓN