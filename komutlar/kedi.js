const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
   message.channel.send("Bu komut devredışı bırakıldı.")
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kedi',
    description: 'Çay içersiniz.',
    usage: 'çayiç'
};
