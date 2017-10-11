var app = new Vue({
  el: '#app',
  data: {
    kanas: []
  }
});

var kana_table = {
  "A": "א",
  "I": "י",
  "U": "ו",
  "E": "י",
  "O": "ו",
  "B": "ב",
  "G": "ג",
  "D": "ד",
  "H": "ה",
  "V": "ו",
  "Z": "ז",
  "J": "ז",
  "T": "ט",
  "Y": "י",
  "L": "ל",
  "M": "מ",
  "N": "נ",
  "S": "ס",
  "P": "פ",
  "K": "ק",
  "R": "ר"
}

document.addEventListener('keydown', function(e) {
  var chr = String.fromCharCode(e.keyCode);
  var kana = kana_table[chr];
  if (kana !== undefined) {
    app.kanas.push(kana);
  }
});