const {Client, Attachment, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = 'gg!';

bot.on('ready', async () => {
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("Made by Ronak!", ("type: PLAYING"));
});

bot.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.find(ch => ch.name === '╟😃╢ᴡᴇʟᴄᴏᴍᴇ');
	if(!channel) return;
	
	channel.send(`Hey! Welcome to our server! Please read rules and start chatting!`)
});

bot.on('message', message => {
	if(message.content === 'Hi')
	{
		message.channel.send('Hello!')
	}
})

bot.on('message', message => {
  if(message.content === 'Ronak')
  {
    message.channel.send(`My God!🙏`)
  }
})

bot.on('message', message => {
	if(message.content === 'lol')
	{
		message.channel.send('U r funny!')
	}
})

bot.on('message', message => {
	if(message.content === 'gg!pikachu')
	{
		const attachment = new Attachment('https://cdn.discordapp.com/attachments/547949244686794782/566891274754588672/pikachu_hi_pokemon.webp');
		message.channel.send(attachment)
	}
})

bot.on('message', message => {
	if(message.content === 'gg!av')
	{
		message.reply(message.author.avatarURL)
	}
})

bot.on('message', message => {
	if(message.content === 'gg!dialga')
	{
		const attachment = new Attachment('https://cdn.discordapp.com/attachments/547949244686794782/566933965521289226/DialgaVSpalkia_hq.gif')
		message.channel.send(attachment)
	}
})

bot.on('message', message => {
	if(message.content.startsWith('gg!stab')) {
		if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('You do not have permission to use this command!')
		const user = message.mentions.users.first();
		if(user) {
			const member = message.guild.member(user);
			if(member) {
				member.kick('The user was kicked').then(() => {
					message.reply(`Successfully stabbed ${user.tag}! (S/He can still get alive!)`);
				  }).catch(err => {
					  message.reply(`The user was not stabbed! I don't have proper weapon to stab him! or maybe S/HE is a mod or admin!`);
					  console.error(err);
			});
		    } else {
				message.reply('the user is not in this server');
			}
	} else {
		message.reply('Please mention a user to stab');
	}
}
});

bot.on('message', message => {
	if(message.content.startsWith('gg!burn')) {
		if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('You do not have permission to use this command!')
		const user = message.mentions.users.first();
		if(user) {
			const member = message.guild.member(user);
			if(member) {
				member.ban('The user was banned').then(() => {
					message.reply(`Successfully burnt ${user.tag}! S/He can't get alive now!`);
				  }).catch(err => {
					  message.reply(`The user was not burnt! I don't have proper weapon to burn him/her! or maybe S/HE is a mod or admin!`);
					  console.error(err);
			});
		    } else {
				message.reply('the user is not in this server');
			}
	} else {
		message.reply('Please mention a user to burn');
	}
}
});

bot.on('message', message => {
	if(message.content.startsWith('gg!ban')) {
		if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('You do not have permission to use this command!')
		const user = message.mentions.users.first();
		if(user) {
			const member = message.guild.member(user);
			if(member) {
				member.ban('The user was banned').then(() => {
					message.reply(`Successfully banned ${user.tag}`);
				  }).catch(err => {
					  message.reply('The user was not banned! I cant ban a member with Mods or Admins permissions');
					  console.error(err);
			});
		    } else {
				message.reply('the user is not in this server');
			}
	} else {
		message.reply('Please mention a user to ban');
	}
}
});

bot.on('message', message => {
	
	let args = message.content.substring(PREFIX.length).split(" ");
	
	switch(args[0]){	
		case 'user-info':
		const USER = new RichEmbed()
			.setTitle('User Info')
			.addField('User name', message.author.username)
			.addField('Current Server', message.guild.name)
			.addField('Last message', message.member.lastMessage)
			.addField('Joined discord at', message.author.createdAt)
			.addField('Joined server', message.member.joinedAt)
			.addField('User ID', message.member.id)
		        .setFooter('BOT CREATED BY RONAK (still in development)')
			.setThumbnail(message.author.avatarURL)
			.setColor(0x00FF00)
			message.channel.sendEmbed(USER);
		break;
		case 'info':
			if(message.author.bot) return;
			message.channel.send('Please specify what info you want? `1. Bot, 2. Developer, 3. Server, 4. Commands` (type gg!infobot, ep!infodeveloper and so on....')
		break;
		case 'infobot':
			message.channel.send('__***Hi there! I am Giveaway\'s Galaxy bot! I was cretaed for Giveaway\'s Galaxy server! I can manage the server and i can do things that requires `ADMINISTRATIVE PERMISSIONS`! I AM STILL IN DEVELOPMENT!!***__')
		break;
		case 'clear':
		   if(!args[1]) return message.reply('Please specify the number of messages to delete!')
		   if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.reply('You do not have permission to use this command!')
		   message.channel.bulkDelete(args[1])
		   message.channel.send(`deleted __***${args[1]}***__ messages!`).then(() => {
		     message.delete(900)
		   })
		   message.delete()
		break;
		case 'say':
		  let botmessage = args.join(" ");
		  message.delete().catch();
		  message.channel.send(botmessage)
		break;
		case 'give':
		if(!message.member.hasPermission(['MANAGE_ROLES'])) return message.reply('You cant use that command!')
			message.channel.send('<@&553191356932030474>').then(() => {
				message.delete()
			})
			case 'dmu':          
				let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
				if (!dUser) return message.channel.send("Can't find user!")
				if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply("You can't use that command!")
				let dMessage = args.join(" ").slice(22);
		
				dUser.send(`${dMessage}`)
		
				message.author.send(`${message.author} You have sent your message to ${dUser.id}`)
		break;
		case 'slap':
				let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
				let author = message.author;
				const slap_img = [
								'https://discordapp.com/channels/626097765776097310/626288664330371083/630711309503168522',
								'https://discordapp.com/channels/626097765776097310/626288664330371083/630711346370969616',
								'https://discordapp.com/channels/626097765776097310/626288664330371083/630711355942633484',
								'https://discordapp.com/channels/626097765776097310/626288664330371083/630711390419681290'
				]
				const slap_cmd = slap_img[Math.floor(Math.random() * slap_img.length)]	
				if(!args[1]) return message.reply('Please mention a valid user to Slap!')
				const Slap = new RichEmbed()
				.setTitle(`Ouch! ${author} slapped ${user}! It hurts! :sob: `)
				.setImage(slap_cmd)
				message.channel.send(Slap)
		break;		
	                }
});

bot.login(process.env.token);
