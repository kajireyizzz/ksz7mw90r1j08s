const Discord = require("discord.js");
const moment = require("moment");



exports.run = (client, message) => {
  
message.channel.send("İstatistikler hesaplanıyor...")
.then(nmsg => nmsg.edit(new Discord.RichEmbed().addField("❯  İşletim sistemi:","Linux").addField('❯  Sürümler:','Discord.JS:  v'+Discord.version+'\nBot:  v0.1.1').addField('❯  Bellek kullaımı:',(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB').addField('❯  Genel istatistikler','•Sunucu sayısı: '+ client.guilds.size.toLocaleString()+'\n•Kişi sayısı:  '+ client.users.size+'\n•Kanal sayısı: '+client.channels.size.toLocaleString()+'\n•Ping:  '+client.ping).setColor('RANDOM').setAuthor('İstatistikler',client.user.avatarURL).setThumbnail(client.user.avatarURL).setFooter('Penia Bot Sistemleri|@Penia#9753 tarafından geliştirildi. ',client.user.avatarURL).setTimestamp())
)};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
