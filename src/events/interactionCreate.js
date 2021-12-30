module.exports = {
    name: 'interactionCreate',
	execute(interaction) {
        // if (interaction) console.log(`${interaction.guild.name} → ${interaction.channel.name}`);
        console.log(`${interaction.user.tag} → Triggered an interaction.`);
	}
}
