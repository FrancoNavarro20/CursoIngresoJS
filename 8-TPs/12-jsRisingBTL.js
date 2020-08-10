/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidadIngresada;
 	//Ingresar Edad
 	edadIngresada = prompt("Ingrese la edad: (18 a 90)");
 	edadIngresada = parseInt(edadIngresada);
 	while(edadIngresada < 18 || edadIngresada > 90)
 	{
 		edadIngresada = prompt("ERROR!!! re-ingrese la edad:");
 		edadIngresada = parseInt(edadIngresada);
 	}	

 	if(isNaN(edadIngresada))
 	{
 		edadIngresada = "Ninguna edad ingresada";
 	}	
 	
 	//Ingresar Sexo
 	sexoIngresado = prompt("Ingrese el sexo : (m/f)");
 	while(sexoIngresado != "f" && sexoIngresado !="m")
 	{
 		sexoIngresado = prompt("ERROR!!!! re-ingrese el sexo: (m/f)");
 	}

 	//Ingresando estado civil
 	estadoCivilIngresado = prompt("Ingrese estado civil con el número correspondiente: \n 1-Soltero \n 2-Casado \n 3-Divorciado");
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	while(estadoCivilIngresado > 3 || isNaN(estadoCivilIngresado))
 	{
 		estadoCivilIngresado = prompt("ERROR!!! re-ingrese estado civil con el número correspondiente: \n 1-Soltero \n 2-Casado \n 3-Divorciado");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}	

 	switch(estadoCivilIngresado)
 	{
 		case 1:
 			estadoCivilIngresado = "Soltero";
 			break;
 		case 2:
 			estadoCivilIngresado = "Casado";
 			break;
 		case 3:
 			estadoCivilIngresado = "Divorciado";
 			break;
 		default:
 			estadoCivilIngresado = "Ningun estado civil ingresado";
 			break;			
 	}

 	//Ingresando el sueldo en bruto
 	sueldoBruto = prompt("Ingrese sueldo en bruto: (mayor a $8000)", 8000);
 	sueldoBruto = parseInt(sueldoBruto);
 	while(sueldoBruto < 8000)
 	{	
 		sueldoBruto= prompt("ERROR!!! re-ingrese el sueldo en bruto: (mayor a $8000)");
 		sueldoBruto = parseInt(sueldoBruto);
 	}
 	
 	//Ingresando numero legajo
 	numeroLegajo = prompt("Ingrese el numero del legajo: (4 cifras)");
 	numeroLegajo = parseInt(numeroLegajo);
 	while(numeroLegajo > 9999 || numeroLegajo < 1000)
 	{
 		numeroLegajo = prompt("ERROR!!! re-ingrese el numero de legajo: (4 cifras)");
 		numeroLegajo = parseInt(numeroLegajo);
 	}

 	//Ingresando Nacionalidad
	nacionalidadIngresada = prompt("Ingresar nacionalidad: \n 1-Ingrese A (para argentinos) \n 2-Ingrese E (para extranjeros) \n 3-Ingrese N (para nacionalizados)"); 
 	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
 	{
 		nacionalidadIngresada = prompt("ERROR!!! re-ingresar nacionalidad: \n 1-Ingrese A (para argentinos) \n 2-Ingrese E (para extranjeros) \n 3-Ingrese N (para nacionalizados)");
 	}

 	switch(nacionalidadIngresada)
 	{
 		case "A":
 			nacionalidadIngresada = "Argentina";
 			break;
 		case "E":
 			nacionalidadIngresada = "Extranjero";
 			break;
 		case "N":
 			nacionalidadIngresada = "Nacionalizado";		
 	}


	//Asignando valores
 	txtIdEdad.value = edadIngresada + " años";
 	txtIdSexo.value = sexoIngresado.toUpperCase();
 	txtIdEstadoCivil.value = estadoCivilIngresado;
 	txtIdSueldo.value = "$" +sueldoBruto;
 	txtIdLegajo.value = "N°"+numeroLegajo;
 	txtIdNacionalidad.value = nacionalidadIngresada;

}
