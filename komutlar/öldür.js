const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
   
      let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kim için bu komutu İstediğini Yazmalısın `Örn Kullanım: p!öldür @PeniaBOT`').catch(console.error);
 
    const oldur=new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username}`,`${user}`+ " kişisini öldürdü.!")
    .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400337232625401856/animation_2.gif')
    .setFooter("OA Premium")
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
