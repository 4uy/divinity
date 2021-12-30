const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("botinfo")
		.setDescription("Get information about the bot."),
	async execute(interaction, client) {
        const userCount = await client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)

        const embed = new MessageEmbed()
        .setTitle("Bot Info")
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Server Count", `${client.guilds.cache.size}`, true)
        .addField("Total Users", `${userCount}`, true)
        .setColor("#5865F2");

        await interaction.reply({
            // content: "",
            embeds: [embed],
            ephemeral: false
        });
    },
}
