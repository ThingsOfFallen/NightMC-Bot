const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('🏓 Pong!!!')
    .setColor('#00ffdc')
    .setDescription(`⏱ Bot Ping: ${Date.now() - message.createdTimestamp}ms\n💓 WebSocket Ping: ${client.ws.ping}ms`)
    .setFooter('NightMC Utility', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'ping',
    category: 'utility'
};