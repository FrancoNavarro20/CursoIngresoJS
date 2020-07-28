function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje = "Se encuentra al norte.";
			break;
		case "Cordoba":
			mensaje = "Se encuentra al sur.";
			break;	
		case "Bariloche":
			mensaje = "Se encuentra al oeste.";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al este.";	
			break;	
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN