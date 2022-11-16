const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar.'
                }).check((argv, options) => {
                    console.log('yargs', argv)
                        if (isNaN(argv.b)) {
                            throw 'La base tiene que ser un número.';
                        }
                        
                        return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe:'Enlista la tabla de multiplicar.'
                }).option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe:'Indica hasta que numero hay que multiplicar.'
                })
                .argv;

module.exports =argv;
