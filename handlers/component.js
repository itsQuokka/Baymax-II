const chalk = require('chalk');
const fs = require('fs');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Components', 'Stats').setBorder('|', '=', '0', '0');

module.exports = (client) => {
	fs.readdirSync('./components/').forEach((dir) => {
		const files = fs.readdirSync(`./components/${dir}/`).filter((file) => file.endsWith('.js'));
		if (!files || files.legnth <= 0) console.log(chalk.red('Components - 0'));
		files.forEach((file) => {
			let component = require(`../components/${dir}/${file}`);
			if (component) {
				client.buttons.set(component.name, component);
				table.addRow(component.name, '✅');
			} else {
				table.addRow(file, '⛔');
			}
		});
	});
	console.log(chalk.blue(table.toString()));
};
