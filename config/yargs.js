const description = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea'
};

const completed = {
  alias: 'c',
  default: true,
  desc: 'Estado de la tarea'
};

const argv = require('yargs')
  .command('list', 'Lista tareas por hacer')
  .command('add', 'Agrega tarea por hacer', { description })
  .command('update', 'Actualiza el estado de una tarea', { description, completed })
  .command('delete', 'Elimina tarea por hacer', { description })
  .help()
  .argv;

module.exports = {
  argv
}