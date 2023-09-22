// import chalk from "chalk";
import inquirer from "inquirer";
async function Cal() {
    let val = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter Number-1: "
        },
        {
            type: "list",
            name: "operation",
            message: "Choose Operator: ",
            choices: ["+", "-", "*", "/", "%", "**"]
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number-2: "
        }
    ]);
    switch (val.operation) {
        case "+":
            console.log(`${val.num1} + ${val.num2} = ${val.num1 + val.num2}`);
            break;
        case "-":
            console.log(`${val.num1} - ${val.num2} = ${val.num1 - val.num2}`);
            break;
        case "*":
            console.log(`${val.num1} * ${val.num2} = ${val.num1 * val.num2}`);
            break;
        case "/":
            console.log(`${val.num1} / ${val.num2} = ${val.num1 / val.num2}`);
            break;
        case "%":
            console.log(`${val.num1} % ${val.num2} = ${val.num1 % val.num2}`);
            break;
        case "**":
            console.log(`${val.num1} raise to the power ${val.num2} = ${val.num1 ** val.num2}`);
            break;
        default:
            break;
    }
}
;
Cal();
