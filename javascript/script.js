function sumar(num1,num2)
{
    let resultado= num1 + num2;
    console.log(resultado)
}

sumar(20,10)

function nombres(nombre)
{
    console.log("Hola, " + nombre + " como estas?");
}

nombres("Belen")

function mtsCuadrados(largo, ancho)
{
    let mts= largo * ancho;
    console.log(mts + "m2");
}

mtsCuadrados(6,1)
mtsCuadrados(3,5)

function areacirculo(diametro)
{
    let radio= diametro/2;
    let area= 3.14 * (radio*radio);
    console.log("El area de el circulo es: " + area);

}

areacirculo(850)