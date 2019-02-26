function hasil(jadwal, data) {
    var temp = [];
    for (var j = 0; j < jadwal.length; j++) {
        for (var i = 0; i < data.length; i++) {
            // look for the entry with a matching `code` value

            if (data[i]['Kode MK'] == jadwal[j]['Kode MK'] && ((data[i].Kelas == jadwal[j].Kelas) || (data[i].Kelas == 'Pil'))) {
                temp.push({
                    "Hari": jadwal[j].Hari,
                    "Nama": jadwal[j].Nama,
                    "Jam": jadwal[j].Jam,
                    "Kelas": jadwal[j].Kelas,
                    "Ruang": jadwal[j].Ruang
                })
            }
        }
    }
    return temp;

};
module.exports = hasil;
/*&& (data[i].kelas == jadwal[j].Kelas || data[i].kelas == 'Pil'
  console.log(j, i)
            console.log(data[i]['Kode MK']);
            console.log(jadwal[j]['Kode MK']);
*/