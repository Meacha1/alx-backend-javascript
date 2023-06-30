export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    (function () {
      task = true;
      task2 = false;
    })();
  }

  return [task, task2];
}

const result = taskBlock(true);
console.log(result);
