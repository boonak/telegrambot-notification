function sendNotification(msg) {
  var chatId = <telegramChatId>;
  var telegramToken = <telegramBotToken>;
  const payload = {
    method: "sendMessage",
    chat_id: chatId,
    text: msg,
  };

  const request = {
    method: "post",
    payload: payload,
  };

  UrlFetchApp.fetch("https://api.telegram.org/bot" + telegramToken + "/", request);
}
