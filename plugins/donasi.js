const qrku = "https://telegra.ph/file/8f9789eb22286f9848e1c.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi  」
│ • Telkomsel [0895323413434]
│ • Gopay  [08993451566]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895323413434
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
