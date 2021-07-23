let divisi = "CEO";
console.log(divisi);
if(divisi === "CEO") {
    console.log("Memimpin perusahaan");
} else if(divisi === "CTO") {
    console.log("Direktur IT");
} else if(divisi === "HR") {
    console.log("Rekrutmen untuk calon pegawai baru");
} else if(divisi === "PROGRAMMER") {
    console.log("mengembangkan aplikasi");
}

/* Soal 2 */
let a = 2;
let b = 5;

if(a < b) {
    console.log(`${a} lebih kecil ${b}`);
} else if(a > b) {
    console.log(`${a} lebih besar ${b}`);
} else if(a === b) {
    console.log(`${a} sama dengan ${b}`)
}

/* Soal 3 */
let hari = "1";
switch (hari) {
    case "1":
        console.log('Senin');
        break;
    case "2":
        console.log('Selasa');
        break;
    case "3":
        console.log('Rabu');
        break;
    case "4":
        console.log('Kamis');
        break;
    case "5":
        console.log('Jumat');
        break;
    case "6":
        console.log('Sabtu');
        break;
    case "7":
        console.log('Minggu');
        break;
    default:
        console.log('Maaf, hari tidak ada hari ke-' + hari);
}

/* Soal 4 */
let arah = "UP";
switch (arah) {
    case "UP":
        console.log('Karakter berjalan ke atas');
        break;
    case "RIGHT":
        console.log('Karakter berjalan ke kanan');
        break;
    case "BOTTOM":
        console.log('Karakter berjalan ke bawah');
        break;
    case "LEFT":
        console.log('Karakter berjalan ke kiri');
        break;
    default:
        console.log('Maaf, tidak ada arah ' + arah);
}