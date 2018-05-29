const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const songuncelleme = new Discord.RichEmbed()
      
       const member = client.users.find("id", "327050092957794316");
      const botbilgi = new Discord.RichEmbed()
      
      
      
      .setThumbnail(client.user.avatarURL)
      
      .setAuthor("OA Premium | Bot Bilgi", client.user.avatarURL)
      .setColor("#15f153")
      .addField(">Bot Adı",client.user.username,true)
      .addField(">Bot Geliştirici",'Penia',true)
      .addField(">Bot Prefix",'p!',true)
	  .addField(">Ping",client.ping +'**ms**',true)
      .addField("Destek Sunucusu", "https://discord.gg/Mpkn4Sj")
      
      .addField(">Kullanılan Kitaplık Türü",'Discord.js',true)
      .addField(">Oluşturulma Tarihi",client.user.createdAt,true)
      

      .setURL(client.user.avatarURL)
     
      .setFooter("Penia BOT |2018", client.user.avatarURL)

        
       
      return message.channel.sendEmbed(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'OA Premium Botu hakkında sizlere bilgi verir.',
  usage: 'botbilgi'
};
