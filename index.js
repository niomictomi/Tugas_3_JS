// TUGAS JS 3

// 1
var argu  = "Argument Terambil";

function FungsiSatu() {
  argu = "Argument Dirubah";

  return argu;
}

function FungsiDua (k, l) {
  console.log(argu);
  console.log(FungsiSatu());
}

FungsiDua();
