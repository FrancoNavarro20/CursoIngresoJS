function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado = prompt("numeroIngresado", 0);
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
	}

	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
	/*
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
	*/
}//FIN DE LA FUNCIÓN