module.exports = {

    name: 'role-give',
    aliases: ['rolegive', 'giverole'],
    category: 'moderation',

    run: async (app, message, args) => {
        
        let user = message.mentions.users.first();
        let role = message.mentions.roles.first();
        let member = message.guild.member(user);
        
        if (!user) return message.channel.send('Whic Member?')
        if (!role) return message.channel.send('Rolü belirt.')

        member.roles.add(role)
        message.channel.send(`${role} role, give on ${user} .`)
        
    }
}