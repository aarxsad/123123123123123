
let { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'statistics',
    aliases: ['i', 'botdurum', 'bot-durum'],
    category: 'bot',

    run: async (app, message, args) => {

        let messageEmbed = new MessageEmbed()
        .addField('Members', app.users.cache.size, true)
        .addField('Servers', app.guilds.cache.size, true)
        .addField('RAM', `${(process.memoryUsage().heapUsed / 1204 / 1024).toFixed(2)}`, true)
        .addField('Version', 'v0.1', true)
        .addField('Coder', `<@784685474216017920>`, true)
        .addField('Bot Creating Time', '19.01.2022', true)
        .setThumbnail(app.user.displayAvatarURL())
        .setAuthor(app.user.username, app.user.displayAvatarURL())
        .setFooter('ReBoot Statistics')
        .setColor('BLUE')

        message.channel.send(messageEmbed)
    }
}