import chalk from "chalk";

const nota = 7

if(nota >= 7){
    console.log(chalk.green('Parabéns! Você está aprovado!'))
}else {
    console.log(chalk.black.bgRedBright('Você precisa fazer a prova de recuperação!'))
}