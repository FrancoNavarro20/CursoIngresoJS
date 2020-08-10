/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar() 
{

   var tipoProductoConstruccion;
   var tipoMasCaroPrecio;
   var tipoMasCaro;
   var cantidadDeBolsas;
   var precioPorBolsa;
   var porcentaje;
   var acumuladorDeBolsas;
   var importeBrutoProducto;
   var importeBrutoTotal;
   var importeConDescuento;
   var acumuladorArena;
   var acumuladorCal;
   var acumuladorCemento;
   var banderaDelPrimerProducto;
   var elTipoConMasUnidades;
   var descuento;
   var precioConDescuento;
   var respuesta;
   
   banderaDelPrimerProducto = "es el primero";
   tipoMasCaroPrecio = 0;
   acumuladorDeBolsas = 0;
   acumuladorArena = 0;
   acumuladorCal = 0;
   acumuladorCemento = 0;
   importeBrutoTotal = 0;
   respuesta = true;

   while(respuesta == true) 
   {
  	 	//Ingresando el tipo de productos a comprar
  	 	tipoProductoConstruccion = prompt("Ingrese el tipo de producto a comprar: (arena , cal , cemento)");
   		while(tipoProductoConstruccion != "arena" && tipoProductoConstruccion != "cal" && tipoProductoConstruccion != "cemento")
   		{
   			tipoProductoConstruccion = prompt("Error!!! re-ingrese el tipo de producto a comprar: (arena , cal , cemento)");
   		}	

   		//Ingresando la cantidad de bolsas;
   		cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas:");
   		cantidadDeBolsas = parseInt(cantidadDeBolsas);
   		while(cantidadDeBolsas < 1)
   		{
   			cantidadDeBolsas = prompt("Error!!! re-ingrese la cantidad de bolsas");
   			cantidadDeBolsas = parseInt(cantidadDeBolsas);
   		}

   		//Acumuladores de los productos
   		switch(tipoProductoConstruccion)
   		{
   			case "arena":
   				acumuladorArena = acumuladorArena + cantidadDeBolsas;
   				break;
   			case "cal":
   				acumuladorCal = acumuladorCal + cantidadDeBolsas;
   				break;
   			case "cemento":
   				acumuladorCemento = acumuladorCemento + cantidadDeBolsas;
   				break;		
   		}

   		//Ingrese el precio por bolsa;
   		precioPorBolsa = prompt("Ingrese el precio por bolsa:");
   		precioPorBolsa = parseFloat(precioPorBolsa);
   		while(precioPorBolsa < 1)
   		{
   			precioPorBolsa = prompt("Error!!re-ingrese el precio por bolsa:");
   			precioPorBolsa = parseInt(precioPorBolsa);
   		}		

   		//haciendo las cuentas
   		acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
   		importeBrutoProducto = acumuladorDeBolsas * precioPorBolsa;
   		importeBrutoTotal = importeBrutoTotal + importeBrutoProducto;

   		//validando el tipo mas caro;
   		if(banderaDelPrimerProducto == "es el primero")
  		{
  			tipoMasCaro=tipoProductoConstruccion;
  			tipoMasCaroPrecio=precioPorBolsa;
  			banderaDelPrimerProducto="ya paso";
  		}
  		else
  		{
  			if(precioPorBolsa>tipoMasCaroPrecio)
  			{
  				tipoMasCaro = tipo;
  				tipoMasCaroPrecio=precioPorBolsa;
  			}
  		}

   		respuesta = confirm("Desea seguir ingresando?");
   }

   //El tipo con mas unidades
   if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
   {
   		elTipoConMasUnidades = "arena";
   }
   else
   {
   		if(acumuladorCal > acumuladorCemento)
   		{
   			elTipoConMasUnidades = "Cal";
   		}
   		else
   		{
   			elTipoConMasUnidades = "cemento";
   		}
   }


   //Validando si compro mas de 10  o mas de 30 bolsas;
   	if(cantidadDeBolsas > 30)
   	{
   		porcentaje = 25;

   	}
   	else
   	{			
   		if(cantidadDeBolsas > 10)
   		{
   			porcentaje = 15;
   		}
   		else
   		{
   			porcentaje = 0;
   		}
   	}	

   	//Validando si hay descuento o no
   	if(porcentaje != 0)
 	{
	  	descuento=precioBrutoTotal*porcentaje/100;
	  	precioConDescuento=precioBrutoTotal-descuento;
	 	console.log("pagar con descuento: "+precioConDescuento);		
 	}

    // El importe total a pagar , bruto sin descuento
 	console.log("bruto sin descuento: "+precioBrutoTotal);
 	console.log("el tipo mas comprado es: "+elTipoConMasUnidades);
 	console.log("el tipo mas caro  es: "+tipoMasCaro);


}

 //alert("Esto funciona de maravilla");