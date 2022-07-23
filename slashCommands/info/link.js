const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'link',
	description: 'Link a corresponding website into the chat.',
	type: ApplicationCommandType.ChatInput,
	cooldown: 0,
	options: [
		{
			name: 'link',
			description: 'Choose a link you would like to post.',
			type: 3,
			required: true,
			autocomplete: true,
		},
	],
	autocomplete: (interaction, choices) => {
		choices.push(
			{
				name: `Residence Fee Payments`,
				value: `https://registrar.uwo.ca/student_finances/fees_refunds/fee_payment_methods/methods_from_a_canadian_bank.html`,
			},
			{
				name: `OWL`,
				value: 'https://owl.uwo.ca/portal/ - GBSV Response Training & Undressing Consent',
			},
			{
				name: 'Student Center',
				value: 'https://student.uwo.ca/psp/heprdweb/EMPLOYEE/SA/c/UWO_WISG.WSA_STDNT_CENTER.GBL',
			},
			{
				name: `Western Live Chat`,
				value: 'https://westernchat.uwo.ca/',
			},
			{
				name: 'Western Email',
				value: 'http://mail.uwo.ca/ - (Requirements: Duo Mobile App, https://mymfa.uwo.ca/login)',
			},
			{
				name: `myHousing (Residence)`,
				value: 'https://myhousing.uwo.ca/portal/',
			},
			{
				name: 'Unofficial Subreddit',
				value: 'https://www.reddit.com/r/uwo/',
			},
			{
				name: 'OSAP',
				value: 'https://osap.gov.on.ca/OSAPSecurityWeb/public/login.xhtml ',
			},
			{
				name: `Draft My Schedule`,
				value: 'https://draftmyschedule.uwo.ca/login.cfm',
			},
			{
				name: 'Important Dates',
				value: 'https://www.westerncalendar.uwo.ca/SessionalDates.cfm?SelectedCalendar=Live&ArchiveID=',
			}
		);
		interaction.respond(choices).catch(console.error);
	},
	run: async (client, interaction) => {
		const link = interaction.options.get('links').value;
		if (!link) return;

		const embed = new EmbedBuilder().setColor('#71368A').setTitle(`🔗 Link`).setDescription(`${link}`).setFooter({ text: 'Baymax II • 2022' });

		interaction.reply({ embeds: [embed] }).then(() => {
			setTimeout(() => {
				interaction.deleteReply();
			}, 4000);
		});
	},
};
