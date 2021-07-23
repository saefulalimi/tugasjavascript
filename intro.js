/* Soal 1 , soal 5 dan soal 3*/

// nama 
let nama = "Abdul Latif Mubasir";
console.log(nama);

// asal daerah 
let asal_daerah = 'Cilacap , Jawa Tengah';
console.log(asal_daerah);

// tanggal lahir 
let tanggal_lahir = '02 April 2003';
console.log(tanggal_lahir);

// umur 
let umur = '18';
console.log(umur);

// posisi pekerjaan 
let posisi_pekerjaan = 'Fresh Graduate';
console.log(posisi_pekerjaan);

/* 
    Soal 4
    fitur ini untuk mendapatkan nama dan asal negara dari user
    kemudian check apakan data sudah benar
    jika sudah benar tampilkan alert
*/

// Soal 2 
let nama_user = prompt("Siapa nama kamu?");
let asal_negara = prompt('Asal Negara dari mana?');

let check_confirm = confirm('Apakah data yang diisi sudah benar?');
if(check_confirm) {
    alert('Terima Kasih sudah mengisi form');
}

/* Soal Nomer 6 */
let penjumlahan = 25 + 10;
let perkalian = 100 * 2;
let pembagian = 99 / 2;
let modulus = 99 % 2;