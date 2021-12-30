const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    client.on("messageCreate", async (message) => {
        if (message.content == "/ping") {
            let embed = new MessageEmbed()
            .setTitle(`**Ping**`)
            .setColor("#57F287")
            .setThumbnail("https://raw.githubusercontent.com/4uy/divinity/main/res/wifi.png")
            .addField("Latency", `${Math.round(client.ws.ping)}ms`);
            await message.reply({ embeds: [embed] });            
        };
    });
};
