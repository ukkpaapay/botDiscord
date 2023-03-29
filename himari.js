const {Client,GatewayIntentBits} = require('discord.js');
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
client.login('OTM0Mzg4MzYzNjMxMzk0ODU2.GQhA3l.8hlAoU_tx9EGP7wRd6ngVW0HxCpKh1dcuw5LFI');