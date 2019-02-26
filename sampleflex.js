function flex1(data) {
  var arr = [];
  var arrsenin = [];
  var arrselasa = [];
  var arrrabu = [];
  var arrkamis = [];
  var arrjumat = [];
  for (var i = 0; i < data.length; i++) {


    if (data[i].Hari == "Senin") {
      arrsenin.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "\t @" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Selasa") {
      arrselasa.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "\t @" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Rabu") {
      arrrabu.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "\t @" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Kamis") {
      arrkamis.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "\t @" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Jumat") {
      arrjumat.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "\t @" + data[i].Ruang,
        "align": "end"
      })
    }
  }
  console.log("asu")
  return ({
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "bubble",
      "direction": "ltr",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
          "type": "text",
          "text": "Jadwal Kamu Semester Ini",
          "size": "md",
          "align": "center",
          "gravity": "center",
          "weight": "regular",
          "color": "#FFFFFF"
        }]
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
            "type": "box",
            "layout": "vertical",
            "contents": [{
                "type": "text",
                "text": "Senin",
                "flex": 1,
                "size": "md",
                "align": "start",
                "weight": "bold",
                "color": "#C60C30"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": arrsenin
              },
              {
                "type": "text",
                "text": "Selasa",
                "flex": 1,
                "size": "md",
                "align": "start",
                "weight": "bold",
                "color": "#C60C30"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": arrselasa
              },
              {
                "type": "text",
                "text": "Rabu",
                "flex": 1,
                "size": "md",
                "align": "start",
                "weight": "bold",
                "color": "#C60C30"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": arrrabu
              },
              {
                "type": "text",
                "text": "Kamis",
                "flex": 1,
                "size": "md",
                "align": "start",
                "weight": "bold",
                "color": "#C60C30"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": arrkamis
              },
              {
                "type": "text",
                "text": "Jumat",
                "flex": 1,
                "size": "md",
                "align": "start",
                "weight": "bold",
                "color": "#C60C30"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": arrjumat
              },



            ]
          }

        ]
      },

      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
            "type": "button",
            "height": "sm",

            "action": {
              "type": "postback",
              "label": "Dapat Gambar",
              "text": "Dapat Gambar",
              "data": "Dapat Gambar"
            },
            "color": "#D10F0F",
            "style": "primary"
          },
          {
            "type": "button",
            "height": "sm",
            "action": {
              "type": "postback",
              "label": "Dapat Teks",
              "text": "Dapat Teks",
              "data": "Dapat Tes"
            }
          }
        ]
      },
      "styles": {
        "header": {
          "backgroundColor": "#C60C30"
        },
        "body": {
          "backgroundColor": "#FFFFFF",
          "separatorColor": "#FFFFFF"
        }
      }
    }
  });

}
module.exports = flex1;