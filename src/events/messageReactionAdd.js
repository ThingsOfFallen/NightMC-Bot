const { Client, MessageReaction, MessageEmbed } = require('discord.js');
const ticketSchema = require('../database/schemas/ticket');
var name = '(Event:Guild) messageReactionAdd'
/**
* @param {Client} client
* @param {MessageReaction} reaction;
*/
module.exports = async (client, reaction, user) => {
    try {
        var member = reaction.message.guild.member(user);
        switch (reaction.message.id) {
            case '828031654671941675':
                if (reaction.emoji.name == '📩') {
                    reaction.users.remove(user);
                    var member = reaction.message.guild.member(user);
                    if (await ticketSchema.exists({ userID: member.user.id })) return member.user.send('You already have a ticket!');
                    var supportChannel = await reaction.message.guild.channels.create(`${member.user.username}-${member.user.discriminator}`, {
                        type: 'text',
                        parent: '827798272986316801',
                        permissionOverwrites: [
                            {
                                id: reaction.message.guild.roles.everyone,
                                deny: ['VIEW_CHANNEL']
                            },
                            {
                                id: '826751301878284298',
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                            },
                            {
                                id: member.user.id,
                                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                            }
                        ]
                    });
                    let supportEmbed = new MessageEmbed()
                    .setColor('#13d0f1')
                    .setTitle('New Ticket!')
                    .setDescription(`Username: ${member.user.tag}\nID: ${member.user.id}\nJoined At: ${member.joinedAt.toDateString()}\nCreated At: ${member.user.createdAt.toDateString()}`)
                    .setThumbnail(member.user.avatarURL())
                    .setFooter('NightMC Tickets', client.user.avatarURL())
                    .setTimestamp();
                    await ticketSchema.create({ userID: member.user.id, channelID: supportChannel.id });
                    member.user.send('Your ticket has been created!');
                    await supportChannel.send(`<@!${member.user.id}>`).then(msg => msg.delete())
                    await supportChannel.send(`<@&826751301878284298>, `, {embed: supportEmbed});
                }
            break;
        }
    } catch (error) {
        require('../extra/error') (client, name, error);
    }
}