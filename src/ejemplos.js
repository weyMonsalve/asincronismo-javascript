// function procesarMensaje(mensaje, callback) {
//     console.log("Mensaje recibido" + mensaje);
//     callback();
// }

// function mostrarConfirmacon() {
//     console.log("El mensaje ha sido procesado correctamente");
// }

// procesarMensaje("Hola esto es un CALLBACK en javacript", mostrarConfirmacon);


// function saludar(nombre, callback) {
//     console.log("Hola, " + nombre);
//     callback();
// }

// function despedirse() {
//     console.log("Adios, que tengas un buen dia");
// }

// saludar("Matias", despedirse);




// Ejemplo setTimeout (Retrasar la ejecución de una función)

// console.log("Inicio...");

// setTimeout(function() {
//     console.log("Esto se ejecuta después de 3 segundos.");
// }, 3000); // 3000 milisegundos = 3 segundos

// console.log("Fin...");

//************************************************************

// function ejecutarCallback(callback) {
//     console.log("Ejecutando la función principal...");
//     callback();

// }

// function miCallback() {
//     console.log("Callback ejecutado correctamente.");
// }

// ejecutarCallback(miCallback);

// function simularProceso(callback) {
//     console.log("Iniciando proceso...");


//     setTimeout(function() {
//         callback();
//     }, 2000);
// }


// function finalizar() {
//     console.log("Proceso completado.");
// }


// simularProceso(finalizar);


// function mostrarMensajeRetrasado(mensaje, callback) {
//     setTimeout(function() {
//         callback(mensaje);
//     }, 2000);
// }

// function imprimirMensaje(mensaje) {
//     console.log("Callback realizado por wbeimar", mensaje);
// }

// mostrarMensajeRetrasado("Este es un mensaje con retraso", imprimirMensaje);


// function filtrarPares(numeros, callback) {
//     const numerosPares = numeros.filter(function(num) {
//         return num % 2 === 0;
//     });
//     callback(numerosPares);
// }

// function mostrarNumerosPares(pares) {
//     console.log("Numeros pares", pares);
// }

// filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mostrarNumerosPares);


// function cargarDatos(callback) {
//     console.log("Cargando datos...");

//     setTimeout(function() {
//         const datos = { usuario: "wbeimar", edad: 40, pais: "Colombia" };
//         callback(datos)
//     }, 3000);
// }

// function mostarDatos(datos) {
//     console.log("Datos cargados correctamente", datos);
// }

// cargarDatos(mostarDatos);

function calcular(num1, num2, operacion) {
    const resultado = operacion(num1, num2);
    console.log("Resultado:", resultado);
}


function sumar(a, b) {
    return a + b;
}


function restar(a, b) {
    return a - b;
}


function multiplicar(a, b) {
    return a * b;
}


calcular(10, 5, sumar);
calcular(10, 5, restar);
calcular(10, 5, multiplicar);