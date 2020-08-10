/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	var i;
	var  numeroIngresado;
	var contadorNumeroDivisores;

	numeroIngresado = prompt("Ingrese un numero:");
	numeroIngresado = parseInt(numeroIngresado);
	contadorNumeroDivisores = 0;
	for(i = 0; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			document.write(i + "<br>");
			contadorNumeroDivisores++;
		}
	}	

	document.write("Los números divisores son: " + contadorNumeroDivisores);
}//FIN DE LA FUNCIÓN