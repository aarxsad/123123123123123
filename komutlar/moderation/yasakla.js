module.exports = {

    name: 'ban',
    aliases: 'ban',
    category: 'moderation',

    run: (app, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return;
        
        let user = message.mentions.users.first();
        let member = message.guild.member(user);

        if (!member) return message.channel.send('Wich Member I Ban?')

        member.ban({
            reason: 'Banned With ReBoot.'
        })

        message.channel.send(`Successfully${member} is banned.`)
    }
}