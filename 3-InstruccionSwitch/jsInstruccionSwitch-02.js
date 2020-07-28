function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	
	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
			break;
		default:
			mensaje = "Ya pasamos el frio,ahora calor!!!."; 	
			break;
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN