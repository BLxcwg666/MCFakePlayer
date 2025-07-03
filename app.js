const mineflayer = require('mineflayer');

function randomStr(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function randomUsername() {
    const prefixes = ["Nya_", "tzi_", "ltf_", "lf_", "wg_", "cd_", "ice_", "LoveDaHai_"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const now = new Date();
    const date = String(now.getMonth() + 1).padStart(2, '0') + "_" +
                     String(now.getDate()).padStart(2, '0');

    return `${prefix}${randomStr(5)}_${date}`;
}

function createBot() {
    const username = randomUsername();
    const bot = mineflayer.createBot({
      host: '127.0.0.1',
      port: 25504,
      username: username,
      version: '1.20.4',
    });
    
    bot.on('login', () => {
      console.log(`[+] ${username} Connected`);
    });
    
    bot.on('end', () => {
      console.log(`[-] ${username} Disconnected`);
    });
    
    bot.on('error', err => {
      console.error('[!] Error: ', err);
    });
}

for (let i = 0; i < 13; i++) {
    setTimeout(createBot, i * 1000);
}