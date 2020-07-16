/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
    //alert("ok");

    var numero1;
    var numero2;
    var resto;

    numero1 = txtIdNumeroDividendo.value;
    numero1 = parseInt(numero1);

    numero2 = txtIdNumeroDivisor.value;
    numero2 = parseInt(numero2);

    //El operador modulo "%" 

    resto = numero1 % numero2; //Cuando yo pongo el % me saca el resto no la division, ejemplo: 10 / 2 = con "/" me da {5} y con % me da {0};

    alert("El resto es " + resto);
}