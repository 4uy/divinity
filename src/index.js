const { Client, Intents } = require("discord.js");
const { token } = require("../config.json")

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once("ready", async () => {
    console.log(`Logged in as ${client.user.tag} (${client.user.id})`);

    // const admin = await client.users.fetch(config.administrator);
	// admin.send("**Ready!**");

    client.user.setActivity(`over ${client.guilds.cache.size} servers.`, { type: "WATCHING" });

    require("./events")(client);
    require("./commands")(client);
});

client.login(token);
