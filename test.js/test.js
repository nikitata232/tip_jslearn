const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите число: ", (input) => {
  const num = Number(input);

  if (num >= 0 && num <= 100) {
    console.log("В диапазоне");
  } else {
    console.log("Не в диапазоне");
  }

  rl.close();
});