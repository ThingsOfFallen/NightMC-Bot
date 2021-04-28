const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
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
    message.channel.send(embed);
};

module.exports.info = {
    name: 'commands',
    category: 'utility'
};