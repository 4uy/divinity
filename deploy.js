// Credit: https://discordjs.guide
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require("./config.json");

const commands = [];
const commandFiles = require("fs").readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(config.token);

rest.put(Routes.applicationCommands(config.clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
