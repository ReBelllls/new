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


var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
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
client.login(process.env.BOT_TOKEN);
