const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let log = ayarlar.log
const client = new Discord.Client()
let yetkililer = ayarlar.yetkili
exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first()
  if(!kullanıcı) return message.channel.send('Bir üye etiketlemelisin.')
if (!message.member.roles.has(yetkililer)) return message.channel.send('Bu Komutu Kullanamazsın')
  var role = message.guild.roles.find(role => role.id === ayarlar.altyapı1); 
  if(!role) return message.channel.send('')
  kullanıcı.addRole(role);
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:kalp:722845829445976297>  • __\` Partner rolü verildi\`__`)
  .setDescription(`
<a:kalp:722845829445976297>  • __**\` Yetkili \`**__ ${message.author}

<a:kalp:722845829445976297>  • __**\` Kullanıcı \`**__ ${kullanıcı}`)  
  let embed = new Discord.RichEmbed()
  .setTitle(`<a:kalp:722845829445976297> • __\`Partner rolü verildi\`__`)
  .setDescription(`
<a:kalp:722845829445976297> • __**\` Yetkili \`**__ ${message.author}

<a:kalp:722845829445976297> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  message.channel.send(embed);
    client.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['altyapı1-ver'],
  permLevel: 0
};

exports.help = {
  name: 'partner',
  description: '1. Altyapıyı verir.',
  usage: '!altyapı1 @üye'
};
// BOTUN PAYLAŞILMASI KESİNLİKLE YASAKTIR