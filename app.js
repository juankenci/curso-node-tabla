const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear()


crearArchivo(argv.b,argv.l, argv.h)
    .then(nombreArchivo=> console.log("Se imprime nombre de archivo: " + nombreArchivo))
    .catch(error=> console.log(error));

    
