let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝐌𝐞𝐧𝐬𝐚𝐣𝐞:* ${pesan}`
  let teks =`ETIQUETA GENERAL 👉🏻https://chat.whatsapp.com/L2noWljyBJlLaVU9uIkuf9\n\n🌩️ ${oi}\n\n⚽ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚:*\n`
  for (let mem of participants) {
  teks += `▌🎠 @${mem.id.split('@')[0]}\n`}
  teks += `◥ 𝐁𝐥𝐮𝐞 𝐋𝐨𝐜𝐤 ◤`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler
