const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stop")
		.setDescription("[ADMINISTRATOR] Shuts down the bot."),
	async execute(interaction) {
        if (interaction.user.id == process.env.ADMINISTRATOR_ID)
        await interaction.reply({
            content: "Stopping...",
            // embeds: [embed],
            ephemeral: false 
        });
        process.exit();
    },
}
