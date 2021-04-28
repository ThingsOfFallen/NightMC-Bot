const { readdirSync } = require('fs');
const chalk = require('chalk');
module.exports = async (client) => {
    readdirSync('./src/commands').forEach(dir => {
        const commandFiles = readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.js'));
        for (let file of commandFiles) {
            let cmd = require(`../commands/${dir}/${file}`);
            if (cmd.info.name) {
                client.commands.set(cmd.info.name, cmd);
            }
        };
    });
    console.log(`${chalk.grey.bold('[')}${chalk.green.bold('HANDLER')}${chalk.grey.bold(']')} ${chalk.white('All commands have been loaded.')}`);
};