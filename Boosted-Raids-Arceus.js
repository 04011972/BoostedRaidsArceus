const fetch = require('node-fetch');
const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});

// Listen for any kind of message. There are different kinds of messages.
bot.on('channel_post', (msg) => {
  console.log(msg.text+'\n-------------------');

  var body = {
    "username":"Arceus Players",
    "avatar_url":"https://i.pinimg.com/236x/52/9d/50/529d500103caf60551faa7c0b38eca5e--sexy-pokemon-pokemon-go.jpg",
    "content": msg.text+ '\n<@&554389058650898435>'
  };
  fetch(process.env.ARCEUS_WEBHOOK, {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .catch(err => console.log(err))

});