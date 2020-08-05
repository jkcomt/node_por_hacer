const porHacer = require('../por-hacer/por-hacer');
const colors = require('colors');

const descripcion = {
    alias: 'd',
    require: true
};

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
                .command('crear','Crear una tarea',{
                    descripcion
                })
                .command('actualizar','Actualiza una tarea',{
                    descripcion,
                    completado
                })
                .command('borrar','Eliminar una tarea',{
                    descripcion
                })
                .help()
                .argv;


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear Tarea');
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);        
        break;
    case 'listar':
        
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========== Tarea por Hacer ==========='.green);
            console.log(tarea.descripcion.brightBlue);
            console.log('Estado: ', (tarea.completado).toString().brightBlue);
            console.log('======================================='.green);                        
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado.toString().green);
        break;
    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado.toString().green);
        break;
    default:
        console.log('Comando no reconocido');        
        break;
}

module.exports = {
    argv
}