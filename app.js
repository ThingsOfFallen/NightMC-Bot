require('dotenv').config();
const chalk = require('chalk');
const { textSync } = require('figlet');
var year = new Date().getFullYear();
console.log(chalk.cyanBright(textSync('NightMC  Bot', { horizontalLayout: 'fitted' })));
console.log(`${chalk.yellow.bold('#=============================')}${chalk.grey.bold('[')} ${chalk.cyanBright.bold('Night MC Bot')} ${chalk.grey.bold(']')}${chalk.yellow.bold('=============================#')}`)
console.log(`${chalk.yellow.bold('#')}                   ${chalk.magenta.bold('Created by: Liam L <TheFallenSpirit>')}                   ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}              ${chalk.red(`Copyright © 2021-${year}`)} ${chalk.cyanBright.bold('Liam L <TheFallenSpirit>')}              ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}                              ${chalk.grey.bold('Starting bot..')}                              ${chalk.yellow.bold('#')}`);
console.log(chalk.yellow.bold('#==========================================================================#'));
