const { argv } = require('./config/yargs');
const todo = require('./src/todo');
const colors = require('colors');

const command = argv._[0];

switch (command) {

  case 'list':
    let tasks = todo.list();
    tasks.forEach((task) => {
      console.log('======Task====='.green);
      console.log(task.description);
      console.log('Status: ', task.completed);
      console.log('================\n'.green);
    });
    break;

  case 'add':
    let task = todo.add(argv.description);
    console.log(task);
    break;

  case 'update':
    let taskUpdate = todo.update(argv.description, argv.completed);
    console.log(taskUpdate);
    break;
  
  case 'delete':
    let taskDelete = todo.deleteTask(argv.description);
    console.log(taskDelete);
    break;

  default:
    console.log('Command don\'t exist');

}