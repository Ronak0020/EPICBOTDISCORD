const {Client, Attachment} = require('discord.js');
const bot = new Client();

const PREFIX = ';';

bot.on('ready', async () => {
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("Made by Ronak!", ("type: PLAYING"));
});

bot.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.find(channel => channel.name === 'welcome');
	if(!channel) return;
	
	message.channel.send(`Hey! Welcome to our server ${member}! Please read rules and start chatting!`)
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
		message.channel.send('https://cdn.discordapp.com/attachments/547949244686794782/566891274754588672/pikachu_hi_pokemon.webp')
	}
})

bot.on('message', message => {
	if(message.content === ';dialga')
	{
		message.channel.send('https://cdn.discordapp.com/attachments/547949244686794782/566933965521289226/DialgaVSpalkia_hq.gif')
	}
})


bot.on('message', message => {
	
	let args = message.content.substring(PREFIX.length).split(" ");
	
	switch(args[0]){
		case 'user-info':
		const USER = new Discord.RichEmbed()
			.setTitle('User Info')
			.addField('User name', message.author.username)
		        .addField('Current Server', message.guild.name)
		        .setFooter('PLEASE HELP US TO GAIN MORE MEMBERS!!')
			.setThumbnail(message.author.avatarURL)
			.setColor(0x00FF00)
			message.channel.sendEmbed(USER);
		break;
		case 'info':
			message.channel.send('Please specify what info you want? `1. Bot, 2. Developer, 3. Server, 4. Commands` (type ;info <type of info>')
		        if(args[1] === 'bot'){
			message.channel.send('__***Hi there! I am Epic Poke bot! I was cretaed for Epic poke server! I can manage the server and i can do things that requires `ADMINISTRATIVE PERMISSIONS`! I AM STILL IN DEVELOPMENT!!***__')	
		}else {
			message.channel.send('Invalid Parameters!')
		}
		break;				
	                }
});

bot.login(process.env.token);
