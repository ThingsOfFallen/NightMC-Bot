const { Client, GuildMember } = require('discord.js');
var name = '(Event:Guild) guildMemberUpdate'
/**
* @param {Client} client;
* @param {GuildMember} oldUser;
* @param {GuildMember} newUser;
*/
module.exports = async (client, oldMember, newMember) => {
    try {
        if (oldMember.pending && !newMember.pending) {
            const role = newMember.guild.roles.cache.find(role => role.id === '826751300489576448');
            if (role) {
                await newMember.roles.add(role);
            }
        }
    } catch (error) {
        require('../extra/error') (client, name, error);
    }
}