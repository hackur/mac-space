/**
*
* Allows the clients to interact through the CLI and parsers CLI arguments.
*
* @author Salvatore Garbesi <sal@dolox.com>
* @method boot
* @memberof controller/cli
* @returns {object} An instance of the `commander` library.
*
**/
module.exports = function() {
	'use strict';

	// Set the version of the CLI utility.
	var me = commander.version(pkg.version);

	// Import the acceptable arguments for the program.
	_.each(pkg.commander, function(option) {
		cli.option.apply(cli, option);
	});

	// Add help examples.
	me.on('--help', function(){
		console.log('  Examples:');
		console.log('');
		console.log('    npm run start -- -f /path/to/config.json');
		console.log('    npm run start -- --file /path/to/config.json');
		console.log('');
	});

	// Parse the CLI arguments.
	me.parse(process.argv);

	// Return the commander instance.
	return me;
};
