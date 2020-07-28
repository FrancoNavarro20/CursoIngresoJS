function mostrar()
{
	var estacionIngresada;
	var destinoIngresada;
	var mensaje;
	var aumento;
	var descuento;
	var estadiaBase = 15000;
	
	estacionIngresada = txtIdEstacion.value;
	destinoIngresada = txtIdDestino.value;
	aumento = 0;
	descuento = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresada)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
				case 		
			}

	}

	//alert(estacionIngresada);

}//FIN DE LA FUNCIÓN