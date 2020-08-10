function mostrar()
{
	var nombreHombre;
	var nombreMujer;
	var peso1;
	var peso2;
	var promedio;
	var pesoTotal;
		
	nombreHombre = prompt("Ingrese el nombre de hombre");
	nombreMujer = prompt("Ingrese el nombre de la mujer");
	peso1 = parseInt(prompt("Ingrese el peso del hombre", 85));
	peso2 = parseInt(prompt("Ingrese el peso de la mujer", 55));

	pesoTotal = peso1 + peso2;
	promedio = pesoTotal / 2;
	alert(`Ustedes se llaman ${nombreHombre} y ${nombreMujer}, juntos pesan ${pesoTotal} kilos`);
	alert("Su promedio de kilos es" + promedio);  
}
