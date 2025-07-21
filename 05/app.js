import Junior from './classes/Junior.js';
import Mid from './classes/Mid.js';
import Senior from './classes/Senior.js';
import Programmer from './classes/Programmer';

const features = {
  skills: 10,
  experience: 10,
  willingness: 10,
};

const task = {
  difficult: 1,
  size: 1,
};

const junior = new Junior();
const mid = new Mid();
const senior = new Senior();

console.log('Junior time:', junior.getApproximateTimeTaskDoneInHours(task));
console.log('Mid time:', mid.getApproximateTimeTaskDoneInHours(task));
console.log('Senior time:', senior.getApproximateTimeTaskDoneInHours(task));

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);
