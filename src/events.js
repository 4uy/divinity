module.exports = (client) => {
    client.on("messageCreate", async (message) => {
        console.log(`${message.author.tag} → ${message.content}`);
    });
    
    client.on("rateLimit", async (ratelimit) => {
        console.log(`Ratelimited → ${ratelimit.timeout}ms`);
    });
};
