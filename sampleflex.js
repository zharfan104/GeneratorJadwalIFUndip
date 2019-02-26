function flex1(data) {
  console.log(data)
  var arr = [];
  var arrsenin = [];
  var arrselasa = [];
  var arrrabu = [];
  var arrkamis = [];
  var arrjumat = [];
  var Senin = "Senin : ";
  var Selasa = " Selasa : ";
  var Rabu = " Rabu : ";
  var Kamis = " Kamis : ";
  var Jumat = " Jumat : ";


  for (var i = 0; i < data.length; i++) {

    if (data[i].Hari == "Senin") {
      Senin += " " + data[i].Nama + " (" + data[i].Kelas + ")," + data[i].Jam + "@" + data[i].Ruang;
      arrsenin.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "@" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Selasa") {
      Selasa += " " + data[i].Nama + " (" + data[i].Kelas + ")," + data[i].Jam + "@" + data[i].Ruang;

      arrselasa.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "@" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Rabu") {
      Rabu += " " + data[i].Nama + " (" + data[i].Kelas + ")," + data[i].Jam + "@" + data[i].Ruang;

      arrrabu.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "@" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Kamis") {
      Kamis += " " + data[i].Nama + " (" + data[i].Kelas + ")," + data[i].Jam + "@" + data[i].Ruang;

      arrkamis.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "@" + data[i].Ruang,
        "align": "end"
      })
    }
    if (data[i].Hari == "Jumat") {
      Jumat += " " + data[i].Nama + " (" + data[i].Kelas + ")," + data[i].Jam + "@" + data[i].Ruang;

      arrjumat.push({
        "type": "text",
        "text": data[i].Nama + " (" + data[i].Kelas + ")",
        "align": "start",
        "weight": "bold",
        "size": "sm",
      }, {
        "type": "text",
        "text": data[i].Jam + "@" + data[i].Ruang,
        "align": "end"
      })
    }
  }
  if (arrsenin === undefined || arrsenin.length == 0) {
    arrsenin.push({
      "type": "text",
      "text": "Gabut",
      "align": "start",
      "weight": "bold",
      "size": "sm",
    })
  }

  if (arrselasa === undefined || arrselasa.length == 0) {
    arrselasa.push({
      "type": "text",
      "text": "Gabut",
      "align": "start",
      "weight": "bold",
      "size": "sm",
    })
  }
  if (arrrabu === undefined || arrrabu.length == 0) {
    arrrabu.push({
      "type": "text",
      "text": "Gabut",
      "align": "start",
      "weight": "bold",
      "size": "sm",
    })
  }
  if (arrkamis === undefined || arrkamis.length == 0) {
    arrkamis.push({
      "type": "text",
      "text": "Gabut",
      "align": "start",
      "weight": "bold",
      "size": "sm",
    })
  }
  if (arrjumat === undefined || arrjumat.length == 0) {
    arrjumat.push({
      "type": "text",
      "text": "Gabut",
      "align": "start",
      "weight": "bold",
      "size": "sm",
    })
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