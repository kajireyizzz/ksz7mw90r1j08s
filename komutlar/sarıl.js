const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let member = message.mentions.users.first();
    
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kime Sarılmak İstediğini Yazmalısın').catch(console.error);
 
    
    const saril=new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username}`,`${user}`+ " adlı kullanıcıya sarıldı!")
    .setImage('https://media3.giphy.com/media/10BcGXjbHOctZC/giphy.gif')
    .setFooter("Penia BOT")
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
