const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {
const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Davet linkini gönderdim özel mesajlarını kontrol et.","**Bi ara bakarsın. :postbox:**");
    message.channel.sendEmbed(ozelmesajkontrol)
    
   const davet = new Discord.RichEmbed()
		
        
    .setColor('#5F9EA0')
    .setThumbnail(client.user.avatarURL)
    .setAuthor("Penia Botu sunucuna davet et.")
	
	.addField("BOT Davet Linki","https://discordapp.com/oauth2/authorize?client_id=446994232817745921&scope=bot&permissions=871375934")
   .setFooter("Bizi tercih ettiğiniz için teşekkür ederiz.")
    
        
  
  
          
         
        return message.author.sendEmbed(davet)

  
    
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'OA ON AIR Suncusuna arkadaşlarınızı davet etmeniz için link verir.',
  usage: 'davet'
};
