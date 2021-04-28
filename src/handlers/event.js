const chalk = require('chalk');
module.exports = async (client) => {
    client.once('ready', async () => require('../client/events/clientReady') (client));
    client.on('message', async (message) => require('../events/message') (client, message));
    client.on('messageReactionAdd', async (reaction, user) => require('../events/messageReactionAdd') (client, reaction, user));
    client.on('guildMemberUpdate', async (oldMember, newMember) => require('../events/guildMemberUpdate') (client, oldMember, newMember));
    console.log(`${chalk.grey.bold('[')}${chalk.green.bold('HANDLER')}${chalk.grey.bold(']')} ${chalk.white('All events have been loaded.')}`);
};