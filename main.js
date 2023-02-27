console.log("Javascript revision + DOM intro")

// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.

function multiply(a,b) {
    return a * b;
}

console.log(multiply(3,4));


// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.


// function ageism() {
// let age = prompt("Cuántos años tienes?");
// age = +age;
   
// if (isNaN(age) === true) {       //To check if age is NaN
//     return ("La edad debe ser un número.")
// } else if (age < 18) {
//     return "Eres menor de edad.";
// } else if (age >= 18 && age < 65) {
//     return "Eres mayor de edad.";
// } else {
//     return "Eres un adulto mayor.";
// }
// }

// console.log(ageism());

// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function sumaTresNumeros(a,b,c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return "Debo ser ejecutada con números";
    } else {
        return a + b + c;
    }
}

console.log(sumaTresNumeros(100, 50, 4));



// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.


function primerosTresCaracteres(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
    }

    return string[0] + string[1] + string[2];
}

console.log(primerosTresCaracteres("Hello"));

// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.


function getPrecioMostrarIva(precio) {
    if (typeof precio !== "number") {
        return "No es un formato correcto";
    }

    precio = (precio + (precio * 0.21)).toFixed(2);

    return `El precio total con el IVA incluido es ${precio}€.`;
}

console.log(getPrecioMostrarIva(50.122344));


// Ejercicios extras
// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.


function penultimoCaracter(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
    } 

    return string[string.length - 1];
}

console.log(penultimoCaracter("Wow"));


// Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".

function cuentaVocales(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
    } 
    
    const arrayVocales = [];

    for(let letra of string) {

        switch(letra) {
            case "a":  arrayVocales.push(letra);
            break;
            case "á":  arrayVocales.push(letra);
            break;
            case "e": arrayVocales.push(letra);
            break;
            case "é": arrayVocales.push(letra);
            break;
            case "i": arrayVocales.push(letra);
            break;
            case "í": arrayVocales.push(letra);
            break;
            case "o": arrayVocales.push(letra);
            break;
            case "ó": arrayVocales.push(letra);
            break;
            case "u": arrayVocales.push(letra);
            break;
            case "ú": arrayVocales.push(letra);
            break;
            case "ü": arrayVocales.push(letra);
            break;
            case "ä":  arrayVocales.push(letra);
            break;
            case "ö":  arrayVocales.push(letra);
            break;
            default: 
            break;
        }
    }

   console.log(arrayVocales);
   return `El string contiene ${arrayVocales.length} vocales`;
   
}

console.log(cuentaVocales("We are the champions"));


// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.


function potencia(a,b) {
    return a ** b;

}

console.log(potencia(5,3));


// Crea un botón en tu archivo HTML
// Llama a ese botón en tu archivo js y muestralo por consola

let button = document.getElementById("btn");
console.log(button);

// Crea una función que cuando se ejecute muestre un alert que diga “Hola”


function msg() {
    alert("Hola!")
}


// Investiga qué es addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.

document.getElementById("btn").addEventListener("click", msg);


