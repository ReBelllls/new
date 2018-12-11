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


// كود مسح الشات
client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "مسحح")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

// كود البرودكاست

client.on('message', message => {
if(message.author.bot) return;
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**الأمر بالسيرفرات بس**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ماعندك الصلاحية المطلوبة**' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "";
    let request = `تم ارسال من  ${message.author.username}`;
    if (!args) return message.reply('**ترسل برودكاست فاضي؟**');message.channel.send(`**متأكد؟** \` ${args}\``).then(msg => {
    msg.react('?')
    .then(() => msg.react('?'))
    .then(() =>msg.react('?'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**? | تم ... ارسال البرودكاست  ${message.guild.members.size} عضو**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('#00ff47')
       .setTitle('**:incoming_envelope:رسالة:incoming_envelope:')
       .addField('**:diamond_shape_with_a_dot_inside:السيرفر:diamond_shape_with_a_dot_inside:**', message.guild.name)
       .addField('**:black_joker:المرسل:black_joker:**', message.author.username)
       .addField(':page_facing_up:الرسالة:page_facing_up:', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**كنسل يا مدير**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
let cooldown = new Set();
let cdseconds = 5;
if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
  return  message.reply("الصبر يا أخي")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
setTimeout(() => {
  cooldown.delete(message.author.id)
}, cdseconds * 1000)
    });
	
	// كود الايدي
	
	var moment = require("moment");
client.on('message', message => {
if(message.author.bot) return;
  var prefix = '$';
  
  if (message.content.startsWith(prefix + "id")) {
      message.react("??") 
  if(!message.channel.guild) return message.reply(`**__بس بالسيرفرات__**`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('**تاريخ دخولك الدسكورد**:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('**تاريخ دخولك السيرفر**:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("**اسمك**", `${message.author.username}`)
.addField('**تاقك**', message.author.discriminator)
.addField('**ايديك**', message.author.id)
.addField('**سـيـرفـر**', `${member.guild.name}`,true)
.setFooter("?معلوماتك?")  
    message.channel.sendEmbed(id);
})
}       
});


// معلومات السيرفر

client.on('message', function(msg) {
	var prefix = "$"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('#00ff47')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**معلومات السيرفر**`)
      .addField('??**__دولة السيرفر__**',`?** __${msg.guild.region}__ **?`,true)
      .addField(':star:** __عدد الرتب__**',`?** __${msg.guild.roles.size}__ **?`,true)
      .addField(':black_heart:**__ عدد الاعضاء__**',`?** __${msg.guild.memberCount}__ **?`,true)
      .addField(':green_heart:**__ عدد الاعضاء الاونلاين__**',`?** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **?`,true)
      .addField('??**__ الرومات الكتابية__**',`?** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ?`,true)
      .addField('??**__ رومات الصوت__**',`?** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **?`,true)
      .addField('??**__ الأونـر__**',`**?${msg.guild.owner}?**`,true)
      .addField('??**__ ايدي السيرفر__**',`**?${msg.guild.id}?**`,true)
      .addField(':calendar_spiral:**__ صنع السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  // معلومات الروم
  
  client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("معلومات الروم")
      .setColor("RANDOM")
      .setDescription(`ايدي الروم <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("صنع في", `${channel.createdAt}`)
      .addField("نوع الروم", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });


client.on('message', message => {
	var prefix = "$"
if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'report')) return message.channel.send('**نرجوا عمل روم باسم الابلاغات كي توصل الابلاغات له**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:منشن:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:وش سوى؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`بلاغ من قبل: ${message.author.tag}`)
    .addField('**المجرم:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**البلاغ:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report').sendEmbed(abod)
    message.reply('**:sunglasses:بنأخذ حقك:sunglasses:**').then(msg => msg.delete(3000));
    }
});


client.on("message", message => {
if(message.author.bot) return;
      if (message.content === "$ping") {
      message.react("??") 
      const embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField('**سرعة استجابة البوت:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }









const bannedwords = [
    "كل زق",
    "كسمك",
    "كلب",
    "يا شرموط",
    "كل زق و اسكت",
    "بوت زق"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});         


client.on('message', message => {
var prefix = "$"
    if (message.content.startsWith("avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

        
client.on('message', message => {
var prefix = "$"
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('الرجأء ضع سبب التذكرة.');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`لقد تم انشاء تذكرتك. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('السبب', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("هل انت متأكد انك تريد اغلان التذكرة ؟ لديك 20 ثانية لكي تقرر.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'yes');
                        message.channel.awaitMessages(response => response.content === prefix + 'yes', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});







        
          
client.on('message', message => { 

if (message.author.bot) return;

var prefix = "$";

if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];

command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "mute") {

if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply(":no_entry: Error | لا يمكنني ايجاد 'Muted' رتبة").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('**? استخدم:** !mute \`\`@Name\`\` reason');

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).addRole(muteRole);

const muteembed = new Discord.RichEmbed()

.setColor("RANDOM")

.setAuthor(`Muted!`, user.displayAvatarURL)

.setThumbnail(user.displayAvatarURL)

.addField("**:busts_in_silhouette: المستخدم**", '**[ ' + `${user.tag}` + ' ]**',true)

.addField("**:hammer: تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)

.addField("**:book: السبب**", '**[ ' + `${reason}` + ' ]**',true)

.addField("User", user, true) 

  .setTitle('**[MUTED]**')

		.setThumbnail(message.author.avatarURL)

		.setColor('GREEN')

		.setDescription(`**\n:zipper_mouth: Successfully \`\`MUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\``)

		.setTimestamp()

		.setFooter(user.tag, user.avatarURL)

client.channels.find('name', "log").send({embed : muteembed});

}


if (command == "unmute") {

if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');

        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply(":no_entry: Error | I Cant find 'Muted' Role").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('**? استخدم:** !unmute \`\`@Name\`\`');

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).removeRole(muteRole);

const unmuteembed = new Discord.RichEmbed()

.setTitle('**[UNMUTED]**')

			.setThumbnail(message.author.avatarURL)

			.setColor('GREEN')

			.setDescription(`**\n:zipper_mouth: Successfully \`\`UNMUTED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)

			.setTimestamp()

			.setFooter(user.tag, user.avatarURL)

client.channels.find('name', "log").send({embed : unmuteembed});

}

});



});

 
client.on('message', message => {
	       var prefix = "$";
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات??',`[${client.guilds.size}]  `)
.addField(' الاعضاء?? ',` [${client.users.size}] `)
.addField('الرومات?? ',`[${client.channels.size}]`) 
.addField(' البنق?? ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`! 1   reeebel. `)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});

var prefix = "$" 
client.on('message', async msg => {
    if (msg.author.bot) return undefined;
   
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
   
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
           
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
           
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
 
                    .setFooter("reeebel.")
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                   
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 15000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `leave`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `queue`) {
       
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
       
        const embedqu = new Discord.RichEmbed()
 
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `stop`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');
    }
 
    return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
   

    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}
 
const adminprefix = "$$";
const devs = ['521704180533035018'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
 
});
client.on("message", message => {
    if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}stop ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}leave⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل
 `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
 
 
 
client.login(process.env.BOT_TOKEN);
