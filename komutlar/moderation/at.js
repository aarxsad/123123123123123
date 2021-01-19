  
module.exports = {

    name: 'kick',
    aliases: 'kick',
    category: 'moderation',

    run: (app, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return;
        
        let user = message.mentions.users.first();
        let member = message.guild.member(user);

        if (!member) return message.channel.send('Wich Member I Kick?.')

        member.kick()

        message.channel.send(`Successfully ${member} is kicking.`)
    }
}