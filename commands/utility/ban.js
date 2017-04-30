const Discord = require('discord.js');
exports.run = (client, msg, [user]) => {
    if (msg.author.highestRole.id == "308258523223949313" || "308258939278065665") { //admin: 308258523223949313 - mod: 308258939278065665
        let userToBan = msg.mentions.users.first();
        //we need to get a *GuildMember* object, mentions are only users. Then, we ban!
        msg.guild.member(userToBan).ban()
            .then(msg.reply(`${userToBan} banned`));
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
    name: "ban",
    description: "bans member",
    usage: "<mention:user>",
    usageDelim: "",
    extendedHelp: "",
};
