const { PermissionsBitField } = require('discord.js');

module.exports = {
	name: 'help_add',
	async execute(interaction, client) {
		const id = await interaction.message.embeds[0].footer.text;

		const channel = await interaction.guild.channels.cache.find((channel) => channel.id === id);
		await channel.permissionOverwrites.edit(interaction.member.id, {
			ViewChannel: true,
			SendMessages: true,
		});

		await channel.send({ content: `> <@${interaction.member.id}> has joined the party!` });
	},
};
