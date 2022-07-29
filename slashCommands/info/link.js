const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'link',
	description: 'Link a corresponding website into the chat.',
	type: ApplicationCommandType.ChatInput,
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
				description: `Methods of payment for installations!`,
				value: `rfp`,
			},
			{
				name: `OWL`,
				description: `GBSV Response Training & Undressing Consent`,
				value: 'https://owl.uwo.ca/portal/',
			},
			{
				name: 'Student Center',
				description: `The most common place for Western students!`,
				value: 'https://student.uwo.ca/psp/heprdweb/EMPLOYEE/SA/c/UWO_WISG.WSA_STDNT_CENTER.GBL',
			},
			{
				name: `Western Live Chat`,
				description: `Chat with a department staff member for help!`,
				value: 'https://westernchat.uwo.ca/',
			},
			{
				name: 'Western Email',
				description: `Keep up to date on important information!`,
				value: 'http://mail.uwo.ca/ - (Requirements: Duo Mobile App, https://mymfa.uwo.ca/login)',
			},
			{
				name: `myHousing`,
				description: `Your residece portal.`,
				value: 'https://myhousing.uwo.ca/portal/',
			},
			{
				name: 'Unofficial Subreddit',
				description: `Random questions, Random replies, Decent info.`,
				value: 'https://www.reddit.com/r/uwo/',
			},
			{
				name: 'OSAP',
				description: `Your best friend to help you pay for school!`,
				value: 'https://osap.gov.on.ca/OSAPSecurityWeb/public/login.xhtml ',
			},
			{
				name: `Draft My Schedule`,
				description: `The unique was of building a schedule!`,
				value: 'https://draftmyschedule.uwo.ca/login.cfm',
			},
			{
				name: 'Important Dates',
				description: `Updated list of important dates of events and holidays.`,
				value: 'https://www.westerncalendar.uwo.ca/SessionalDates.cfm?SelectedCalendar=Live&ArchiveID=',
			}
		);
		interaction.respond(choices).catch(console.error);
	},
	run: async (client, interaction) => {
		let link = interaction.options.get('link').value;
		if (!link) return;

		if (link === 'rfp') {
			link = 'https://registrar.uwo.ca/student_finances/fees_refunds/fee_payment_methods/methods_from_a_canadian_bank.html';
		}

		const embed = new EmbedBuilder().setColor('#71368A').setTitle(`🔗 Link`).setDescription(`${link}`).setFooter({ text: 'Baymax II • 2022' });

		if (interaction) {
			try {
				await interaction.reply({ embeds: [embed] });
			} catch (err) {}
		}
	},
};
