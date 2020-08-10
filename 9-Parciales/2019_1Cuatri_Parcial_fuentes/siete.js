/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/

function mostrar()
{
	var alturasEnCentimetros;
	var sexoIngresado;
	var contadorjugadores;
	var alturasTotales;
	var alturaMasBaja
	var bandera;
	var banderaAlturasTotales;
	var sexoDelMasBajo;
	var cantidadMujeresAltura190;
	var promedioAlturasTotales;

	banderaAlturasTotales = 1;
	bandera = true;
	contadorjugadores = 0;
	alturasTotales = 0;
	cantidadMujeresAltura190 = 0;

	while(contadorjugadores < 2)
	{
		//Asignando los centimetros
		alturasEnCentimetros = prompt("Ingrese la altura: (entre 0 y 250)");
		alturasEnCentimetros = parseInt(alturasEnCentimetros);
		while(alturasEnCentimetros > 250 || alturasEnCentimetros < 0)
		{
			alturasEnCentimetros = prompt("Error!!! re-ingrese la altura : (entre 0 y 250)");
			alturasEnCentimetros = parseInt(alturasEnCentimetros);
		}

		//asignando el sexo a cada jugador de basquet;
		sexoIngresado = prompt("Ingrese el sexo del jugador: (m/f)");
		while(sexoIngresado != "m" && sexoIngresado != "f" )
		{
			sexoIngresado = sexoIngresado = prompt("Error!!!! re-ingrese el sexo del jugador: (m/f)");
		}

		//validacion a
		if(banderaAlturasTotales == 1)
		{
			alturasTotales = alturasTotales + alturasEnCentimetros;
			
		}

		//Validacion b
		if(bandera == true || alturasEnCentimetros < alturaMasBaja)
		{
			alturaMasBaja = alturasEnCentimetros;
			sexoDelMasBajo = sexoIngresado;
		}
		bandera = false;

		//valida c
		switch(sexoIngresado)
		{
			case "f":
				if(alturasEnCentimetros > 190)
				{
					cantidadMujeresAltura190++;
				}
				else
				{
					cantidadMujeresAltura190 = "Ninguna mujer supera los 190cm";
				}
				break;
		}

		//Contador supere los 5 termina el while;
		contadorjugadores++;
	}
	

	promedioAlturasTotales = alturasTotales / contadorjugadores;

	alert("El promedio de las alturas totales es: " + promedioAlturasTotales);
	alert("La altura mas baja es: " + alturaMasBaja + " y el sexo es: " + sexoDelMasBajo);
  	alert("La cantidad de mujeres con la altura mayor a 190cm es: " + cantidadMujeresAltura190);

}
