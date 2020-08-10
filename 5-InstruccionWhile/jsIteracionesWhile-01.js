/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

/*
Enunciado c)”mixing bandera”
De una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente:
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción (si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

function mostrar()
{
	var razaDeAnimales;
	var pesoDeAnimales;
	var temperaturaDelHabitadDelAnimal;
	var edadDelAnimal;
	var peligroDeExtincion;
	var animalMasPesado;
	var razaDelAnimalMasPesado;
	var acumuladorEdadAnimales;
	var contadorAnimales;
	var promedioEdadAnimalesTotal;
	var temperaturaMaxima;
	var banderaEdadAnimales;
	var banderaAnimalMasPesado;
	var banderaTemperaturaMaxima;
	var respuesta;

	banderaEdadAnimales = 1;
	banderaAnimalMasPesado = 1;
	banderaTemperaturaMaxima = 1;
	acumuladorEdadAnimales = 0;
	contadorAnimales = 0;
	animalMasPesado = 0;
	temperaturaMaxima = 0;
	respuesta = true;

	while(respuesta == true)
	{
		//validando la raza del animal;
		razaDeAnimales = prompt("Ingrese la raza del animal:");
		while(isNaN(razaDeAnimales) == false)
		{
			razaDeAnimales = prompt("Error!!! re-ingrese la raza del animal:");
		}

		//validando el peso del animal
		pesoDeAnimales = prompt("Ingrese el peso del animal:");
		pesoDeAnimales = parseFloat(pesoDeAnimales);
		while(isNaN(pesoDeAnimales))
		{
			pesoDeAnimales = prompt("Error!!! re-ingrese el peso del animal:");
			pesoDeAnimales = parseFloat(pesoDeAnimales);
		}

		//La raza del mas pesado
		if(banderaAnimalMasPesado == 1 || pesoDeAnimales > animalMasPesado)
		{
			razaDelAnimalMasPesado = razaDeAnimales;
			animalMasPesado = pesoDeAnimales;
			banderaAnimalMasPesado = 0;
		}

		//validando la temperatura del habitad;
		temperaturaDelHabitadDelAnimal = prompt("Ingrese la temperatura del habitad del animal:");
		temperaturaDelHabitadDelAnimal = parseInt(temperaturaDelHabitadDelAnimal);
		while(isNaN(temperaturaDelHabitadDelAnimal))
		{
			temperaturaDelHabitadDelAnimal = prompt("Error!!! re-ingrese la  temperatura del habitad:");
		}

		//la temperatura maxima del habitad;
		if(banderaTemperaturaMaxima == 1 || temperaturaDelHabitadDelAnimal > temperaturaMaxima)
		{	
			temperaturaMaxima = temperaturaDelHabitadDelAnimal;
			banderaTemperaturaMaxima = 0;
		}

		//validando la edad del animal;
		edadDelAnimal = prompt("Ingrese la edad del animal:");
		edadDelAnimal = parseInt(edadDelAnimal);
		while(isNaN(edadDelAnimal))
		{
			edadDelAnimal = prompt("Ingrese la edad del animal:");
			edadDelAnimal = parseInt(edadDelAnimal);
		}

		//acumulando las edades de los animales
		if(banderaEdadAnimales == 1)
		{
			acumuladorEdadAnimales = acumuladorEdadAnimales + edadDelAnimal;
			contadorAnimales++;
		}

		//Validando si esta en peligro de extincion;
		peligroDeExtincion= prompt("¿Esta en peligro de extincion? (ingrese solamente si o no)");
		while(isNaN(peligroDeExtincion) == false || (peligroDeExtincion != "si" && peligroDeExtincion != "no"))
		{
			peligroDeExtincion = prompt("Error!!! re-ingrese si esta en peligro de extincion: (ingrese solamente si o no)");
		}


		respuesta = confirm("¿Desea seguir ingresando datos de los animales?");
	}	

	//Promedio de las edades de los animales totales;
	promedioEdadAnimalesTotal = acumuladorEdadAnimales / contadorAnimales;

	//asignando los valores finales
	console.log("El promedio de la edad de los animales es: " + promedioEdadAnimalesTotal);
	console.log("La raza del mas pesado es: " + razaDelAnimalMasPesado);
	console.log("La temperatura maxima ingresada es: °" + temperaturaMaxima);

}//FIN DE LA FUNCIÓN








/*
var numeroAscendente;
	numeroAscendente = 0;
	
	while(numeroAscendente < 10)
	{
		alert(numeroAscendente +1);
		numeroAscendente++;
	}
*/