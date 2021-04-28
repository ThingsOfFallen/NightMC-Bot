const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    var developer = client.users.cache.get('762931157498331157');
    let embed = new MessageEmbed()
    .setTitle('NightMC Bot • Information')
    .setColor('#00ffdc')
    .setDescription(`Developer: ${developer.tag} (${developer.id})\nCommands: ${client.commands.size}\nSlash Commands: ${client.slash.size}\nNodeJS: ${process.version}\nBot Ping: ${Date.now() - message.createdTimestamp}ms\nWebSocket Ping: ${client.ws.ping}ms\nCopyright: © 2021-${new Date().getFullYear()} Liam L <TheFallenSpirit>`)
    .setFooter('NightMC Development', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'botinfo',
    category: 'utility'
};