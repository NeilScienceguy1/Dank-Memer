const cowsay = require('cowsay')

exports.run = async function (client, msg, args) {

	if (!args[0]) {
		return msg.reply('You gotta give me something to say :eyes:')
	}

	try {
		await msg.channel.send(`\`\`\`\n${cowsay.say({ text: args.join(' '), e: 'oO', T: 'U ' })}\n\`\`\``)
	} catch (e) {
		console.log(e.message)
	}

}