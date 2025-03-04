// function procesarusuario(nombre, callback) {
//     setTimeout(() => {
//         let mensaje = `Usuario procesado ${nombre}`;
//         callback(mensaje);
//     }, 2000)
// }

// procesarusuario("Matias", function resultado(resultado) {
//     console.log(resultado);
// });

// function calcular(a, b, operacion) {
//     return operacion(a, b);
// }

// function sumar(x, y) {
//     return x + y;
// }

// function restar(x, y) {
//     return x - y;
// }

// console.log(calcular(8, 4, sumar));
// console.log(calcular(5, 3, restar));


// function obtenerUsuario(id, callback) {
//     setTimeout(() => {
//         let usuario = { id: id, nombre: "wbeimar" };
//         callback(usuario);
//     }, 2000);
// }

// obtenerUsuario(1, function(usuario) {
//     console.log(`Usuario Obtenido: ${usuario.nombre}`);
// });



// let tareas = [];

// function agregarTarea(tarea, callback) {
//     setTimeout(() => {
//         tareas.push(tarea);
//         callback(tarea);
//     }, 1500);
// }

// agregarTarea("Aprender Asinconismo en JavaScript", function(tarea) {
//     console.log(`Tarea agregada: ${tarea}`);
//     console.log(`Lista de tareas: ${tareas}`);
// });


function hervirAgua(callback) {
    setTimeout(() => {
        console.log("💧 Agua hervida");
        callback();
    }, 2000);
}

function prepararCAfe(callback) {
    setTimeout(() => {
        console.log("☕ Café preparado");
        callback();
    }, 1500);
}

function servirCafe() {
    setTimeout(() => {
        console.log("🥛 Café servido. ¡Disfruta!");
    }, 1000);
}

function hacerCafe() {
    hervirAgua(() => {
        prepararCAfe(() => {
            servirCafe();
        });
    });
}

hacerCafe();