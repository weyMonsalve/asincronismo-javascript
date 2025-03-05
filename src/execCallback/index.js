function execCallback(callback) {
    window.setTimeout(() => {
        callback();
    }, 2000);
}




function runCode(name, callback) {
    return setTimeout(function() {
        console.log(callback(name));
    }, 2000);
}

function name(name) {
    return `Hola ${name}`;
}

runCode('Jesus', name);