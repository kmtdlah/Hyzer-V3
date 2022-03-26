let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ -
╠═〘 F 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
