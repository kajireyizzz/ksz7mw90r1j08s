const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["Taş", "Kağıt", "Makas"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Sonuç___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tkm',
  description: '',
  usage: 'rb!tkm'
};
