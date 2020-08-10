/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
*/


function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantidadDeHijosIngresado;
	var edadMasVieja;
	var edadMujerMasJoven;
	var nombreDeLaPersonaMasVieja;
	var nombreDeLaMujerMasJoven;
	var acumuladorAlturaMujeres;
	var contadorMujeres;
	var banderaMujeres;
	var promedioDeLaAlturaDeLasMujeres;
	var contador;

	contador = 0;
	edadMasVieja = 0;
	edadMujerMasJoven = 116;
	acumuladorAlturaMujeres = 0;
	contadorMujeres = 0;
	banderaMujeres = 1;

	while(contador < 10)
	{

		//validacion del nombre Ingresado;
		nombreIngresado = prompt("Ingrese su nombre:");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error!!! re-ingrese el nombre:");
		}

		//validacion de la edad ingresada;
		edadIngresada = prompt("Ingrese su edad: (0 a 115)");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 0 || edadIngresada > 115) 
		{
			edadIngresada = prompt("Error!!! Re-ingrese la edad:");
		}

		//el nombre de la persona mas viejas
											
		if(edadIngresada > edadMasVieja)
		{									
			nombreDeLaPersonaMasVieja = nombreIngresado;							
			edadMasVieja = edadIngresada;
			bandera = 0;
		}

		//validando la altura;
		alturaIngresada = prompt("Ingrese su altura: (entre 30 a 230 centimetros)");
		alturaIngresada = parseFloat(alturaIngresada);
		while(isNaN(alturaIngresada) || (alturaIngresada < 30 || alturaIngresada > 230))
		{
			alturaIngresada = prompt("Error!!! re-ingrese la altura : (30 a 230 centimetros)");
			alturaIngresada = parseFloat(alturaIngresada);
		}

		//validan el sexo
		sexoIngresado = prompt("Ingrese su sexo: (masculino o femenino)");
		while(sexoIngresado != "masculino" && sexoIngresado != "femenino")
		{
			sexoIngresado = prompt("Error!!! re-ingrese su sexo: (masculino o femenino)");
		}

		//validando a la mas alta de las mujeres
		switch(sexoIngresado)
		{
			case "femenino":
				//acumulador de mujeres
				if(banderaMujeres == 1)
				{
					acumuladorAlturaMujeres = acumuladorAlturaMujeres + alturaIngresada;
					contadorMujeres++;
				}
				//el nombre de la mujer mas joven;
				if(edadIngresada < edadMujerMasJoven)
				{
					nombreDeLaMujerMasJoven = nombreIngresado;
					edadMujerMasJoven = edadIngresada;
				}
				break;
		}
		//validando si no se entra ninguna persona mujer
		if(edadMujerMasJoven == 116)
		{
			nombreDeLaMujerMasJoven = "No se ingresaron mujeres";
		}

		//validando el dinero;
		dineroIngresado = prompt("Ingrese el dinero: ");
		dineroIngresado = parseFloat(dineroIngresado);
		while(isNaN(dineroIngresado))
		{
			dineroIngresado = prompt("Error!!! re-ingrese el dinero:");
			dineroIngresado =parseFloat(dineroIngresado);
		}

		//validacion de cantidad de hijos
		cantidadDeHijosIngresado = prompt("Ingrese cantidad de hijos hasta 10: (si no tiene hijos ingrese 0)");
		cantidadDeHijosIngresado = parseInt(cantidadDeHijosIngresado);
		while(isNaN(cantidadDeHijosIngresado) || (cantidadDeHijosIngresado < 0 || cantidadDeHijosIngresado > 10))
		{
			cantidadDeHijosIngresado = prompt("Error!!! re-ingrese la cantida de hijos hasta 10: (si no tiene hijos ingrese 0)");
			cantidadDeHijosIngresado = parseInt(cantidadDeHijosIngresado);
		}

		contador++;
	}	

	//Promedio de las mujeres
	promedioDeLaAlturaDeLasMujeres = acumuladorAlturaMujeres / contadorMujeres;
	if(isNaN(promedioDeLaAlturaDeLasMujeres))
	{
		promedioDeLaAlturaDeLasMujeres = "No se ingresaron mujeres para hacer el promedio";
	}
	//asignando valores finales
	console.log("El nombre de la persona mas vieja es: " + nombreDeLaPersonaMasVieja);
	console.log("El promedio de la altura de las mujeres es: " + promedioDeLaAlturaDeLasMujeres);
	console.log("El nombre de la mujer mas joven es:   " + nombreDeLaMujerMasJoven);

}//FIN DE LA FUNCIÓN





/*
Ejercicio de For 2;

	var contador;
		contador=10;
		
	    while(contador > 0)
	    {
	        document.write(contador + " ");
	        contador--;
	    }
*/