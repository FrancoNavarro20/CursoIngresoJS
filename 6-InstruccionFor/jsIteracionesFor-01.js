/*
Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/

/*
Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo |
altura |
edad |
nombre |
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

function mostrar()
{
	//variables

	var sexoEspectadores;
	var alturaEspectadores;
	var edadEspectadores;
	var nombreDelEspectador;
	var mujerMasAlta;
	var hombreMasViejo;
	var nombreDeLaMujerMasAlta;
	var nombreDelHombreMasViejo;
	var banderaHombreMasViejo;
	var banderaMasAltaDeLasMujeres;
	var banderaPrimerAdolescente;
	var nombreDelPrimerAdolescente;
	var respuesta;


	respuesta = true;
	mujerMasAlta = 0;
	hombreMasViejo = 0;
	banderaHombreMasViejo = 1;
	banderaMasAltaDeLasMujeres = 1;
	banderaPrimerAdolescente = 1;

	//Comiendo del while
	while(respuesta == true)
	{
		//Pidiendo nombres!!!
		
		nombreDelEspectador = prompt("Ingrese el nombre del espectador:");
		while(isNaN(nombreDelEspectador) == false)
		{
			nombreDelEspectador = prompt("Error!!! re-ingrese el nombre del espectador:");
		}
		//Pidiendo el sexo del espectador y validando

		sexoEspectadores = prompt("Ingrese el sexo del espectador: (masculino o femenino)");
		while(sexoEspectadores != "masculino" && sexoEspectadores != "femenino")
		{
			sexoEspectadores = prompt("Error!!! re-ingrese el sexo del espectador: (masculino o femenino)");
		}

		//Pidiendo la edad del espectadoros y validando;

		edadEspectadores = prompt("Ingrese la edad del espectador:");
		edadEspectadores = parseInt(edadEspectadores);
		while(isNaN(edadEspectadores))
		{
			edadEspectadores = prompt("Error!!! re-ingrese la edad del espectador:");
			edadEspectadores = parseInt(edadEspectadores);
		}	
		
		//validando si es un adolescente
		
		if(edadEspectadores < 18 && edadEspectadores > 12)
		{	
			if(banderaPrimerAdolescente == 1)
			{
				nombreDelPrimerAdolescente = nombreDelEspectador;
				banderaPrimerAdolescente = 0;
			}
		}
		else
		{
			nombreDelPrimerAdolescente = "no hay espectadores adolescentes";
		}

		//pidiendo la altura del espectador y validando
		alturaEspectadores = prompt("Ingrese la altura del espectador:");
		alturaEspectadores = parseFloat(alturaEspectadores);
		while(isNaN(alturaEspectadores))
		{
			alturaEspectadores = prompt("Error!!! re-ingrese la altura del espectador");
			alturaEspectadores = parseFloat(alturaEspectadores);
		}	

		//Bandera de las mas alta de las mujeres;
		switch(sexoEspectadores)
		{
			case "femenino":
				if(banderaMasAltaDeLasMujeres == 1 || alturaEspectadores > mujerMasAlta)
				{
					mujerMasAlta = alturaEspectadores;
					nombreDeLaMujerMasAlta = nombreDelEspectador;
				}
				banderaMasAltaDeLasMujeres = 0;
				break;
			case "masculino": 							
				if(banderaHombreMasViejo == 1 || edadEspectadores > hombreMasViejo)
				{	
					hombreMasViejo = edadEspectadores;
					nombreDelHombreMasViejo = nombreDelEspectador;
				}
				banderaHombreMasViejo = 0;
				break;
		}

		if(hombreMasViejo == 0)
		{
			nombreDelHombreMasViejo = "No hay espectadores hombres";
		}
		if(mujerMasAlta == 0)
		{
			nombreDeLaMujerMasAlta = "No hay espectadores mujeres";
		}

		respuesta = confirm("¿Desea seguir ingresando datos de los espectadores?");
	
	}//final del while	




	//asignando valores
	alert("El nombre de la mujer mas alta es: " + nombreDeLaMujerMasAlta);
	alert("El nombre del hombre mas viejo es: " + nombreDelHombreMasViejo);
	//mostrar si solo si es un adolescente;
	alert("El nombre del adolescente es: " + nombreDelPrimerAdolescente);
	
}

	/*
	var i;
	for(i = 0; i < 10; i++)
	{
		document.write("Los numeros son: " + i+1);
	}
	*/