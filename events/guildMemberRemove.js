module.exports = member => {
  let guild = member.guild;
  //member.send('güle güle.');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
