const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let member = message.mentions.users.first();
    
    var user;
  
        let author = message.author;
        if(member) {
             user = member;
        } else {
             user = author;
        }{
        } member = message.guild.member(user);
 
    
    const saril=new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username}`,`${user}`+ " adlı kullanıcıya sarıldı!")
    .setImage('https://media3.giphy.com/media/10BcGXjbHOctZC/giphy.gif')
    .setFooter("OA Premium")
    return message.channel.send(saril);



};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'Etiketlenen kişiye sarılır.',
  usage: 'sarıl <kişi>'
};
