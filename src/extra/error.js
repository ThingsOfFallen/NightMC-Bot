const config = require('../../config.json');
const moment = require('moment')
const { MessageEmbed } = require('discord.js');
const { writeFileSync } = require('fs');
module.exports = async (client, name, error) => {
    var emoji = client.emojis.cache.get('805658996773879830');
    writeFileSync(`./errors/${moment(Date.now()).format("DD-MM-YYYY_HH-mm-SS")}.txt`, `${error}`);
    let embed = new MessageEmbed()
        .setColor('#CD0000')
        .setTitle(`${emoji} NightMC - Error Detected`)
        .setDescription(`This error occured in: ${name}.js`)
        .addField('Error:', '```txt\n' + `${error}` + '```')
        .setFooter('NightMC Backend', client.user.avatarURL())
        .setTimestamp()
    config.backend.notify.forEach(async (id) => {
        var guild = client.guilds.cache.get('796688714490839050');
        var member = guild.members.cache.get(id);
        await member.send(embed);
    })
}