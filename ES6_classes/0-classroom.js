// Remplacer var par const ici
export function taskFirst() {
  const task = 'I prefer const when I can.'; // var → const
  return task;
}

// Remplacer var par let ici
export function taskNext() {
  let combination = 'But sometimes let'; // var → let
  combination += getLast();
  return combination;
}
