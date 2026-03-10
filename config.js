const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FkTmtBTlNCSDlGY1FTNEYvNHNGZkg5Q3lsLys5RzRDQWZkekNNakZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTJiMnZGbjhqRXRwSHBFR2VJVzNNVGtwQTZjRGZmUWlHWVk1QzRqaFdCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT2RsSU5oeDNJbFlZMUlBNHBFd2NuOCt4eW9QMVJiK0dISGhVQzZUTUVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaUNWWXVkUEtXSUVuc0FVL0JCMENqcWFZNXIyQVpQWnB5RWhnWXU3azNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKbjl5Qm5qL0FVSUU3M0x1Q1NUWjMwNTRiUTZRUldQVWVhRjVCN1ZVWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNtWWlDaHY3c2V2Q2oramxScGx1eUdlV0VPNlhldXV4MVBGdlBsTDFFak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9OOGQ5cnhhcExMYWR2bUZYbjVtdTFUUmwzUXQzdnJYUFRyT0dMSUZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhic3h2OVFjKzdXeFVvSWdFN1h6d0xMeVFlTVBXRDVuT1RaaHZhQVR6RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisvblVwU1c0Z2pjSUVFRmg4K3phZ2dvd1pCeFBBMWllN0tjVWtnM1dmRVJUR0dLN0ZIb2NTVHB0OHN0T0hxUnB3U1FZUXBxUjZSU2U2ZlFycUUxdmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJhMkhLc2lra3pMa0xTWi91VnRJTVQzaS8vYmlkajJGOVRNUHA3VVRpbVZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODg5MTI3MjkxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMzMzg2OTgxQjBCRjlEQ0ZGOEQ2N0I4Qjk4Q0QwQjkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzE2NzkwNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4ODkxMjcyOTE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0UzMUYzQTdDNDVGNkQyNjM5MkFBRjA3NUEwNzM0NyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMTY3OTA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg4OTEyNzI5MTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMTBGOTMyRUUzMTU2NEM0QTE4OTA3NUU1Q0Q0MzQwIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMxNjc5MDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODg5MTI3MjkxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNDMjc3QzU4NDcwMkY5RTRFNzBCQjE5NkIyNDk2QzIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzE2NzkwN31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4Nzk3SjFaUCIsIm1lIjp7ImlkIjoiOTE4ODkxMjcyOTE0OjM5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQxOTc5MTk1NjU4MzI4OjM5QGxpZCIsIm5hbWUiOiLqp4HimKzgvJJSb25v4LySKCngvJJyeOC8kuKYrOqngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkNnd05RREVKdkt3YzBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3VDTzR5Wldhak1VbEw2cDRYMlVZVjdRUWIvdGtxQ2tHVWpsc0ZDdGRIaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVnlMVlpSQ0hLYmxOaGh0WEVNSmlXUUQwYkQ4NFVnQkREVkxXZTdJREt5QmNCeGRjZWJiUGQ3SEE5Q3RPbkVnelZ2VU5USWtGNktTZFZjbm9DWmlmQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InllNEloS2ZsRjc0Mko0aVlqL1BoWUUzVlg3WCs2SmxXOWNraVdUcU1yVUI4ZnZDcnBaWWs5MjkxUXV6RW0vSjJCZGIySko2bUNwZnZ3YTdJVlBXbWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxOTc5MTk1NjU4MzI4OjM5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRcmdqdU1tVm1vekZKUytxZUY5bEdGZTBFRy83WktncEJsSTViQlFyWFI1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzMxNjc5MDUsImxhc3RQcm9wSGFzaCI6IjRaUlA2UyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2hUIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hhk8i3.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙰𝙽𝙰𝚈𝙰𝚃 𝙷𝙰𝙲𝙺𝙴𝚁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
