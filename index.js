const Promise = require("bluebird");
Promise.config({
  cancellation: true,
});
const TelegramBot = require("node-telegram-bot-api");
const token = "1820981314:AAENNazpXjhVzzzhqf7nRsu61JYraS5oJrw";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
  console.log(
    "=====> msg.new_chat_member=",
    msg.new_chat_member,
    "msg.left_chat_member = ",
    msg.left_chat_member
  );
  // var Hi = "hi";
  // console.log('=====on messge \n',msg)
  // if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
  //   bot.sendMessage(msg.chat.id, "Hello dear user of pipe");
  // }

  if (msg.new_chat_member != undefined) {
    let welStr = `Please follow the robot's instruction,and you can receive the airdrop after completion.@pipepibot`;
    console.log(welStr);

    bot.sendMessage(msg.chat.id, welStr);
  }
  if (msg.left_chat_member != undefined) {
    console.log(`${msg.left_chat_member.username} left groud`);
  }
});

bot.onText(/\/love/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ["Yes, you are the bot of my life ❤"],
        ["No, sorry there is another one..."],
      ],
    }),
  };
  bot.sendMessage(msg.chat.id, "Do you love me?", opts);
});
