var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1, 4, "Roman Alamsyah Elsharawi", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

var pisah = [];
pisah = input[3].split("/");


function dataHandling(input) {
 console.log(input)

  switch(pisah[1]) {
    case '01' : console.log('Januari');
      break;
    case '02' : console.log('Februari');
      break;
    case '03' : console.log('Maret');
      break;
    case '04' : console.log('April');
      break;
    case '05' : console.log('Mei');
      break;
    case '06' : console.log('Juni');
      break;
    case '07' : console.log('Juli');
      break;
    case '08' : console.log('Agustus');
      break;
    case '09' : console.log('September');
      break;
    case '10' : console.log('Oktober');
      break;
    case '11' : console.log('November');
      break;
    case '12' : console.log('Desember');
      break;
  } console.log(pisah[1])
}

dataHandling(input)


pisah.sort(function(a, b){return b-a});
console.log(pisah);

var gabung = pisah.join('-');
console.log(gabung);

var limit = String(input[1])
var limit = input[1].slice(0, 15);
console.log(limit);
