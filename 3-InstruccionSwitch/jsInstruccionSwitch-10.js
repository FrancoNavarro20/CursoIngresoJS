function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado =  txtIdDestino.value; 
	//alert(estacionIngresada);

	//prompt("hola",5);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;	
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;	
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
			}
			break;		
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
					break;	
			}
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN