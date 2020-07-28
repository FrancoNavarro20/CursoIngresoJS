function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado = txtIdDestino.value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			mensaje = "Hace frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor";
			break;	
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN