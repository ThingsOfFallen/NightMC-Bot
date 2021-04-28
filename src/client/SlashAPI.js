const chalk = require('chalk');
module.exports = async (client) => {
    console.log(`${chalk.grey.bold('[')}${chalk.blue.bold('API')}${chalk.grey.bold(']')} ${chalk.white('All slash commands have been posted.')}`);
    client.ws.on('INTERACTION_CREATE', async (interaction) => {
        var command = interaction.data.name.toLowerCase();
        var args = interaction.data.options;

        var cmd = client.slash.get(command);
        if (!cmd) return;
        cmd.run(client, interaction, args);
    });
}