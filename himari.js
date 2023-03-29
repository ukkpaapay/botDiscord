const {Client,GatewayIntentBits} = require('discord.js');
require('dotenv').config()
const client = new Client({ intents :[
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent
]})

client.on('ready', () => {
  console.log('Himari ready!');
});
client.on('messageCreate', async(message) => {
    if (message.author.bot) return
     console.log(message.author.discriminator);
  // if (message.content === 'Hi hi~~~~~~~') {
  //   message.channel.send('Hi hi~~~~~~~');
  // }
});
client.login(process.env.ID_KEY);