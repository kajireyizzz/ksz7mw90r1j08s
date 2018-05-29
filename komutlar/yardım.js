const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    const yardımlistesi=new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(":mag_right: Komut Listesi","**Penia BOT Sizlere yardımcı olmak amacıyla oluşturulmuş bot sistemidir.**")
    .addField(":slot_machine: Eğlence Komutları","**espri**:Soğuk espriler yapar.\n**çayiç**:Size çay ısmarlar.!\n**tkm**:Bot ile taş-kağıt-makas oynarsınız.\n**yaz**:Bota istediğiniz herhangi şeyi yazdırır.!\n**savaş**:Kendinizi ve 1 kişiyi etiketleyerek botun sizi savaştırmasını sağlayabilirsiniz.\n**sarıl:Belirlenen kullanıcıya sarılır.**\n**slot**:Slot makinesiyle oynarsınız.\n**öldür**:Belirlenen kullanıcıyı öldürür.\n**yazı-tura**:Yazı-tura atarsınız.!\n**özlü**:Bot size rastgele özlü sözler söyler.")



  .addField(":book: Kullanıcı Komutları","**avatar**:Avatarınızı görüntüler.\n**bildir**:Rahatsız olduğunuz kişiyi adminlere bildirmenize yarar.\n**botbilgi**:Bot hakkında bilgi alırsınız.!\n**emojiler**:Sunucudaki mevcut emojileri görüntüler.\n**davet**:Botu davet etmeniz için size bir link verir.\n**istatistik**:Bot istatistiklerini gösterir.\n**profil**:Etiketlenen kişinin yada sizin bilgilerinizi gösterir.\n**sunucubilgi**:Sunucu hakkında bilgi verir.\n**yenilikler**:Bota gelen yenilik ve güncellemeleri gösterir.\n**tavsiye**:Bota eklenmesini istediğiniz tavsiyelerinizi yapımcıya gönderir.\n**öner**:Sunucuya eklenmesini istediğiniz tavsiye ve önerilerinizi sunucu yöneticilere iletir.\n**ping**:Botun anlık pingini gösterir.\n**reklamtaraması**:Oynuyor kısmında reklam taraması yapar.\n**roller**:Sunucudaki mevcut rolleri görüntüler.\n**yardım**:Botun komutlarını gösterir.")
  .addField(":hammer_pick: Admin ve Mod Komutları","**anket**:Sunucu içerisinde anket yapar.\n**ban**:Belirlenen kişi sunucudan yasaklar.!\n**dm**:Bot ile istenilen kullanıcıya bot tarafından mesaj gönderebilirsiniz.\n**kanalaç**:Yeni kanal açar.\n**kurulum**:Bot için gerekli kanalları kurar.\n**temizle**:Belirtilen miktarda mesaj siler.")
   .addField(":closed_lock_with_key: Kurucu(Penia)","**baslat**:Adı girilen komutu yeniden başlatır.\n**sunucular**:Botun bulunduğu sunucuları mesaj atar.\n**ayarla**:Botun oyununu ayarlar.\n**reboot**:Botu yeniden başlatır.")
    message.author.send(yardımlistesi);
    //message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Özel mesajlarını kontrol et.!",'Komutları özel mesaj olarak yolladım. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];




  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
