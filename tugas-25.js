function tugas(){
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Hasil Sebelumnya: ", angka);

  var nilaisort = angka.sort();
  console.log("Nilai Ascending: ", nilaisort);

  var nilaireverse = angka.reverse();
  console.log("Nilai Descending: ", nilaireverse);

  var isi = angka.filter(function(nilai){
    return nilai >= 10;
  });
  console.log("Nilai Filter: ", isi);
}

tugas();
