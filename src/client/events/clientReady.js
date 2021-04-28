const chalk = require('chalk');
const axios = require('axios');
module.exports = async (client) => {
    require('../SlashAPI') (client);
    console.log(`${chalk.grey.bold('[')}${chalk.cyanBright.bold('CLIENT')}${chalk.grey.bold(']')} ${chalk.white(`Logged into discord as: ${client.user.tag}`)}`);
    console.log(`${chalk.grey.bold('[')}${chalk.magentaBright.bold('STARTUP')}${chalk.grey.bold(']')} ${chalk.white('Startup completed successfully!')}`);

    setInterval(async () => {
        await clientstatus();
        await serverstatus();
    }, 60000);

    async function clientstatus() {
        await client.user.setPresence({
            activity: {
                name: 'over NightMC 🌙',
                type: 'WATCHING'
            },
            status: 'idle'
        });
    };

    async function serverstatus() {
        await axios({
            method: 'GET',
            url: 'https://mcapi.us/server/status?ip=play.nightmc.org&port=25565'
        }).then(async (responce) => {
            var guild = client.guilds.cache.get('796688714490839050');
            var memberch = client.channels.cache.get('826751314066538526');
            var onlinech = client.channels.cache.get('826751315857375232');
            await memberch.setName(`Members: ${guild.memberCount}`);
            await onlinech.setName(`Online: ${responce.data.players.now}`);
        });
    };
};