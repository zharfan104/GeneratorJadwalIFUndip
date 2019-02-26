'use strict';
var fs = require('fs')
const dptkode = require('./dptkode')
const dptkelas = require('./dptkelas')
const jadwal = require('./jadwal')
const hasil = require('./hasil')
const line = require('@line/bot-sdk');
const express = require('express');
const config = require('./config.json');
var sampleflex = require('./sampleflex.js');
// create LINE SDK client
const client = new line.Client(config);

const app = express();

// webhook callback
app.post('/webhook', line.middleware(config), (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(req.body.events.map(event => {

      // check verify webhook event
      if (event.replyToken === '00000000000000000000000000000000' ||
        event.replyToken === 'ffffffffffffffffffffffffffffffff') {
        return;
      }
      var logger = fs.createWriteStream('log.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
      })
      logger.write(JSON.stringify(event)) //
      return handleEvent(event);
    }))
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  var kode = dptkode(texts)
  var kelas = dptkelas(texts[0])
  var data = []
  for (var i = 0; i < kode.length; i++) {
    data.push({
      "Kode MK": kode[i],
      "Kelas": kelas[i]

    })
  }
  var isi = hasil(jadwal, data);
  var flex = sampleflex(isi);
  var flex2 = {
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "bubble",
      "direction": "ltr",
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [{
          "type": "button",
          "action": {
            "type": "uri",
            "label": "Button",
            "uri": "https://linecorp.com"
          }
        }]
      }
    }
  };
  console.log(JSON.stringify(flex))
  return client.replyMessage(
    token,
    flex
  );
};
const replyFlex = (token, flex) => {
  return client.replyMessage(
    token,
    flex
  );
};

// callback function to handle a single event
function handleEvent(event) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return handleText(message, event.replyToken);
        case 'image':
          return handleImage(message, event.replyToken);
        case 'video':
          return handleVideo(message, event.replyToken);
        case 'audio':
          return handleAudio(message, event.replyToken);
        case 'location':
          return handleLocation(message, event.replyToken);
        case 'sticker':
          return handleSticker(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case 'follow':
      return replyText(event.replyToken, 'Got followed event');

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case 'join':
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`);

    case 'postback':
      let data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case 'beacon':
      const dm = `${Buffer.from(event.beacon.dm || '', 'hex').toString('utf8')}`;
      return replyText(event.replyToken, `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function handleText(message, replyToken) {
  switch (message.text) {
    case '1':
      return replyText(replyToken, "Halo guys");
    case 'flex':
      return replyFlex(replyToken, sampleflex.flex1);
    default:
      return replyText(replyToken, message.text);

  }
}

function handleImage(message, replyToken) {
  return replyText(replyToken, 'Got Image');
}

function handleVideo(message, replyToken) {
  return replyText(replyToken, 'Got Video');
}

function handleAudio(message, replyToken) {
  return replyText(replyToken, 'Got Audio');
}

function handleLocation(message, replyToken) {
  return replyText(replyToken, 'Got Location');
}

function handleSticker(message, replyToken) {
  return replyText(replyToken, 'Got Sticker');
}

const port = config.port;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});