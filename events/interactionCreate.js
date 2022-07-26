const { EmbedBuilder, Collection, PermissionsBitField, ApplicationCommandType } = require('discord.js');
const cooldown = new Collection();
const ms = require('ms');

const client = require('..');

client.on('interactionCreate', async (interaction) => {
	/** If the interaction is a component */

	if (interaction.isButton() || interaction.isSelectMenu()) {
		const { buttons } = client;
		const { customId } = interaction;
		const button = buttons.get(customId);
		if (!button) return new Error('No such button');

		try {
			return await button.execute(interaction, client);
		} catch (err) {
			console.log(err);
		}
	}

	const slashCommand = client.slashCommands.get(interaction.commandName);
	if (interaction.type == 4) {
		if (slashCommand.autocomplete) {
			const choices = [];
			await slashCommand.autocomplete(interaction, choices);
		}
	}
	if (!interaction.type == 2) return;

	if (!slashCommand) return client.slashCommands.delete(interaction.commandName);

	try {
		if (slashCommand.cooldown) {
			if (cooldown.has(`slash-${slashCommand.name}${interaction.user.id}`))
				return interaction.reply({ content: `You are on \`${ms(cooldown.get(`slash-${slashCommand.name}${interaction.user.id}`) - Date.now(), { long: true })}\` cooldown!` });
			if (slashCommand.userPerms || slashCommand.botPerms) {
				if (!interaction.memberPermissions.has(PermissionsBitField.resolve(slashCommand.userPerms || []))) {
					const userPerms = new EmbedBuilder().setDescription(`🚫 ${interaction.user}, You don't have \`${slashCommand.userPerms}\` permissions to use this command!`).setColor('Red');
					return interaction.reply({ embeds: [userPerms] });
				}
				if (!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(slashCommand.botPerms || []))) {
					const botPerms = new EmbedBuilder().setDescription(`🚫 ${interaction.user}, I don't have \`${slashCommand.botPerms}\` permissions to use this command!`).setColor('Red');
					return interaction.reply({ embeds: [botPerms] });
				}
			}

			await slashCommand.run(client, interaction);
			cooldown.set(`slash-${slashCommand.name}${interaction.user.id}`, Date.now() + slashCommand.cooldown);
			setTimeout(() => {
				cooldown.delete(`slash-${slashCommand.name}${interaction.user.id}`);
			}, slashCommand.cooldown);
		} else {
			if (slashCommand.userPerms || slashCommand.botPerms) {
				if (!interaction.memberPermissions.has(PermissionsBitField.resolve(slashCommand.userPerms || []))) {
					const userPerms = new EmbedBuilder().setDescription(`🚫 ${interaction.user}, You don't have \`${slashCommand.userPerms}\` permissions to use this command!`).setColor('Red');
					return interaction.reply({ embeds: [userPerms] });
				}
				if (!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(slashCommand.botPerms || []))) {
					const botPerms = new EmbedBuilder().setDescription(`🚫 ${interaction.user}, I don't have \`${slashCommand.botPerms}\` permissions to use this command!`).setColor('Red');
					return interaction.reply({ embeds: [botPerms] });
				}
			}

			if (slashCommand.moderator === 1) {
				if (!interaction.member.roles.cache.find((r) => r.id === '1001363252518862865')) {
					const userPerms = new EmbedBuilder().setDescription(`🚫 ${interaction.user}, You don't have the permissions to use this command!`).setColor('Red');
					return interaction.reply({ embeds: [userPerms] });
				}
			}

			await slashCommand.run(client, interaction);
		}
	} catch (error) {
		console.log(error);
	}
});
