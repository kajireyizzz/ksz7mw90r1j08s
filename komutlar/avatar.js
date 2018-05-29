const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kimin avatarını istediğini Yazmalısın `Örnek kullanım: p!avatar @PeniaBOT`').catch(console.error);
    const avatar=new Discord.RichEmbed()
    
    .setAuthor( message.author.username + "  Adlı kişinin avatarı görüntüleniyor..")
    .setImage(message.author.avatarURL)
    .setFooter("Penia BOT Avatar komutu.")
    return message.channel.send(avatar);
   
 
    
};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı görüntüler.',
  usage: 'avatar'
};
