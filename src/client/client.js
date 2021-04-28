require('dotenv').config();
const config = require('../../config.json');
const chalk = require('chalk');
const { Client, Collection, Intents, Structures } = require('discord.js');
Structures.extend('GuildMember', GuildMember => {
    class GuildMemberWithPending extends GuildMember {
        pending = false;
    
        constructor(client, data, guild) {
            super(client, data, guild);
            this.pending = data.pending ?? false;
        }
    
        _patch(data) {
            super._patch(data);
            this.pending = data.pending ?? false;
        }
    }
    return GuildMemberWithPending;
});
const client = new Client({
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 260,
    messageEditHistoryMaxSize: 260,
    fetchAllMembers: true,
    disableMentions: 'none',
    retryLimit: 6,
    ws: { intents: Intents.ALL },
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']
});
console.log(`${chalk.grey.bold('[')}${chalk.red.bold('ALERT')}${chalk.grey.bold(']')} ${chalk.white('You are running NightMC-Bot Full!')}`);

client.commands = new Collection();
client.slash = new Collection();
console.log(`${chalk.grey.bold('[')}${chalk.redBright.bold('PROCESS')}${chalk.grey.bold(']')} ${chalk.white('Initiation Completed.')}`);

require('../handlers/command') (client);
require('../handlers/slash') (client);
require('../handlers/event') (client);
require('../database/connection') ();

client.login(config.client.token);