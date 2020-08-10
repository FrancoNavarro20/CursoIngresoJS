/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total


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
	var mostrarElAlcoholMasCaro;
	var unidadesDeAlcohol;
   	var unidadesDeJabon;
   	var unidadesDeBarbijo;
   	var tipoConMasUnidades;
   	var unidadesTotal;
   	var compraTotal;
   	var promedioPorCompra;
   	var contador;
   	var banderaCompraTotal;
   	var bandera;
   	var banderaAlcohol;
//acordarse la pedir que indroduzca la marca y el fabricante !!!!
	productos_a_Ingresar = 0;
	cantidadDeUnidadesProductos = 0;
  	//mostrarElAlcoholMasCaro = 0;
	unidadesDeAlcohol = 0;
	unidadesDeJabon = 0;
	unidadesDeBarbijo = 0;
	tipoConMasUnidades = 0;
	banderaAlcohol = 1;
	banderaCompraTotal = 1;
	bandera = 1;


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
				fabricante = "Empresa biAlcohol";
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
		
		if(banderaCompraTotal == 1)
		{
			compraTotal+= validacionDePrecioProductos;
			contador++;
		}	

		//Validando la cantidad de unidades;
		cantidadDeUnidadesProductos = prompt("Ingrese las unidades de "+ validacionDeProductos + ": (no mas de 1000 unidades)");
		cantidadDeUnidadesProductos = parseInt(cantidadDeUnidadesProductos);
		while(cantidadDeUnidadesProductos > 1000 || cantidadDeUnidadesProductos < 1)
		{
			cantidadDeUnidadesProductos = prompt("Error!!! re-ingrese las unidades de"+ validacionDeProductos + ": (no mas de 1000 unidades)");
			cantidadDeUnidadesProductos = parseInt(cantidadDeUnidadesProductos);
		}

		//Mostrar el precio mas barato del alcohol y las unidades
		if(banderaAlcohol == 1 ||(validacionDeProductos == "Alcohol" && validacionDePrecioProductos < mostrarElAlcoholMasCaro)) 
		{
			mostrarElAlcoholMasCaro = validacionDePrecioProductos;
			unidadesDeAlcohol += cantidadDeUnidadesProductos;
			banderaAlcohol = 0;
		}
		if(validacionDePrecioProductos == "Jabon")
		{
			unidadesDeJabon += cantidadDeUnidadesProductos; 
		}
		else
		{
			unidadesDeBarbijo += cantidadDeUnidadesProductos;
		}	
		

		//El tipo de producto con mas unidades
		if(bandera == 1 || tipoConMasUnidades > unidadesDeAlcohol)
		{
			tipoConMasUnidades+= unidadesDeAlcohol;
			unidadesTotal = "Alcohol";
			bandera = 0;
		}
		if(bandera == 1 || tipoConMasUnidades > unidadesDeJabon)
		{
			tipoConMasUnidades += unidadesDeJabon;
			unidadesTotal = "Jabon";
			bandera = 0;
		}
		if(bandera == 1 || tipoConMasUnidades > unidadesDeBarbijo)
		{
			tipoConMasUnidades+= unidadesDeBarbijo;
			unidadesTotal = "Barbijo";
			bandera = 0;
		}	

			

		//Final del while
		productos_a_Ingresar++; 
	}


	promedioPorCompra = compraTotal / contador;

	//Mostrando los valores pedidos
	document.write("El precio minimo del alcohol es: " + mostrarElAlcoholMasCaro+ ", la cantidad de unidades es: " + unidadesDeAlcohol + " y el fabricante es: "+ fabricante + "<br>");
	document.write("El tipo de mas unidades es: "+ unidadesTotal + " y el promedio de la compra es: " + promedioPorCompra +  "<br>");
	document.write("Unidades de Jabon total :" + unidadesDeJabon);
	
}	