const { Client, Message, MessageEmbed } = require('discord.js');
const ticketSchema = require('../../database/schemas/ticket');
var name = '(Command:Ticket) new'
/**
* @param {Client} client;
* @param {Message} message;
* @param {Array} args;
*/
module.exports.run = async (client, message, args) => {
    try {
        var user = message.author;
        var member = message.guild.member(user);
        if (await ticketSchema.exists({ userID: user.id })) return message.reply('You already have a ticket!');
        var supportChannel = await message.guild.channels.create(`${user.username}-${user.discriminator}`, {
            type: 'text',
            parent: '827798272986316801',
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: '826751301878284298',
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                },
                {
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                }
            ]
        });
        let supportEmbed = new MessageEmbed()
        .setColor('#00ffdc')
        .setTitle('New Ticket!')
        .setDescription(`Username: ${user.tag}\nID: ${user.id}\nJoined At: ${member.joinedAt.toDateString()}\nCreated At: ${user.createdAt.toDateString()}`)
        .setThumbnail(user.avatarURL())
        .setFooter('NightMC Tickets', client.user.avatarURL())
        .setTimestamp();
        await ticketSchema.create({ userID: user.id, channelID: supportChannel.id });
        message.channel.send('Your ticket has been created!');
        await supportChannel.send(`<@!${user.id}>`).then(msg => msg.delete())
        await supportChannel.send(`<@&826751301878284298>, `, {embed: supportEmbed});
    } catch (error) {
        require('../../extra/error') (client, name, error);
    }
};

module.exports.info = {
    name: 'new',
    category: 'tickets'
};