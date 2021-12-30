const { Client, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once("ready", async () => {
    console.log(`Logged in as ${client.user?.tag} (${client.user?.id})`);

    const administrator = await client.users.fetch(process.env.ADMINISTRATOR_ID);
	administrator.send("**Ready!**");

    client.user.setActivity(`over ${client.guilds.cache.size} servers.`, { type: "WATCHING" });

    require("./events")(client);
    require("./commands")(client);
});

client.login(process.env.TOKEN);
