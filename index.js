#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function welcome() {
    let rainbowTitles = chalkanimation.rainbow("Lets start calculations baby");
    await sleep();
    rainbowTitles.stop;
    console.log(chalk.red(`
          ____________________
        |  _________________  |
        | | Abdulbaseer  0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|
        `));
}
await welcome();
async function start() {
    const answers = await inquirer
        .prompt([
        /* Pass your Question here */
        {
            type: "list",
            name: "operator",
            message: "Which opretion you want to perform \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the first number \n",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the Seconde number \n",
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.yellow(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.yellow(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.yellow(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2} `));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `));
    }
}
//  start()
async function startagain() {
    do {
        await start();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "Restart",
            message: "Do you want to restart Y Or N:"
        });
    } while (again.Restart == 'Y ' || again.Restart == 'y' || again.Restart == 'yes' || again.Restart == 'Yes' || again.Restart == 'YES' || again.Restart == 'No' || again.Restart == 'no' || again.Restart == 'No' || again.Restart == 'NO');
}
startagain();
