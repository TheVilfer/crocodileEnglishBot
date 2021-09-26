require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const WordsContoller = require("./lib/wordsController.js");
const commandsList = require("./lib/commandsList.json")
const Words =  new WordsContoller();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", console.log);
bot.setMyCommands(commandsList);
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
bot.onText(/\/words/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = Words.toString();
  bot.sendMessage(chatId, resp);
});