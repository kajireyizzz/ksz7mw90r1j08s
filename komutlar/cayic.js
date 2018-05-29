const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const embed = new Discord.RichEmbed()

    .setAuthor(message.author.username, message.author.avatarURL)

    .addField(message.author.username,"***Sıcak Çayını Yudumluyor ***")

    .setImage("https://geekyapar.com/wp-content/uploads/2017/01/%C3%87ay-Tarihi-5-1.jpg")

        .setColor(0x97ffff)

    return message.channel.sendEmbed(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çayiç',
    description: 'Çay içersiniz.',
    usage: 'çayiç'
};
