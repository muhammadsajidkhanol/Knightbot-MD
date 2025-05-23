async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 DOLLAR MD*

*📂 GitHub Repository:*
https://github.com/muhammadsajidkhanol/Knightbot-MD
*📢 Official Channel:*
https://whatsapp.com/channel/0029VbAZuFFCBtxLljSGkS05
_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'DOLLAR MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
