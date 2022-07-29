const { ApplicationCommandType, PermissionsBitField, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Type your question to get a thread started!',
	type: ApplicationCommandType.ChatInput,
	cooldown: 0,
	options: [
		{
			name: 'question',
			description: 'Type the question you would like to ask!',
			type: 3,
			required: true,
		},
	],
	run: async (client, interaction) => {
		const question = interaction.options.get('question').value;
		if (question.length < 10) return interaction.reply({ content: 'Sorry, your question must be longer than 10 characters!', ephemeral: true });

		if (interaction.guild.channels.cache.find((ch) => ch.name === `help-${interaction.member.displayName.toLowerCase()}`)) {
			return interaction.reply({ content: 'Sorry, you already have a channel open in the help section!', ephemeral: true });
		}

		const chan = await interaction.guild.channels.create({
			name: `help-${interaction.member.displayName.toLowerCase()}`,
			type: ChannelType.GuildText,
			parent: '1002301805901910197',
			position: 1,
			permissionOverwrites: [
				{
					id: interaction.member.id,
					allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
				},
				{
					id: interaction.guild.id,
					deny: [PermissionsBitField.Flags.ViewChannel],
				},
			],
		});

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle(`${interaction.member.displayName} asked a question!`)
			.setDescription(
				`
				> "${question}"
				`
			)
			.setFooter({ text: `${chan.id}` });

		const b1 = new ButtonBuilder().setCustomId('help_add').setLabel('🔗 Join').setStyle(ButtonStyle.Secondary);
		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(b1)] });
	},
};
