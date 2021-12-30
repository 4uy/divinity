const { Collection } = require("discord.js")
const commandFiles = require("fs").readdirSync("./src/commands").filter(file => file.endsWith(".js"));

module.exports = (client) => {
    client.commands = new Collection();
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
        console.log(`Enabled command: /${command.data.name}`)
    }

    client.on("interactionCreate", async interaction => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return;
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
        }
    });
};
