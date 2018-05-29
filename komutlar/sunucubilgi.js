const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params,guild) => {

  const sunucubilgi = new Discord.RichEmbed()
        
    .setColor('#f1f442')
    .setThumbnail(message.guild.iconURL)
    .setTitle(":notepad_spiral: Sunucu Bilgieri")
    .addField(":id: Sunucu Adı",message.guild.name)
   .addField(":bust_in_silhouette: Sunucu Sahibi",message.guild.owner)
    .addField(":link: Kanal Sayısı",  message.guild.channels.size)
	
    .addField(":busts_in_silhouette: Kullanıcı Sayısı", message.guild.memberCount)
    .addField(":writing_hand: Rol Sayısı", message.guild.roles.size )
    .addField(":date: Açıldığı Tarih",  message.guild.createdAt)
    .addField(":timer: Afk Süresi",message.guild.afkTimeout)
	.addField(":wrench: Tanımlı Afk Kanalı",message.guild.afkChannel)
    .addField(":mailbox_with_mail: Oluşturulduğu Bölge",message.guild.region)
             return message.channel.sendEmbed(sunucubilgi);

        
       
      
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'OA ON AIR Sunucusu Hakkında Bilgiler Verir.',
  usage: 'sunucubilgi'
};
