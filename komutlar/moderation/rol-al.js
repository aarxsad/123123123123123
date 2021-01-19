module.exports = {

    name: 'role-take',
    aliases: ['roletake', 'takerole'],
    category: 'moderation',

    run: async (app, message, args) => {
        
        let user = message.mentions.users.first();
        let role = message.mentions.roles.first();
        let member = message.guild.member(user);
        
        if (!user) return message.channel.send('Wich Member?')
        if (!role) return message.channel.send('Wich Role?')

        member.roles.remove(role)
        message.channel.send(`${role} role, taked on ${user} .`)
        
    }
}