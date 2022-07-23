const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'faq',
	description: 'Link a corresponding website into the chat.',
	type: ApplicationCommandType.ChatInput,
	cooldown: 0,
	options: [
		{
			name: 'question',
			description: 'Choose a link you would like to post.',
			type: 3,
			required: true,
			autocomplete: true,
		},
	],
	autocomplete: (interaction, choices) => {
		let rawdata = fs.readFileSync('././responses.json');
		let data = JSON.parse(rawdata);
		let typing = interaction.options.getFocused(true).value;

		if (typing.length > 0) {
			let keys = Object.keys(data).filter((key) => key.includes(`${typing}`) > -1);

			let index = 0;
			keys.forEach((key) => {
				if (data[key].question.toLowerCase().includes(`${typing}`)) {
					if (index !== 25) {
						choices.push({
							name: `${data[key].question}`,
							value: `${data[key].question}`,
						});
						index++;
					}
				}
			});
			interaction.respond(choices).catch(console.error);
		} else if (typing.length === 0) {
			let keys = Object.keys(data);

			let index = 0;
			keys.forEach((key) => {
				if (index !== 25) {
					choices.push({
						name: `${data[key].question}`,
						value: `${data[key].question}`,
					});
					index++;
				}
			});
			interaction.respond(choices).catch(console.error);
		}
	},
	run: async (client, interaction) => {
		const question = interaction.options.get('question').value;
		if (!question) return;

		let rawdata = fs.readFileSync('././responses.json');
		let data = JSON.parse(rawdata);
		let keys = Object.keys(data);

		keys.forEach((key) => {
			if (data[key].question.toLowerCase() === question.toLowerCase()) {
				const embed = new EmbedBuilder()
					.setColor('#71368A')
					.setTitle(`FAQ'`)
					.setDescription(
						`${
							data[key].answer.length > 4096
								? `Q: ${data[key].question}\n\nThe answer for that question is too long!\n\nCheck out the link here: https://residence.uwo.ca/resources/faq/index.html`
								: `Q: ${data[key].question}\n\n${data[key].answer}`
						}`
					)
					.setFooter({ text: 'Baymax II • 2022' });

				interaction.reply({ embeds: [embed] });
			}
		});
	},
};
