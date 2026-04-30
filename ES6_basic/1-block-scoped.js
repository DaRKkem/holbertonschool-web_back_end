export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // To avoid re-declaring, assign new values directly
    task = true;
    task2 = false;
  }

  return [task, task2];
}
