const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
   
    var user;
    
        let author = message.author;
        if(member) {
             user = member;
        } else {
             user = author;
        }{
        } member = message.guild.member(user);

    const oldur=new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username}`,`${user}`+ " kişisini öldürdü.!")
    .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400337232625401856/animation_2.gif')
    .setFooter("Penia BOT")
    return message.channel.send(oldur);



};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'Belirtilen kişiyi öldürür.',
  usage: 'öldür <kişi>'
};
