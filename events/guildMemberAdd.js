const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
const client = new Discord.Client();


  



module.exports = member => {
    let username = member.user.username;
    let guild = member.guild;
    
    const channel = member.guild.channels.find('name', 'logs');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('#4cff00')
    
    .setAuthor("Yeni Üye.!", member.user.avatarURL || member.user.defaultAvatarURL)
    .setTitle(`@${member.user.username} #${member.user.discriminator} Sunucuya katıldı,${member.guild.memberCount} .Üye!.`)
    .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
   
  
    
    .setTimestamp()
    .setFooter("giris-cikis sistemi>>Penia BOT")
    channel.send(embed);
};
