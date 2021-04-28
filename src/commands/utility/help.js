const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('NightMC • Help')
    .setColor('#00ffdc')
    .setDescription(`For a list of commands do !cmds or !commands.\nFor support with the server create a ticket in <#826751339463442462>`)
    .setFooter('NightMC Support', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'help',
    category: 'utility'
};