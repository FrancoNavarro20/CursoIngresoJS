/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750")
	{

		if(claveIngresada != "utn750")
		{ 
 			claveIngresada = prompt("ingrese el número clave.");
		}
		else
		{
			if(claveIngresada == "utn750")
			{
				alert("Contraseña correcta");
			}
		}
	}

	alert("Se rompio el bucle, contraseña correcta");
}//FIN DE LA FUNCIÓN
