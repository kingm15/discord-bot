const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var command = args[0];
	if(command.size <= 1){
      return message.reply('Susturmak istediğiniz kullanıcı adını yazınız.');
    }

    let muteMember = message.guild.member(message.mentions.users.first());

    if(!muteMember){
      return message.reply('Geçersiz Kullanıcı Adı');
    }

    if(!message.guild.member(bot.user).hasPermission('MUTE_MEMBERS')){
      return message.reply('Sizin kanalda mutelemeye yetkiniz yok!');
    }

    muteMember.setMute(true).then(member => {
      return message.reply(`${member.user.username} mutelendi`);
    }).catch(e => {
      console.log(e);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Kullanıcıyı susturur.',
  usage: 'mute [Kullanıcı Adı]'
};
