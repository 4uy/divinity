const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stop")
		.setDescription("[ADMINISTRATOR] Shuts down the bot."),
	async execute(interaction) {
        if (interaction.user.id == process.env.ADMINISTRATOR_ID) {         
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
