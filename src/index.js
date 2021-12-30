const { Client, Intents } = require("discord.js");
const { groups, token } = require("../config.json")

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once("ready", async () => {
    console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
    client.user.setActivity(`over ${client.guilds.cache.size} servers.`, { type: "WATCHING" });

    require("./events")(client);
    require("./commands")(client);
});

client.login(token);
