module.exports = {
    name: 'messageCreate',
	execute(message) {
        console.log(`${message.guild.name} → ${message.channel.name}`);
        console.log(`${message.author.tag} → ${message.content}`);
	}
}
