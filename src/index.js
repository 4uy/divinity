const { Client, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
	intents: [Intents.FLAGS.GUILDS]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user?.tag} (${client.user?.id})`);
});

client.login(process.env.TOKEN);
