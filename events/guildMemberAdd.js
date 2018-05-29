module.exports = member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  channel.send(`:inbox_tray: **|${member} sunucuya katıldı.**`);
};
