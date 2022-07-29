const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'res-select',
	async execute(interaction, client) {
		let _r;
		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === interaction.values[0]) {
				_r = await interaction.message.guild.roles.cache.find((r) => r.id === `${roles[i].id}`);
			}
		}

		if (!_r) {
			const embed = new EmbedBuilder()
				.setColor('#71368A')
				.setTitle('🎓 Error!')
				.setDescription(`Looks like we weren't able to add the role **${interaction.values[0]}** to you!`)
				.setFooter({ text: 'Baymax II • 2022' });

			return await interaction.update({ embeds: [embed], components: [] });
		}
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('🎓 Success!')
			.setDescription(`You have updated your residence to **${interaction.values[0]}!**`)
			.setFooter({ text: 'Baymax II • 2022' });

		for (let i = 0; i < roles.length; i++) {
			const role = await interaction.member.roles.cache.find((role) => role.id === roles[i].id);
			if (role) {
				interaction.member.roles.remove(role);
			}
		}

		let _spacer = await interaction.guild.roles.cache.find((r) => r.id === '1001367632236265522');

		await interaction.member.roles.add(_r);
		await interaction.member.roles.add(_spacer);
		await interaction.update({ embeds: [embed], components: [] });
	},
};

const roles = [
	{
		name: 'Delaware',
		id: '1001365044212273183',
	},
	{
		name: 'Med-Syd',
		id: '1001365047332831302',
	},
	{
		name: 'Saugeen',
		id: '1001365047785832538',
	},
	{
		name: 'Alumni House',
		id: '1001365048154914907',
	},
	{
		name: 'Elgin',
		id: '1001365048981205083',
	},
	{
		name: 'Essex',
		id: '1001365049488707645',
	},
	{
		name: 'Lambton',
		id: '1001365050495336518',
	},
	{
		name: 'London',
		id: '1001365050801532929',
	},
	{
		name: 'Bayfield',
		id: '1001365051573272677',
	},
	{
		name: 'O-Hall',
		id: '1001365052311486504',
	},
	{
		name: 'Perth',
		id: '1001365052647026718',
	},
];
