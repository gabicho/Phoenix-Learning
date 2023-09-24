//* 1.-Retornar un string.
function devolverDireccion(direccion){
    // 🎯 'Return' la string provista: str
    // Tu código: 
    return "Tu dirección es " + direccion;
}

//* 2.-Retornar una suma.
function suma(x, y){
    // "x" e "y" son números: 
    // 🎯 suma "x" e "y" y retorná el valor
    // Tu código:    
    return `la suma de ${x} e ${y} = ${x+y}`
}

//* 3.-Retornar una resta.
function resta(x, y){
    // 🎯 resta "y" e "x" y retorná el valor
    // Tu código:     
    return `La resta de ${x} e ${y} = ${x+y}`
}

//* 4.-Retornar una multiplicación.
function multiplicar(x, y){
    // 🎯 multiplica "x" e "y" y retorná el valor
    // Tu código: 
    return `La multiplicación de ${x} e ${y} = ${x*y}`
}

//* 5.-Retornar una división.
function dividir(x, y){
    // 🎯 dividí "x" e "y" y retorná el valor
    // Tu código: 
    return `La división de ${x} e ${y} = ${x/y}`
}

// *6.-Comparar números.
function igualdad(x, y){
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    // Tu código: 
    if(x===y){
        return true;
    }
    else{
        return false;
    }
}

//* 7.-Comparar la longitud de dos strings.
function compararLongitud(str1, str2){
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    // Tu código: 
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}

//* 8.-Comparar un parámetro I.
function menorQueNoventa(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    // Tu código: 
    if (num<90) {
        return true;
    } else {
        return false;
    }
}


//* 9.-Comparar un parámetro II.
function mayorQueCincuenta(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    // Tu código: 
    if (num >50) {
        return true;
    } else {
        return false;
    }
}


//* 10.-Retornar el módulo o resto.
function obtenerResto(x, y){
    // 🎯 Obtener el resto de la división de "x" e "y".
    // Tu código: 
    return x%y;
}

//* 11.-Comprobar si es par.
function esPar(num){
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    // Tu código: 
    if (num%2==0) {        
        return true;
    } else {        
        return false;
    }
}
//console.log(esPar(15))

//* 12.-Comprobar si es impar.
function esImpar(num){
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    // Tu código: 
    if (num%2!=0) {
        return true;
    } else {
        return false;
    }
}
//console.log(esImpar(16));

//* 13.- Elevar un número al cuadrado.
function elevarAlCuadrado(num){
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    // Tu código: 
    return Math.pow(num,2);
}
//console.log(elevarAlCuadrado(5));

//* 14.- Elevar un número al cubo.
function elevarAlCubo(num){
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    // Tu código: 
    return Math.pow(num,3);
}
//console.log(elevarAlCubo(3));


//* 15.-Elevar un número a un exponente.
function elevar(num, exponent){
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
    return Math.pow(num,exponent);
}
//console.log(elevar(2,4));

//* 16.- Redondear un número.
function redondearNumero(num){
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código: 
    return Math.round(num);
}
//console.log(redondearNumero(17.5));

//* 17.-Redondear un número hacia arriba.
function redondearHaciaArriba(num){
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código: 
    return Math.ceil(num);
}
//console.log(redondearHaciaArriba(15.01));

//* 18.-Retornar un número aleatorio.
function numeroRandom(){
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código: 
    return Math.round(Math.random());
}
//console.log(numeroRandom());

//* 19.-Comprar si un numero es positivo.
function esPositivo(num){
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    // Tu código: 
    if (num>0) {
        return "Es positivo";
    } else if(num<0) {
        return "Es negativo";
    }
    else    {
        return false;
    }
}
//console.log(esPositivo(0));

//* 20.-Concatenar strings I.
function agregarSimboloDeExclamacion(str){
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string 
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    // Tu código: 
    return str+ "!";
}
//console.log(agregarSimboloDeExclamacion("hello world"));

//* 21.-Concatenar strings II.
function combinarNombres(nombre, apellido){
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    // Tu código: 
    return nombre +" "+ apellido;
}
// console.log(combinarNombres("Gabriel", "Rodrigo"));

//* 22.-Concatenar strings III.
function retornarSaludo(nombre){
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    // Tu código: 
    return `Hola ${nombre}!`;
}
//console.log(retornarSaludo("Gabriel"));

//* 23.-Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho){
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
    // Tu código: 
    return `El area del rectangulo es ${alto*ancho}`
}
// console.log(areaDelRectangulo(10,2));

//* 24.-Operaciones matemáticas II.
function perimetroDelCuadrado(lado){
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    // Tu código: 
    return `El perimetro del cuadrado es ${lado*4}`
}
//console.log(perimetroDelCuadrado(5));

//* 25.-Operaciones matemáticas III.
function areaDelTriangulo(base, altura){
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    // Tu código: 
    return `El area del triangulo es ${(base*altura)/2}`;
}
//console.log(areaDelTriangulo(10,2));

//* 26.-Operaciones matemáticas IV.
function deEuroAdolar(euro){
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    // Tu código: 
    return `El cambio a dolares es ${euro*1.2}`;
}
//console.log(deEuroAdolar(2));

//* 27.-Condicionales.
function esVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código:     
    letra = letra.toLowerCase();    
    if (letra.length>1) {
        return "Dato incorrecto"
    } else {
        if (letra == "a" ||letra == "e"||letra == "i"||letra == "o"||letra == "u") {
            return "Es vocal"
        }        
    }
}
// console.log(esVocal("u"));