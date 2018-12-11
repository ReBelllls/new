const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// كود اعطا العضو رتبة اول ما يدخل السيرفر

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","ⓟ[The_Pros]"));
    });


// حالة البوت او الوصف

client.on('ready', () => {
     client.user.setActivity("!~[ Syestem Pros ]~!",{type: 'WATCHING'})

});





 client.on('ready', function(){
    client.user.setStatus("idle");
    var ms = 1 ;

});


client.on('message', message => {
    var prefix = "$";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("*bc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });


client.on('message', message => {
var prefix = "$"
    if(message.content.startsWith (prefix  + 'members')) {
        if(!message.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.username, message.author.avatarURL) 
  
      .setDescription(`**:battery: حالة اعضاء السيرفر**
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
          message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });



	
	
	


client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("522093211255046165").join(); 
    });



client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var RaYaN= new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``New Message in private``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("522091882445275148").send({embed:RaYaN});
    }
});


client.on('message',async message => {
  if(message.content.startsWith("$setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '522173102495498240').setName("W");
client.channels.find('id', '522173102495498240').setName("We");
client.channels.find('id', '522173102495498240').setName("Wel");
client.channels.find('id', '522173102495498240').setName("Welc");
client.channels.find('id', '522173102495498240').setName("Welco");
client.channels.find('id', '522173102495498240').setName("Welcom");
client.channels.find('id', '522173102495498240').setName("Welcome");
client.channels.find('id', '522173102495498240').setName("Welcome T");
client.channels.find('id', '522173102495498240').setName("Welcome To");
client.channels.find('id', '522173102495498240').setName("Welcome To P");
client.channels.find('id', '522173102495498240').setName("Welcome To Pr");
client.channels.find('id', '522173102495498240').setName("Welcome To Pro");
client.channels.find('id', '522173102495498240').setName("Welcome To  Pros");
  }, 60000);
});
client.login(process.env.BOT_TOKEN);
