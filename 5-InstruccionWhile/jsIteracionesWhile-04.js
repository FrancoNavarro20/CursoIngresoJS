/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	
	while(numeroIngresado > 9 || numeroIngresado < 0) 20
	{
		numeroIngresado = prompt("ERROR!!! Re-ingrese un numero entre 0 y 9")
	}
	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN