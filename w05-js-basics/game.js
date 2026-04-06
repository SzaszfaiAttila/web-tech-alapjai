const min = 0;
const max = 1000000;
const maxGuesses = 20;
let guesses = 0;
let hit = false;

const goal = Math.floor(Math.random() * (max - min + 1)) + min;
alert("Gondoltam egy szamra 0 es 1.000.000 kozott. Probald meg kitalalni 20 probalkozason belul!");

while (guesses < maxGuesses && !hit) {
  guesses++;

  let input = prompt(`Add meg a(z) ${guesses}. tippedet:`);

  if (input === null) {
    alert("Jatek megszakitva.");
    break;
  }

  let guess = parseInt(input);

  if (isNaN(guess)) {
    alert("Ervenyes szamot adj meg!");
    guesses--;
    continue;
  }

  if (guess < min || guess > max) {
    alert(`A szamnak ${min} es ${max} kozott kell lennie!`);
    guesses--;
    continue;
  }

  if (guess === goal) {
    alert(`Gratulalok, ${guesses} lepesbol eltalaltad!`);
    hit = true;
  } else if (guess > goal) {
    alert(`${guesses}. tipp nem talalt: A megoldas kisebb.`);
  } else {
    alert(`${guesses}. tipp nem talalt: A megoldas nagyobb.`);
  }
}

if (!hit) {
  alert(`Sajnos ez most nem sikerult! A megoldas: ${goal}`);
}
