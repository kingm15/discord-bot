const Discord = require('discord.js');

exports.run = (client, message, params) => {
 if(!params[0]) {

  message.delete();
  message.channel.send("https://discord.gg/7WjkHMb");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkver', 'linkyaz'],
  permLevel: 0
};

exports.help = {
  name: 'link',
  description: 'Discord davet linki verir.',
  usage: 'link'
};
