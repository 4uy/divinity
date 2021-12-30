const eventFiles = require("fs").readdirSync("./src/events").filter(file => file.endsWith(".js"));

module.exports = (client) => {    
    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
};
