/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var i; //inicializar la variable del for
	var numeroIngresado;
	var cantidadNumeros;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);
	cantidadNumeros = 0;

	for(i = 1; i <= numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			document.write(i + "<br>");
			cantidadNumeros++;
		}
	}	

	document.write("La cantidad de numeros pares es: " + cantidadNumeros);

}//FIN DE LA FUNCIÓN