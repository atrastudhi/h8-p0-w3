function balikString(hello) {
  var balik = '';
  for(var i = hello.length-1; i >= 0; i--) {
  balik += hello[i];
  } return balik
}

console.log(balikString('Hello Wolrd!'))