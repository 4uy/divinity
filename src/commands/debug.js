const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("debug")
		.setDescription("Debug command with the purpose of testing new features."),
	async execute(interaction) {
        await interaction.reply({
            content: "Hello, world!",
            // embeds: [embed],
            ephemeral: false 
        });
    },
}
