const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'coin',
    showInHelp: true,
    description: 'Подбрасить монетку.',
    execute(message) {
        let embed;
        if (Math.round(Math.random()) === 0) {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпал орёл!')
                .setImage('https://i.imgur.com/ufge96c.png')
                .setTimestamp()
                .setColor(config.embedColor);
        } else {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпал решка!')
                .setImage('https://i.imgur.com/aklAD9k.png')
                .setTimestamp()
                .setColor(config.embedColor);
        }
        return message.channel.send(embed);
    }
};