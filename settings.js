//base by DGXeon
//recode by Always Ziyoo
//YouTube: @Ziyo232
//Telegram: t.me/ziyooffc

/* ● Always Ziyoo ( Andre ) di remehkan?? Tentu ini bukan Ancaman ! */

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = " " //ur yt chanel name
global.socialm = "https://tiktok.com/@official_kkr" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'Aprilia Botzz Multi Device' //ur bot name
global.ownernumber = '6285692544241' //ur owner number
global.ownername = 'Rizz13' //ur owner name
global.websitex = "https://chat.whatsapp.com/H2RL2MhuRtl02HI9jmH29X" //"https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA"
global.wagc = "https://chat.whatsapp.com/H2RL2MhuRtl02HI9jmH29X" //"https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA"
global.themeemoji = '🪀'
global.wm = "Rizz13Botzz"
global.botscript = 'https://chat.whatsapp.com/H2RL2MhuRtl02HI9jmH29X' //'https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA' //script link
global.packname = "Aprilia MD"
global.author = "Rizz13 - Package"
global.creator = "6285692544241@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285692544241"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Limit kamu sudah ditambah!! <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})