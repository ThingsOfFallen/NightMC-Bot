const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('š Pong!!!')
    .setColor('#00ffdc')
    .setDescription(`ā± Bot Ping: ${Date.now() - message.createdTimestamp}ms\nš WebSocket Ping: ${client.ws.ping}ms`)
    .setFooter('NightMC Utility', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'ping',
    category: 'utility'
};