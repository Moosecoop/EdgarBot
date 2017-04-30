const Discord = require('discord.js');
exports.run = (client, msg, [user]) => {
    if (msg.author.hasPermission("KICK_MEMBERS")) { //admin: 308258523223949313 - mod: 308258939278065665
        let userToKick = msg.mentions.users.first();
        //we need to get a *GuildMember* object, mentions are only users. Then, we kick!
        msg.guild.member(userToKick).kick()
            .then(msg.reply(`${userToKick} kicked`));
    }

};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "kick",
    description: "kicks member",
    usage: "<mention:user>",
    usageDelim: "",
    extendedHelp: "",
};
