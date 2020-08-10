/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total.
*/

function mostrar()
{
	//Validacion de variables
	var productos_a_Ingresar;
	var validacionDeProductos;
	var validacionDePrecioProductos; 
	var marca;
	var fabricante;
	var cantidadDeUnidadesProductos;
	var mostrarElJabonMasCaro;
	var flagJabon;


	productos_a_Ingresar = 0;
	cantidadDeUnidadesProductos = 0;
	mostrarElJabonMasCaro = 0;
	flagJabon = 1;

	alert("Puede realizar la carga hasta 5 productos:");
	while(productos_a_Ingresar < 2)
	{
		//Validacion de los productos;	
		validacionDeProductos = prompt("Elija con el número correspondiente el producto que desee cargar: \n 1-Barbijo \n 2-Jabon \n 3-Alcohol");
		validacionDeProductos = parseInt(validacionDeProductos);
		while(validacionDeProductos >3 || validacionDeProductos < 1 || isNaN(validacionDeProductos))
		{
			validacionDeProductos = prompt("Error!!! re-ingrese el producto con el número correspondiente que desee cargar: \n 1-Barbijo \n 2-Jabon \n 3-Alcohol ");
			validacionDeProductos = parseInt(validacionDeProductos);
		}	

		switch(validacionDeProductos)
		{
			case 1:
				validacionDeProductos = "Barbijo";
				marca = "3M";
				fabricante = "BarbijosArgentina"; 
				break;	
			case 2:
			 	validacionDeProductos = "Jabon";
			 	marca = "Dove";
			 	fabricante = "Empresa Dove";
			 	break;
			case 3:
				validacionDeProductos = "Alcohol";
				marca = "biAlcohol";
				fabricante = "Empresa biAlcohol"
				break;
			default:
				validacionDeProductos = "Ningun producto ingresado";
				marca = "Ninguna marca encontrada";
				fabricante = "Ningun fabricante encontrado";
				break;		
		}

		//Validacion de los precios de los productos;
		validacionDePrecioProductos = prompt("Ingrese el precio correspondiente al producto "+validacionDeProductos+": ($100 hasta $300) ");
		validacionDePrecioProductos = parseInt(validacionDePrecioProductos);
		while((validacionDePrecioProductos < 100 || validacionDePrecioProductos > 300) || isNaN(validacionDePrecioProductos))
		{
			validacionDePrecioProductos = prompt("Error!!! re-ingrese el precio correspondiente al producto elegido");
			validacionDePrecioProductos = parseInt(validacionDePrecioProductos);
		}	
		
		//Validando la cantidad de unidades;
		cantidadDeUnidadesProductos = prompt("Ingrese las unidades de "+ validacionDeProductos + ": (no mas de 1000 unidades) \n" + "Marca : " + marca + "\n" +"Fabricante" + fabricante);
		cantidadDeUnidadesProductos = parseInt(cantidadDeUnidadesProductos);
		while(cantidadDeUnidadesProductos > 1000 || cantidadDeUnidadesProductos < 1)
		{
			cantidadDeUnidadesProductos = prompt("Error!!! re-ingrese las unidades de"+ validacionDeProductos + ": (no mas de 1000 unidades) \n" + "Marca: " + marca + "\n" +" Fabricante: " + fabricante);
			cantidadDeUnidadesProductos = parseInt(cantidadDeUnidadesProductos);
		}

		//Mostrar el mas caro de los jabones

		if(flagJabon == 1 || (validacionDeProductos == "Jabon" && validacionDePrecioProductos > 1000))
		{
			mostrarElJabonMasCaro = validacionDePrecioProductos;
		}
		alert(mostrarElJabonMasCaro);

		//Final del while
		productos_a_Ingresar++;
	}	
}	
