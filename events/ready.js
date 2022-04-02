module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`in as ${client.user.tag}`);
	},
};
