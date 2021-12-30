const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("debug")
		.setDescription("Debug command with the purpose of testing new features."),
	async execute(interaction) {
        const embed = new MessageEmbed()
        .setTitle("Debug")
        .setDescription("Hello, world!")
        .setColor("#5865F2");

        await interaction.reply({
            // content: "",
            embeds: [embed],
            ephemeral: true
        });
    },
}
