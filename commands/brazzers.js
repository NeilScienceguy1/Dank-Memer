const Jimp = require('jimp')

exports.run = async function (client, msg) {
	const avatarurl = msg.mentions.users.size > 0 ? msg.mentions.users.first().displayAvatarURL.replace('gif', 'png') : msg.author.displayAvatarURL.replace('gif', 'png')
	const avatar = await Jimp.read(avatarurl)
	const brazz = await Jimp.read('./assets/imgen/brazzers.png')

	brazz.resize(Jimp.AUTO, 100)
	avatar.resize(350, 350)
	avatar.composite(brazz, 150, 275)
	avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
		try {
			await msg.channel.sendFile(buffer)
		} catch (e) {
			console.log(e)
			msg.reply('there was an error with this command.')
		}
	})


}