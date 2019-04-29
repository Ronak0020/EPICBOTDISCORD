const {Client, Attachment, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = ";";

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
	if(message.content === ';pikachu')
	{
		message.channel.send("Pika Pika!", {
			url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpokemon%2Fimages%2F4%2F49%2FAsh_Pikachu.png%2Frevision%2Flatest%3Fcb%3D20170718053548&imgrefurl=https%3A%2F%2Fpokemon.fandom.com%2Fwiki%2FAsh%2527s_Pikachu&docid=BQuphKRsHukXCM&tbnid=CWEU_ZRsw0xLvM%3A&vet=10ahUKEwi59ZH8hvXhAhUJdCsKHQS3DJQQMwhuKAkwCQ..i&w=1920&h=1080&safe=active&bih=657&biw=1366&q=pikachu&ved=0ahUKEwi59ZH8hvXhAhUJdCsKHQS3DJQQMwhuKAkwCQ&iact=mrc&uact=8"
		});
	}
})

bot.on('message', message => {
	if(message.content === ';av')
	{
		message.reply(message.author.avatarURL)
	}
})

bot.on('message', message => {
	if(message.content === ';dialga')
	{
		message.channel.send('https://cdn.discordapp.com/attachments/547949244686794782/566933965521289226/DialgaVSpalkia_hq.gif')
	}
})

bot.on('message', message => {
	if(message.content.startsWith(';kick')) {
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
		case ';user-info':
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
		case ';info':
			if(message.author.bot) return;
			message.channel.send('Please specify what info you want? `1. Bot, 2. Developer, 3. Server, 4. Commands` (type ;;infobot, ;;infodeveloper and so on....')
		break;
		case ';infobot':
			message.channel.send('__***Hi there! I am Epic Poke bot! I was cretaed for Epic poke server! I can manage the server and i can do things that requires `ADMINISTRATIVE PERMISSIONS`! I AM STILL IN DEVELOPMENT!!***__')
		break;				
	                }
});

bot.login(process.env.token);
