var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1, 4, "Roman Alamsyah Elsharawi", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");


function dataHandling(input) {
 console.log(input)
 console.log(input[3])
}

dataHandling(input)