const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`öner` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(0).join(' ');
    if(ozelmesajuyari.channel.send) return message.channel.send("işlem başarılı.")
  //let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'öneri-komut');
 if  (reason.length<1) return message.reply("Önermem için fikir yazmalısın.! `p!öner + fikirin`")

	
   
 
  if (!modlog) return message.reply('`öneri-komut` kanalını bulamıyorum.');

     
  //if (reason.length < 1) return message.reply('Bildirme sebebini yazmalısın.');
 
  //if (message.mentions.users.size < 1) return message.reply('Kimi bildireceğimi yazmalısın. `oa+yardım bildir`').catch(console.error);
  

 
  
  
 
 
  
    
  
 
  
 
  const embed = new Discord.RichEmbed()
    .setColor('#9242f4')
    .setTimestamp()
	.setThumbnail(message.guild.iconURL)
    .setAuthor("Yeni Öneri Geldi.!")
    .addField('Öneride Bulunan:', `${message.author.username}`)
    .addField('Önerisi:', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed)

  let (embed)= guild.channels.get;
  //if(embed) return message.reply("Önerin bot yapımcısı Penia tarafından alındı.!(Geri Dönüş Yapacaktır.)");
  
  

 
   
	

 
    
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öner',
  description: 'Bot yapımcısına öneride bulunursunuz.',
  usage: 'öner <bla bla>'
};
