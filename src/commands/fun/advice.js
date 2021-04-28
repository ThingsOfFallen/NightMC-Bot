const { Client, Message } = require('discord.js');
const random = require("something-random-on-discord").Random;
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let data = await random.getAdvice();
    message.channel.send(data);
};

module.exports.info = {
    name: 'advice',
    category: 'fun'
};