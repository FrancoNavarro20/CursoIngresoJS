/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{

    var cantidadLamparas;
    var precioFijo;
    var marcaLamparas;
    var precioDescuento;
    var importe;
    var impuesto;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioFijo = 35;
    marcaLamparas = Marca.value;
   // precioDescuento = txtIdprecioDescuento.value;

   //Hay que usar 2 if solamente!!!!!
   //Uno chiquito y otro grande !!!!!

    if(cantidadLamparas > 5)
    {
    	precioDescuento = (precioFijo * cantidadLamparas * 50) / 100;
        importe = (precioFijo * cantidadLamparas) - precioDescuento;
    	
    }
    if(cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz")
    {
    		precioDescuento = (precioFijo * cantidadLamparas * 40) / 100;
    		
    		importe= (precioFijo * cantidadLamparas) - precioDescuento;
    }
    else
    {       if(cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz")
    		{
                precioDescuento = (precioFijo * cantidadLamparas * 30) / 100;
    		
    		    importe = (precioFijo * cantidadLamparas) - precioDescuento;
            }
            else
            {
                if(cantidadLamparas == 4)
                {
                     /*precioDescuento = (precioFijo * cantidadLamparas * 25) / 100;
                     importe = (precioFijo * cantidadLamparas) - precioDescuento;
                     */
                     if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                     {
                            precioDescuento = (precioFijo * cantidadLamparas * 25) / 100;
                            importe = (precioFijo * cantidadLamparas) - precioDescuento;   
                     }
                }
                else
                {
                    if(cantidadLamparas == 4) 
                    {
                         precioDescuento = (precioFijo * cantidadLamparas * 20) / 100;
                         importe = (precioFijo * cantidadLamparas) - precioDescuento;
                    }
                    else
                    {
                        if(cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz")
                        {
                            precioDescuento = (precioFijo * cantidadLamparas * 15) / 100;
                            importe = (precioFijo * cantidadLamparas) - precioDescuento;
                        }
                        else
                        {
                            if(cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas")
                            {
                                precioDescuento = (precioFijo * cantidadLamparas * 10) / 100;
                                importe = (precioFijo * cantidadLamparas)- precioDescuento;
                            }
                            else
                            {
                                if(cantidadLamparas == 3) 
                                {
                                    precioDescuento = (precioFijo * cantidadLamparas * 5) / 100;
                                    importe = (precioFijo * cantidadLamparas)- precioDescuento;
                                }
                                else
                                {
                                    if(importe > 120)
                                    {
                                        importe = importe * 1.1;
                                        impuesto = importe / 10;
                                       
                                        alert("IIBB Usted pago $" + importe.toFixed(2) +", siendo  el impuesto que se pagó $" +impuesto.toFixed(2)+ " .");
                                    }
                                }
                            }
                        }
                    }
                }
            }
	}

    txtIdprecioDescuento.value = importe.toFixed(2);
   
}    
/*
  if( !(cantidadLamparas != 4 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas"))
                {
                     /*precioDescuento = (precioFijo * cantidadLamparas * 25) / 100;
                     importe = (precioFijo * cantidadLamparas) - precioDescuento;
                     
                     if()
                     {

                     }
*/