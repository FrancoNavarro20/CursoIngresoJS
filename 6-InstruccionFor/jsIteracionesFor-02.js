/*
Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
*/

function mostrar()
{
	var i; //En for es mejor declarar la variable afuera del for para poder usarla afuera del for

	for(i = 10; i > 0; i--)
	{
		document.write("Los numeros decendentes son: " + i + "<br>");
	}
}