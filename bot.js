const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// كود اعطا العضو رتبة اول ما يدخل السيرفر

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","[The_Pros]"));
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





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})






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
    client.channels.get("512771673683001364").join(); 
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
    client.channels.get("522197612787662848").send({embed:RaYaN});
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







client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '😎♣❨☞․welcome․☜❩♣');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("pros ")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });




const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", "😎♣❨☞․welcome․☜❩♣");
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});
 



client.on('message', message => {
    if (message.content.startsWith("$تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });

 





client.on('message', async rokz => {
    var prefix = "$";
    if(rokz.content.startsWith(prefix + "apply")) {
 
      let lang = '';
 
      let time = '';
 
      let expe = '';
 
      let fillter = m => m.author.id === rokz.author.id
 
      await rokz.channel.send("ما هوا اسمك ؟").then(e => {
 
     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
     .then(co => {
 
       lang = co.first().content;
 
        co.first().delete();
 
 
       e.edit(`كم عمرك ؟
[${lang}]`)
 
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
       .then(col => {
 
         time = col.first().content;
 
          col.first().delete();
 
 
            e.edit(`ماذا سوف تفعل للسيرفر  ؟
[${time}]
[${lang}]`)
 
            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
            .then(coll => {
 
              expe = coll.first().content;
 
               coll.first().delete();
 
 
               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)
 
              let rokzz = rokz.guild.channels.find("name","التقديمات")
 
              setTimeout(() => {
 
                e.edit("تم التقديم")
 
              }, 3000)
 
              rokzz.send(`
» الاسم : **${lang}**
» العمر : **${time}**
» ماذا سوف تفعل : **${expe}**
تم التقديم بواسطة: ${rokz.author}
`).then(rokzzz => {
 
                  rokzzz.react("✅")
 
                  rokzzz.react("❌")
 
                })
 
            })
 
       })
 
     })
 
   })
 
    }
 
  })


client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
 



 client.on('message', message => {
          if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'مسح')) {
       if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
       let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
       let request = `Requested By ${message.author.username}`;
       message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
       msg.react('✅')
       .then(() => msg.react('❌'))
       .then(() =>msg.react('✅'))

       let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
       let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
       reaction1.on("collect", r => {
       message.channel.send(`Chat will delete`).then(m => m.delete(5000));
       var msg;
               msg = parseInt();

             message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
             message.channel.sendMessage("", {embed: {
               title: "`` Chat Deleted ``",
               color: 0x06DF00,
               footer: {

               }
             }}).then(msg => {msg.delete(3000)});

       })
       reaction2.on("collect", r => {
       message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
       msg.delete();
       })
       })
       }
       });


     client.on('message', message => {
         var prefix = "$"
       if (message.author.x5bz) return;
       if (!message.content.startsWith(prefix)) return;

       let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);

       let args = message.content.split(" ").slice(1);

       if (command == "kick") {
                    if(!message.channel.guild) return message.reply('** This command only for servers**');

       if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
       if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
       let user = message.mentions.users.first();
       let reason = message.content.split(" ").slice(2).join(" ");
       if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
       if(!reason) return message.reply ("**اكتب سبب الطرد**");
       if (!message.guild.member(user)
       .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

       message.guild.member(user).kick();

       const kickembed = new Discord.RichEmbed()
       .setAuthor(`KICKED!`, user.displayAvatarURL)
       .setColor("RANDOM")
       .setTimestamp()
       .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
       .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
       .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
       message.channel.send({
         embed : kickembed
       })
     }
     });




     client.on('message', message => {
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
       /*let b5bzlog = client.channels.find("name", "5bz-log");
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
      if (message.content === "$Server") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(message.author.avatarURL)
     .setTitle(`info about ${message.guild.name}`)
     .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
     .addField('Server ID 🆔',`➥` + message.guild.id, true)
     .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
     .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
     .addField("Server Region📡",`➥ ` + message.guild.region, true)
     .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
     .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
     .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
     .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
     .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
     .addField(`info about ${message.author.username}`, `➥ `)
     .addField("Name",`➥ ` + `${message.author.username}`, true)
     .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
     .addField("ID 🆔",`➥ ` + message.author.id, true)
     .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
     .setTimestamp()
     .setFooter(message.author.tag, message.author.avatarURL)


     message.channel.sendEmbed(embed);
       }
   });


client.on('message', message => {
       var prefix = "$"
       if (message.content === prefix + "date") {
           var currentTime = new Date(),
               السنة = currentTime.getFullYear(),
               الشهر = currentTime.getMonth() + 1,
               اليوم = currentTime.getDate();
           message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
       }
   });



client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمه الله وبركاته');
  }
});


client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم منور يا عسل');
  }
});


client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('اهلا بك منور يا عسل ');
  }
});


client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت لاططول عالينا يا عسل');
  }
});


















client.on("message", message => {
 if (message.content === "$help") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-:rocket: سرعه اتصال ممتازه
-:sunglasses: سهل الاستخدام
-:warning: صيانه كل يوم
-:dollar: مجاني بل كامل
-:books:البوت عربي و سيتم اضافه اللغه النكليزية


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

:gem:『اوامر عامة』:gem:
:gem:$server 『معلومات عن السيرفر』
:gem:$date 『لمعرفه التاريخ』
:gem:$ping 『لمعرفه سرعه البوت』
:gem:$members 『معلومات عن الاعضاء』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

:crown:『اوامر ادارية』:crown:
:crown:$ban 『لتعطي شخص باند』
:crown:$kick 『لتعطي شخص كيك』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

:video_game:『العاب』:video_game:
:video_game:$تهكير
:video_game:قريبا

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:flower_playing_cards:『اوامر الصور』:flower_playing_cards:

:flower_playing_cards:قريبا

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

:dolls:『انواع الترحيب』:dolls:
:dolls: ترحيب 1 / ترحيب 2
:dolls: ترحيب 3 / ترحيب 4
:dolls: ترحيب 5 / ترحيب 6
:dolls: ترحيب 7 / ترحيب 8
:dolls: ترحيب 9 / ترحيب 10


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

ملاحظه للتقديم علي رتبه اكتب 
$apply




`)


message.author.sendEmbed(embed)

}
});



client.login(process.env.BOT_TOKEN);
