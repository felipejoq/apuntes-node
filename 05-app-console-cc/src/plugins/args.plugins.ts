import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('t', {
    alias: 'table',
    type: 'number',
    demandOption: true,
    default: 1,
    describe: 'Tabla de multiplicar.'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Límite de la tabla.'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Mostrar la tabla de multiplicar.'
  })
  .option('n', {
    alias: 'file_name',
    type: 'string',
    default: 'table',
    describe: 'File name'
  })
  .option('p', {
    alias: 'path',
    type: 'string',
    default: './outputs/tables',
    describe: 'File destination path'
  })
  .check((argv, options) => {
    if(argv.t < 1) throw 'Error: El valor de la tabla debe ser mayor a 0';
    if(isNaN(argv.t)) throw 'Error: El valor de la tabla debe ser un número';
    if(isNaN(argv.l)) throw 'Error: El valor del límite debe ser un número';

    if(argv.n === 'table') argv.n = `${argv.n}_${argv.t}`   

    return true;
  })
  .parseSync();