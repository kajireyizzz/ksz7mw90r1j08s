const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimin Kullanıcı Bilgisini İstediğini Yazmalısın').catch(console.error);
  let mesaj = args.slice(0).join(' ');
    if (message.channel.type !== "group") {
        var userDurum = user.presence.status;
        var userDurm = (userDurum == "online" ? (0x00AE86) : (userDurum == "offline" ? (0x808080) : (userDurum == "idle" ? (0xFFFF00) : (userDurum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var userdurm = (userDurum == "online" ? ("Çevrimiçi") : (userDurum == "offline" ? ("Çevrimdışı") : (userDurum == "idle" ? ("Boşta") : (userDurum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField('Ad:', user.username + '#' + user.discriminator)
      .addField('ID:', user.id)
      .addField('Kayıt tarihi:', user.createdAt)
      
      .setThumbnail(`${user.displayAvatarURL}`)
      .addField('Durum:', userdurm)
      .addField('Şu an oynadığı oyun:', user.presence.game ? user.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', user.bot ? '\n Evet' : 'Hayır')
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil', 'p'],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: 'Etiketlene kişinin hakkında bilgi verir.',
  usage: 'profil <kullanıcı>'
};
