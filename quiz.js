#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let total = 0;
let condition = true;
let q1 = "Tim Berners lee";
let q2 = "Nexus";
let q3 = "Hyber text markup language";
let q4 = "Cascading style sheet ";
let q5 = "Tim Berners lee";
let q6 = "node package manger";
let q7 = "Es2020";
let q8 = "??";
let q9 = "&nbsp;";
let q10 = "Document object model";
while (condition) {
    let start = await inquirer.prompt([{
            name: "start",
            type: "input",
            message: "Are you ready for a quiz to start a quiz  press enter"
        }]);
    let ans1 = await inquirer.prompt([{
            name: "question1",
            type: "list",
            choices: ["Rasums Ledorf", "John doe", "Tim Berners lee"],
            message: "who is father of HTML"
        }, {
            name: "question2",
            type: "list",
            choices: ["Chrome", "Nexus", "Internt Explorer"],
            message: "what is first web browser name"
        }, {
            name: "question3",
            type: "list",
            choices: ["Hyper text make language", "Hello world language", "Hyber text markup language"],
            message: "what is the full form of HTML"
        }, {
            name: "question4",
            type: "list",
            choices: ["Cascading style sheet ", "color setting seclector", "color set styler"],
            message: "what is the full form of CSS"
        }, {
            name: "question5",
            type: "list",
            choices: ["willam worth", "shekspare", "Tim Berners lee"],
            message: "who invented the first web browser"
        }, {
            name: "question6",
            type: "list",
            choices: ["node published manger", "node package manger", "node package mangment"],
            message: "npm stand for"
        },
        {
            name: "question7",
            type: "list",
            choices: ["Es2021", "Es2018", "Es2020"],
            message: "which Es version coalescing operator introduce"
        }, {
            name: "question8",
            type: "list",
            choices: ["?", "^", "??"],
            message: "which one is coalescing operator"
        }, {
            name: "question9",
            type: "list",
            choices: ["&nbsp;", "&nbps;", "&bnsp;"],
            message: "which one we use for space in html "
        }, {
            name: "question10",
            type: "list",
            choices: ["Document object moral", "Document object model", "docs object members"],
            message: "DOM stand for"
        }
    ]);
    if (ans1.question1 === q1) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q1));
    }
    if (ans1.question2 === q2) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q2));
    }
    if (ans1.question3 === q3) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q3));
    }
    if (ans1.question4 === q4) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q4));
    }
    if (ans1.question5 === q5) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q5));
    }
    if (ans1.question6 === q6) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q6));
    }
    if (ans1.question7 === q7) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q7));
    }
    if (ans1.question8 === q8) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q8));
    }
    if (ans1.question9 === q9) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q9));
    }
    if (ans1.question10 === q10) {
        console.log(chalk.green("correct answer"));
        ++total;
    }
    else {
        console.log(chalk.red("wrong answer correct answer is" + " " + q10));
    }
    console.log(chalk.yellow("your total point is 10/" + total));
    let again = await inquirer.prompt([{
            name: "gain",
            type: "confirm",
            message: "you want to try again"
        }]);
    condition = again.gain;
}
