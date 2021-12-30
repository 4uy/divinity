const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { groups } = require("../../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stop")
		.setDescription("Shut down the bot."),
	async execute(interaction) {
        if (interaction.user.id == groups.administrator) {         
            const embed = new MessageEmbed()
            .setTitle(`Stopping!`)
            .setColor("#ED4245");

            await interaction.reply({
                // content: "",
                embeds: [embed],
                ephemeral: true 
            });

            process.exit();
        } else {
            await interaction.reply({
                content: "Nice try.",
                // embeds: [embed],
                ephemeral: true 
            });
        }
    },
};
