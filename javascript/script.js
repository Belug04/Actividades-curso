// function sumar(num1,num2)
// {
//     let resultado= num1 + num2;
//     console.log(resultado)
// }

// sumar(20,10)

// function nombres(nombre)
// {
//     console.log("Hola, " + nombre + " como estas?");
// }

// nombres("Belen")

// function mtsCuadrados(largo, ancho)
// {
//     let mts= largo * ancho;
//     console.log(mts + "m2");
// }

// mtsCuadrados(6,1)
// mtsCuadrados(3,5)

// function areacirculo(diametro)
// {
//     let radio= diametro/2;
//     let area= 3.14 * (radio*radio);
//     console.log("El area de el circulo es: " + area);

// }

// areacirculo(850)

// function calcularCuadrado(numero){
//     let cuadrado = numero*numero;

//     if(cuadrado>100){
//         cuadrado = 100;
//         console.log("El valor alcanzo el maximo: " + cuadrado);
//     }
// }

// function cuentaProgresiva(){
//     for(let i = 0; i < 10; i++ ){
//         console.log(i);
//     }
// }

//EJERCICIO MAYOR
function mayorDeCuatro(a, b, c, d) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
    }
    if (d > mayor) {
        mayor = d;
    }

    return mayor;
}

let num1 = 10;
let num2 = 25;
let num3 = 5;
let num4 = 40;

console.log("El mayor es: " + mayorDeCuatro(num1, num2, num3, num4));

//EJERCICIO MENOR
function menorDeTres(a, b, c) {
    let menor = a;

    if (b < menor) {
        menor = b;
    }
    if (c < menor) {
        menor = c;
    }

    return menor;
}

let number1 = 10;
let number2 = 25;
let number3 = 5;

console.log("El menor es: " + menorDeTres(number1, number2, number3));

//EJERCICIO PAR O IMPAR
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let num = 10;
console.log(esParOImpar(num));




// let refmytext = document.querySelector("#mytext")

// function mostrartexto(){
//     refmytext.innerHTML = "Soy el nuevo parrafo."
// }

const inputName = document.querySelector("#inp-nombre");
const outputText = document.querySelector("#salida-saludo");

// function saludar(){
//     const saludocompleto = "hola, me llamo Jarvis, un placer conocerla " + inputName.value;
//     outputText.innerHTML = saludocompleto;
// }

function saludar(){
    if(inputName.value != "")
    {
        const saludocompleto = "Hola, me llamo Jarvis, un placer conocerte " + inputName.value;
        outputText.innerHTML = saludocompleto;
    } else
        {
            outputText.innerHTML = "Por favor, ingresar tu nombre para empezar";
        }
}