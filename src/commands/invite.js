const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("invite")
		.setDescription("Responds with the link to add the bot to another server."),
	async execute(interaction, client) {
        const embed = new MessageEmbed()
        .setTitle(`Add ${client.user.username} to your server!`)
        .setURL(`https://discord.com/oauth2/authorize?&client_id=${client.user.id}&scope=applications.commands+bot&permissions=2088234238`)
        .setColor("#5865F2")

        await interaction.reply({
            // content: "",
            embeds: [embed],
            ephemeral: false
        });
    },
}
