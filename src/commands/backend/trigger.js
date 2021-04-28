const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission!');
    switch (args[0]) {
        case 'ticketembed':
            let ticketembed = new MessageEmbed()
            .setTitle('NightMC • Support')
            .setColor('#00ffdc')
            .setDescription('Click the 📩 below to create a ticket.')
            .setFooter('NightMC Support', client.user.avatarURL())
            .setTimestamp()
            await message.channel.send(ticketembed).then(msg => msg.react('📩'));
        break;

        case 'rulesembed':
            let rulesembed = new MessageEmbed()
            .setTitle('NightMC • Discord Rules')
            .setColor('#00ffdc')
            .addFields(
                {name: '(1) There should be no hateful/racist/sexist/toxic/homophobic behavior:', value: 'This includes saying **ANYTHING** against another member to make them upset or hurt their feelings; Saying any racial slurs or racist terms to another member or saying them about anyone. No homophobic or related behavior. No sexist or related behavior.'},
                {name: '(2) There should be no NSFW or related content:', value: 'This includes any sort of NSFW content or anything of an NSFW nature; Any non-child-friendly content. You are allowed to swear... Refer to rule 1 for more info. Any violation of this rule will not be taken lightly!'},
                {name: '(3) There should be no chat flood or spam:', value: 'This includes sending 5+ messages at once; Saying the same phrase or text multiple times.'},
                {name: '(4) There should be no threats of any kind:', value: 'This includes saying you will DOX/DDOS someone as a joke or being serious or any other type of threat whether you are joking or not. Any violation of this rule will not be taken lightly!'},
                {name: '(5) There should be no advertising or self-promotion:', value: 'This includes sending any type of Invite link, Social Media link, or advertisements of any kind.\nContent creators are allowed to promote content based on NightMC.'},
                {name: '(6) There should be no drama of any kind:', value: 'This includes ranting about any sort of issue/problem with another server or DMs unrelated to this server.\nThis will not be taken lightly and will be punished.\nWe want a toxic-free zone, drama should be taken to DMs.'},
                {name: '(7) Keep all messages in their respected channels:', value: 'This includes using commands or sending memes in general, chatting in commands... etc.'},
                {name: '(8) There should be no personal information of any kind:', value: 'This includes asking for personal information, revealing your personal information, or releasing the personal information of others. Any violation of this rule will not be taken lightly!'},
                {name: '(9) There should be no impersonation of any kind:', value: 'This includes changing your username/nickname to any of the Staff Members or Owners.'},
                {name: 'The Discord TOS & Guidelines apply at all times!', value: 'Discord TOS: https://discord.com/terms\nDiscord Guidelines: https://discord.com/guidelines'}
            )
            .setFooter('NightMC Info', client.user.avatarURL())
            .setThumbnail(message.guild.iconURL())
            .setTimestamp();
            await message.channel.send(rulesembed);
        break;
    }
};

module.exports.info = {
    name: 'trigger',
    category: 'backend'
};