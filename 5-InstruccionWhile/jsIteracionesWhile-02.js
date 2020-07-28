/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=0;

	if(cantidadLamparas > 5)
    {
    	precioDescuento = (precioFijo * cantidadLamparas * 50) / 100;
        importe = (precioFijo * cantidadLamparas) - precioDescuento;
    	
    }
    else
    {
    	if(cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz")
    	{
    		precioDescuento = (precioFijo * cantidadLamparas * 40) / 100;
    		
    		importe= (precioFijo * cantidadLamparas) - precioDescuento;
        }
        else
   		{       
   			if(cantidadLamparas == 5 && marcaLamparas != "ArgentinaLuz")
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
                            }
 						}
 					}		
				}
			}	
		}
	}		
    if(importe > 120)
    {
     	importe = importe * 1.1;
        impuesto = importe / 10;                                       
       	alert("IIBB Usted pago $" + importe.toFixed(2) +", siendo  el impuesto que se pagó $" +impuesto.toFixed(2)+ " .");
    }
	/*
 	let contador2;
 	contador2 = 11;

	while(contador2 > 1 )
	{
		contador2--;
		contador2.reverse()
		alert(contador2);
	} 
	//alert('iteración while');
	*/
	
}//FIN DE LA FUNCIÓN