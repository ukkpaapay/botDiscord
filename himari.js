const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Himari ready!");
});
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  // console.log(message.attachments.size);
  // if (
  //   message.content === "Himari" ||
  //   message.content === "himari" ||
  //   message.content === "ฮิมาริ"
  // ) {
  //   message.channel.send("ว่าไงคะคุณครู");
  // }

  // if (message.author.discriminator === "1425") {
  //   message.channel.send(`ชื่อ${message.author.username}หรอคะ ทำไมชื่อแปลกจัง`);
  // }

  if (message.author.discriminator === "1425") {
    console.log('มีคนโดนแล้ว!!!');
    if (message.content !== "") {
      message.channel.send(
        `ชื่อ${message.author.username}หรอคะ ทำไมชื่อแปลกจัง`
      );
    }
    if (message.attachments.size > 0) {
      switch (getRandomInt(2)) {
        case 0:
          message.channel.send(`เจ๋งดีนี่คะ`);
          break;
        case 1:
          message.channel.send(`โอ้โห สุดยอดไปเลย`);
          break;
        default:
          null;
          break;
      }
    }
  }
});
client.login(process.env.ID_KEY);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
