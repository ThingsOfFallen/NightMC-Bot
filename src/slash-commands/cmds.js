const { MessageEmbed } = require('discord.js');
const createAPIMessage = require('../extra/APIMessage');
module.exports.run = async (client, interaction, args) => {
    let embed = new MessageEmbed()
    .setTitle('NightMC • Commands')
    .setColor('#00ffdc')
    .addFields(
        {name: 'Member:', value: '!help shows the help embed.\n!cmds or !commands shows this embed.\n!new creates a new ticket.\n!close will close a ticket.'},
        {name: 'Fun:', value: '!advice, !blur, !cat, !dog, !error, !jail, !joke, !meme, !roast, !trash, !triggered'},
        {name: 'Moderation:', value: '!kick, !ban, !tempmute, !mute, !tempban, !unban, !unmute, !clear, !lock, !unlock'},
        {name: 'Administration: ', value: '!role, !blacklist, !trigger, !restart, !lockdown'},
        {name: 'Owner', value: '!bot-lockdown, !stop'}
    )
    .setFooter('NightMC Utility', client.user.avatarURL())
    .setTimestamp();
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: await createAPIMessage(interaction, embed, client)
        }
    });
};

module.exports.info = {
    name: 'cmds'
}