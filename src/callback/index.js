function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function() {
    console.log("hola javascript")
}, 5000);

function saludo(nombre) {
    console.log(`¡Hola ${nombre}`);
}

setTimeout(saludo, 2000, "Wbeimar");

function usuario(nombre, apellido) {
    return nombre + apellido;
}

function registrarUsuario(nombre, apellido, callback) {
    return callback(nombre, apellido);
}

console.log(registrarUsuario("wbeimar", " ", "monsalve", usuario));