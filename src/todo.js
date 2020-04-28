const fs = require('fs');

let tasks = [];

const save = () => {
  const data = JSON.stringify(tasks);

  fs.writeFile('./db/data.json', data, err => {
    if (err) throw new Error('failed', err);
  });
}

const load = () => {
  try {
    tasks = require('../db/data.json');
  } catch (error) {
    tasks = [];
  }

}

const add = description => {
  load();
  let task = {
    description,
    completed: false
  }
  tasks.push(task);
  save();
  return task;
}

const list = () => {
  load();
  return tasks;
}

const update = (description, completed = true) => {
  load();
  let index = tasks.findIndex(task => task.description === description);
  if (index >= 0) {
    tasks[index].completed = completed;
    save();
    return true;
  }
  return false;
}

const deleteTask = description => {
  load();
  let index = tasks.findIndex(task => task.description === description);
  if (index >= 0) {
    tasks.splice(index);
    save();
    return true;
  }
  return false;

}

module.exports = {
  add, list, update, deleteTask
}