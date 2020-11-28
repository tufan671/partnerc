const DC = require('discord.js');
const ayarlar = require('../ayarlar.json')
let log = ayarlar.log
const xddx = new DC.Client()
let yetkililer = ayarlar.yetkili
exports.run = function(xddx, splashen, args) {
  let kullanıcı = splashen.mentions.members.first()
  if(!kullanıcı) return splashen.channel.send('Bir üye etiketlemelisin.')
if (!splashen.member.roles.has(yetkililer)) return splashen.channel.send('Bu Komutu Kullanamazsın')
  var role = splashen.guild.roles.find(role => role.id === ayarlar.altyapı3); 
  if(!role) return splashen.channel.send('')
  kullanıcı.addRole(role);
   splashen.react('👍')
  let embed2 = new DC.RichEmbed()
  .setTitle(` <a:sar:776453495862722630> • __\` 3. Altyapı Rolü Verildi\`__`)
  .setDescription(`
<a:sar:776453495862722630> • __**\` Yetkili \`**__ ${splashen.author}

<a:sar:776453495862722630> • __**\` Kullanıcı \`**__ ${kullanıcı}`)  
  let embed = new DC.RichEmbed()
  .setTitle(`<a:sar:776453495862722630> • __\`3. Altyapı Rolü Başarıyla Verildi\`__`)
  .setDescription(`
<a:sar:776453495862722630> • __**\` Yetkili \`**__ ${splashen.author}

<a:sar:776453495862722630> • __**\` Kullanıcı \`**__ ${kullanıcı}`)
  
  splashen.channel.send(embed);
    xddx.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['altyapı3-ver'],
  permLevel: 0
};

exports.help = {
  name: 'altyapı3',
  description: '3. Altyapıyı verir.',
  usage: '!altyapı3 @üye'
};
// BOTUN PAYLAŞILMASI KESİNLİKLE YASAKTIR