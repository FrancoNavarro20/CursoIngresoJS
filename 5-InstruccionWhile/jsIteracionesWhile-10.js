/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	//declarar contadores y variables 
	var numeroIngresado;
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var CantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia_Positivos_y_Negativos;

	sumaNegativos= 0;
	sumaPositivos= 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	CantidadNumerosPares = 0;
	respuesta= true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese numeros:");
		numeroIngresado = parseInt(numeroIngresado);	

		if(numeroIngresado > 0)
		{
			sumaPositivos+= numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos+= numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				if(numeroIngresado == 0)
				{
					cantidadCeros++;
				}
			}	
		}
		if(numeroIngresado % 2 == 0)
		{
			CantidadNumerosPares++;
		}	

		

		
		respuesta=confirm("¿Desea seguir ingresando numeros?");
	}//fin del while

	if(cantidadPositivos == 0)
	{
		promedioPositivos = "no se ingresaron numeros positivos para hacer el promedio";
	}
	else
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}

	if(cantidadNegativos == 0)
	{
		promedioNegativos = "No se ingresaron numeros negativos para hacer el promedio";
	}
	else
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}	

	diferencia_Positivos_y_Negativos = sumaPositivos - sumaNegativos;

	document.write("la suma de positivos es :"+sumaPositivos +" y la cantidad de positivos es "+cantidadPositivos + "<br>");
	document.write("la suma de negativos es :"+sumaNegativos+" y la cantidad de negativos es "+cantidadNegativos+ "<br>");
	document.write("la cantidad de ceros es :"+ cantidadCeros + "<br>");
	document.write("la cantidad de numeros pares es: " + CantidadNumerosPares + "<br>");
	document.write("El promedio de los numeros positivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de los numeros negativos es: " + promedioNegativos + "<br>");
	document.write("Diferencia entre los positivos y negativos es : " + diferencia_Positivos_y_Negativos);
	
}//FIN DE LA FUNCIÓN

/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

*/

/*
function mostrar()
{
	//declarar contadores y variables 
	var edadIngresada;
	var sexoIngresado;
	var cantidadPersonas;
	var cantidadPersonasMayores;
	var cantidadPersonasMenores;
	var cantidadAdolescentes;
	var edadMasVieja;
	var edadMasJoven;
	var banderaDelPrimero;
	var respuesta;
	
	cantidadPersonas = 0;
	cantidadPersonasMayores = 0;
	cantidadPersonasMenores = 0;
	cantidadAdolescentes = 0;
	edadMasVieja = 0;
	edadMasJoven = 0;
	banderaDelPrimero = 1;
	respuesta = true;

	while(respuesta == true)
	{
		edadIngresada = prompt("Ingrese su edad: (0 a 120)");
		edadIngresada = parseInt(edadIngresada);

		while(edadIngresada > 120 || edadIngresada < 0 || isNaN(edadIngresada))
		{	
			edadIngresada = prompt("ERROR!!! re-ingrese su edad: (0 a 120)");	
			edadIngresada = parseInt(edadIngresada);					
		}

		cantidadPersonas++;

		//Edades mayores y menores!!!
		if(edadIngresada > 17)
		{
			cantidadPersonasMayores++;
		}
		else
		{
			if(edadIngresada < 13)
			{
				cantidadPersonasMenores++;
			}
			else
			{
				if(edadIngresada < 18)
				{
					cantidadPersonasMenores++;
					cantidadAdolescentes++;
				}	
			}
		}

		//Edades Maximas y minimas
		if(banderaDelPrimero == 1 || edadIngresada > edadMasVieja)
		{
			edadMasVieja = edadIngresada;
		}
		if(banderaDelPrimero == 1 || edadIngresada < edadMasJoven)
		{
			edadMasJoven = edadIngresada;
		}	

		banderaDelPrimero = 0;

		//Ingresando Sexo
		sexoIngresado = prompt("Ingrese el sexo (f o m)");

		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("ERROR!! re-Ingrese el sexo (f o m)");				
		}
			
		respuesta = confirm("¿Desea seguir?");
	}	

	document.write("La cantidad de personas es: " + cantidadPersonas + "<br>");
	document.write("La cantidad de personas mayores es: " + cantidadPersonasMayores + "<br>");
	document.write("La cantidad de personas menores es: " + cantidadPersonasMenores+ "<br>");
	document.write("La cantidad de adolescentes es: " + cantidadAdolescentes+ "<br>");
	document.write("La edad mas vieja es: " + edadMasVieja +" años"+ "<br>");
	document.write("La edad mas joven es: " + edadMasJoven +" años");
}//FIN DE LA FUNCIÓN
*/