module.exports = member => {
  let guild = member.guild;
    const channel = member.guild.channels.find('name', 'giriş-çıkış');
    if (!channel) return;
    channel.send(`:outbox_tray: **|${member} sunucudan ayrıldı.**`);
};
