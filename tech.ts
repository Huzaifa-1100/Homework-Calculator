#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

const userAns = await inquirer.prompt([
  {
    name: "firstNum",
    type: "number",
    message: "Please Enter your First Number:",
  },
  {
    name: "secondNum",
    type: "number",
    message: "Please Enter your Second Number",
  },
  {
    name: "select",
    type: "list",
    message: "Please Select one Option",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponentiation",
    ],
  },
]);
let num1 = userAns.firstNum;
let num2 = userAns.secondNum;
let options = userAns.select;

switch (options) {
  case "Addition":
    console.log(chalk.bgWhite.red(`\n\tYour Answer is: ${num1 + num2}`));
    break;
  case "Subtraction":
    console.log(chalk.bgWhite.red(`\n\tYour Answer is: ${num1 - num2}`));
    break;
  case "Multiplication":
    console.log(chalk.bgWhite.red(`\n\tYour Answer is: ${num1 * num2}`));
    break;
  case "Division":
    console.log(chalk.bgWhite.red(`\n\tYour Answer is: ${num1 / num2}`));
    break;
  case "Modulus":
    console.log(chalk.bgWhite.red(`\n\tYour Answer is: ${num1 % num2}`));
    break;
  case "Exponentiation":
    console.log(
      chalk.bgWhite.red(`\n\tYour Answer is: ${Math.pow(num1, num2)}`)
    );
    break;
  default:
    console.log(chalk.bgRed.white(`\n\tPlease Select a Vlid Option`));
}
