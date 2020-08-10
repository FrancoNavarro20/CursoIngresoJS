/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numerosIngresados;
	var contador;
	var acumulador;
	var promedio;
	var respuesta;
	contador = 0;
	acumulador = 0;
	respuesta= true;

	while(respuesta == true)
	{
		numerosIngresados = prompt("Ingrese un numero :");
		numerosIngresados = parseInt(numerosIngresados);

		acumulador += numerosIngresados;
		contador++;

		respuesta = confirm("¿Desea ingresar otro numero? si/no");
	}	
	/*
	respuesta='si';
	while(respuesta == "si")
	{
		numerosIngresados = prompt("Ingrese un numero :");
		numerosIngresados = parseInt(numerosIngresados);

		acumulador += numerosIngresados;
		contador++;

		respuesta = prompt("¿Desea ingresar otro numero? si/no");
	}	
	*/

	promedio = acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value= promedio.toFixed(2);






	
}//FIN DE LA FUNCIÓN