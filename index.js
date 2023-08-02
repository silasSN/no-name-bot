const fs = require('fs');
const cleverbot = require('cleverbot-free');
const { Client, GatewayIntentBits, Collection, EmbedBuilder, messageLink } = require('discord.js');
require('dotenv').config();
const prefix = process.env.pre


const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
})

client.login(process.env.token);

client.once('ready', async (message) => {
    console.log(`${client.user.username} Has Started!!`)
    client.user.setActivity('Dev Mode')
    client.user.setStatus('dnd')
})

const commands = new Collection();
const commandsFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./src/commands/${file}`);
    console.log(`Loading command: ${command.name}`);
    commands.set(command.name, command);
}

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(commands.has(command)) {
        const commandFunc = commands.get(command);
        commandFunc.execute(message, args)
    }
});

// -------------------- AI Chat Bot--------------------------\\
let convsesation = [];
const cooldown = new Set()
client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(cooldown.has(message.guild.id)){
        message.channel.send("Slow Down!")
        return;
    }
    if(message.mentions.has(client.user))
        if(message.channel.id == 1129193883318882424){
            let text = message.content;

            cooldown.add(message.guild.id);
                setTimeout(() => {
                cooldown.delete(message.guild.id);
             }, 5000)

            cleverbot(text, convsesation).then(res=>{
                    convsesation.push(text);
                    convsesation.push(res);
                    // message.reply(res).catch(err => {console.log('Message was not sent.')})
                    message.reply('This command has been turned off until the bot is completed. If you have an issue please dm my author.');

            })       
    }
})