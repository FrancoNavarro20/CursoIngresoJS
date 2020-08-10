function mostrar()
{
	var estacionIngresada;
	var destinoIngresada;
	var porcentaje;
	var porcentajeCalculado;
	var importeFinal;
	var estadiaBase = 15000;

	
	estacionIngresada = txtIdEstacion.value;
	destinoIngresada = txtIdDestino.value;
	porcentaje = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresada)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;		
			}
			break;
		case "Verano":
			switch(destinoIngresada)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata" :
					porcentaje = 20;
					break;		
			}
			break; 
		default :
			switch(destinoIngresada)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				default:
					porcentaje = 0;
					break;			
			}
			break;		
	}


	porcentajeCalculado = (estadiaBase * porcentaje)/100;
	importeFinal = estadiaBase + porcentajeCalculado;

	
	alert("El importe es "+importeFinal);

	/*
	porcentaje = (estadiaBase * aumento / 100);
	aumento = aumento + estadiaBase;
	
	descuento = (estadiaBase * descuento / 100);
	descuento = estadiaBase - descuento;

	if(aumento > estadiaBase)
	{
		importefinal = aumento;
	}
	else
	{
		importefinal = descuento;
	}

	*/

	
	
	//alert(estacionIngresada);

}//FIN DE LA FUNCIÓN