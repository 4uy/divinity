module.exports = {
    name: 'rateLimit',
	execute(ratelimit) {
        console.log(`Ratelimited → ${ratelimit.timeout}ms`);
    }
}
