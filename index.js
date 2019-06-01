const {Client, Attachment, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = 'ep!';

bot.on('ready', async () => {
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("Made by Ronak!", ("type: PLAYING"));
});

bot.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if(!channel) return;
	
	channel.send(`Hey! Welcome to our server ${member}! Please read rules and start chatting!`)
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
    message.channel.send('My God!🙏')
  }
})

bot.on('message', message => {
	if(message.content === 'lol')
	{
		message.reply('U r funny!')
	}
})

bot.on('message', message => {
	if(message.content === 'ep!pikachu')
	{
		const attachment = new Attachment('https://cdn.discordapp.com/attachments/547949244686794782/566891274754588672/pikachu_hi_pokemon.webp');
		message.channel.send(attachment)
	}
})

bot.on('message', message => {
	if(message.content === 'ep!av')
	{
		message.reply(message.author.avatarURL)
	}
})

bot.on('message', message => {
	if(message.content === 'ep!dialga')
	{
		const attachment = new Attachment('https://cdn.discordapp.com/attachments/547949244686794782/566933965521289226/DialgaVSpalkia_hq.gif')
		message.channel.send(attachment)
	}
})

bot.on('message', message => {
	if(message.content.startsWith('ep!kick')) {
		if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('You do not have permission to use this command!')
		const user = message.mentions.users.first();
		if(user) {
			const member = message.guild.member(user);
			if(member) {
				member.kick('The user was kicked').then(() => {
					message.reply(`Successfully kicked ${user.tag}`);
				  }).catch(err => {
					  message.reply('The user was not kicked! I cant kick a member with Mods or Admins permissions');
					  console.error(err);
			});
		    } else {
				message.reply('the user is not in this server');
			}
	} else {
		message.reply('Please mention a user to kick');
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
			message.channel.send('Please specify what info you want? `1. Bot, 2. Developer, 3. Server, 4. Commands` (type ep!infobot, ep!infodeveloper and so on....')
		break;
		case 'infobot':
			message.channel.send('__***Hi there! I am Epic Poke bot! I was cretaed for Epic poke server! I can manage the server and i can do things that requires `ADMINISTRATIVE PERMISSIONS`! I AM STILL IN DEVELOPMENT!!***__')
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
				if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply("You can't you that command!")
				let dMessage = args.join(" ").slice(22);
				if(dMessage.length < 1) return message.reply('You must supply a message!')
		
				dUser.send(`${dUser} A moderator from WP Coding Club sent you: ${dMessage}`)
		
				message.author.send(`${message.author} You have sent your message to ${dUser}`)
		break;
		case 'role':
			if(!message.member.hasPermission(['MANAGE_ROLES'])) return;
			var role = message.guild.roles.find(role => role.name === "test");
      message.mentions.user.addRole(role);
	                }
});

bot.login(process.env.token);
