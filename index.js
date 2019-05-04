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
	if(mesg === 'ep!av')
	{
		let avmen = message.mentions.user.first() || message.author;
		avmen(message.author.avatarURL)
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
	
	
	let args = message.content.substring('PREFIX.length').split(" ");
	
	switch(args[0]){	
		case 'user-info':
		const USER = new RichEmbed()
			.setTitle('User Info')
			.addField('User name', message.author.username)
			.addField('Current Server', message.guild.name)
			.addField('Status', message.author.status)
			.addField('Last message', message.author.lastMessage)
			.addField('Joined server', message.author.joinedAt)
			.addField('User ID', message.author.id)
		        .setFooter('PLEASE HELP US TO GAIN MORE MEMBERS!!')
			.setThumbnail(message.author.avatarURL)
			.setColor(0x00FF00)
			message.channel.sendEmbed(USER);
		break;
		case 'info':
			if(message.author.bot) return;
			message.channel.send('Please specify what info you want? `1. Bot, 2. Developer, 3. Server, 4. Commands` (type ;;infobot, ;;infodeveloper and so on....')
		break;
		case 'infobot':
			message.channel.send('__***Hi there! I am Epic Poke bot! I was cretaed for Epic poke server! I can manage the server and i can do things that requires `ADMINISTRATIVE PERMISSIONS`! I AM STILL IN DEVELOPMENT!!***__')
		break;				
	                }
});

bot.login(process.env.token);
