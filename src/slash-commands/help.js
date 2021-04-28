const { MessageEmbed } = require('discord.js');
const createAPIMessage = require('../extra/APIMessage');
module.exports.run = async (client, interaction, args) => {
    let embed = new MessageEmbed()
    .setTitle('NightMC • Help')
    .setColor('#00ffdc')
    .setDescription(`For a list of commands do !cmds or !commands.\nFor support with the server create a ticket in <#826751339463442462>`)
    .setFooter('NightMC Support', client.user.avatarURL())
    .setTimestamp();
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: await createAPIMessage(interaction, embed, client)
        }
    });
};

module.exports.info = {
    name: 'help'
}