const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const songuncelleme = new Discord.RichEmbed()
      
      
      
      
      .setAuthor("Penia BOT | Son Yapılan Güncellemeler.!", client.user.avatarURL)
      .setColor("#15f153")
	  .addField("Son Güncelleme",'**-Dosyalar tekrar güncellendi.**\n**-VDS`ye aktarım işlemi gerçekleştirildi.**')
      
	  
     

      .setTimestamp('')
      .setURL(client.user.avatarURL)
     
      .setFooter("Penia BOT Sistemleri ",client.user.avatarURL)

        
       message.channel.send("Güncellemeler yükleniyor...").then(message => { setTimeout(function(){ message.edit(songuncelleme); }, 3000); })
                                                                          
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'OA Premium Botuna eklenen yeni özellikler ve güncellemeler hakkında bilgi verir.',
  usage: 'yenilikler'
};
