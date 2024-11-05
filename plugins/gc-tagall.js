let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝕸𝖊𝖓𝖘𝖆𝖏𝖊:* ${pesan}`
  let teks =`💕 𝙉𝙖𝙮𝙎𝙩𝙤𝙧𝙚 https://chat.whatsapp.com/L2noWljyBJlLaVU9uIkuf9\n\n⇢ ${oi}\n\n⇢ *𝕰𝖙𝖎𝖖𝖚𝖊𝖙𝖆:*\n`
  for (let mem of participants) {
  teks += `🌼･ @${mem.id.split('@')[0]}\n`}
  teks += `— 𝗠𝗜𝗡𝗕𝗢𝗧`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler
