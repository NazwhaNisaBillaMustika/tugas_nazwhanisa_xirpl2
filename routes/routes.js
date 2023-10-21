//import express
import  express  from "express";

//init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jenis/:agama/:alamat/:telepon/:email/:hobi/:cita', (req, res)=>{
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var Tanggal_lahir = req.params.tanggal;
    var Jenis_kelamin = req.params.jenis;
    var Agama = req.params.agama;
    var alamat = req.params.alamat;
    var Telepon = req.params.telepon;
    var Email = req.params.email;
    var Hobi = req.params.hobi;
    var Cita_Cita = req.params.cita;
    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : ' + tempat_lahir + '<br>' +
        'Tanggal Lahir : ' + Tanggal_lahir +'<br>' +
        'Jenis Kelamin : ' + Jenis_kelamin +'<br>' +
        'Agama : ' + Agama +'<br>' +
        'Alamat : ' + alamat + '<br>' +
        'Telepon : ' + Telepon + '<br>' +
        'Email : ' + Email+'<br>' +
        'Hobi : '+ Hobi + '<br>' +
        'Cita-Cita : ' + Cita_Cita  );
});
router.get('/tes/:nama/:kelas/:pts/:pas',(req, res)=>{
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) /2;
res.send(
    'nama : ' + nama + '<br>'+
    'kelas : '+ kelas + '<br>'+
    'Nilai PTS : '+ pts + '<br>'+
    'Nilai PAS : '+ pas + '<br>'+
    'Nilai rapot : '+ rapot
)
});
router.get('/aritmatika' , (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5
    var tambah = bilangan1 + bilangan2;
    var kurang = bilangan1 - bilangan2;
    var bagi = bilangan1 / bilangan2;
    var kali = bilangan1 * bilangan2;
    res.send (
       '<h3>Penjumlahan</h3>' +
       'bilangan ke1 : ' + bilangan1 + '<br>' +
       'bilangan ke2 : ' + bilangan2 + '<br>' +
       'hasil : ' + tambah + '<hr></hr><br>' +


       '<h3>Pengurangan</h3>' +
       'bilangan ke1 : ' + bilangan1 + '<br>'+
       'bilangan ke2 : ' + bilangan2 + '<br>'+
       'hasil : ' + kurang + '<hr></hr><br>'+


       '<h3>Pembagian</h3>' +
       'bilangan ke1 : ' + bilangan1 + '<br>'+
       'bilangan ke2 : ' + bilangan2 + '<br>'+
       'hasil : ' + bagi + '<hr></hr><br>' +


       '<h3>Perkalian</h3>' +
       'bilangan ke1 : ' + bilangan1 + '<br>'+
       'bilangan ke2 : ' + bilangan2 + '<br>'+
       'hasil : ' + kali + '<hr></hr><br>'
    );
});
router.get('/bangun_datar' , (req, res) => {
        var sisi =7;
        var panjang = 15;
        var lebar = 20;
        var alas = 30;
        var tinggi = 25;
        var jari_jari = 35;
        var persegi = sisi *  sisi ;
        var persegi_panjang = panjang * lebar;
        var segitiga = 1/2 * alas * tinggi;
        var lingkaran = 2 * 3.14 * jari_jari;
        res.send (
            '<h2> Rumus Bangun Datar </h2> <br>' +
            '<h2>Rumus persegi </h2>' +
            'Nilai Sisi : '+ sisi + '<br>' +
            'Rumus persegi  : sisi x sisi' + '<br>' +
            'hasil : ' + persegi + '<hr></hr><br>'+


            '<h2>Rumus persegi  panjang </h2>' +
            'Nilai panjang : '+ panjang + '<br>' +
            'nilai lebar : ' + lebar + '<br>' +
            'Rumus persegi panjang  : panjang x lebar' + '<br>' +
            'hasil : ' + persegi_panjang+ '<hr></hr><br>'+


            '<h2>Rumus segitiga </h2>' +
            'Nilai alas : '+ alas + '<br>' +
            'Nilai tinggi : '+ tinggi + '<br>' +
            'Rumus segitigaa  : 1/2 x alas x tinggi' + '<br>' +
            'hasil : ' + segitiga + '<hr></hr><br>'+


            '<h2>Rumus lingkaran</h2>' +
            'Nilai π : '+ 3.14 + '<br>' +
            'nilai jari-jari : ' + jari_jari + '<br>' +
            'Rumus lingkaran : 2 x π x jari-jari' + '<br>' +
            'hasil : ' + lingkaran+ '<hr></hr><br>' );
});
router.get('/bersarang/:nama/:jurusan/:kelas/:keterangan', (req, res) =>{
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;
    var keterangan = req.params.keterangan;

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = "Anda Kelas 10 RPL";
            if (keterangan == '10 RPL 1') {
                var ruangan = "Anda 10 RPL 1";
            } else if (keterangan == '10 RPL 2') {
                var ruangan = "Anda 10 RPL 2";
            } else if (keterangan == '10 RPL 3') {
                var ruangan = "Anda 10 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else if (kelas == '11 RPL') {
            var ket = "Anda Kelas 11 RPL";
            if (keterangan == '11 RPL 1') {
                var ruangan = "Anda 11 RPL 1";
            } else if (keterangan == '11 RPL 2') {
                var ruangan = "Anda 11 RPL 2";
            } else if (keterangan == '11 RPL 3') {
                var ruangan = "Anda 11 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else if (kelas == '12 RPL') {
            var ket = "Anda Kelas 12 RPL";
            if (keterangan == '12 RPL 1') {
                var ruangan = "Anda 12 RPL 1";
            } else if (keterangan == '12 RPL 2') {
                var ruangan = "Anda 12 RPL 2";
            } else if (keterangan == '12 RPL 3') {
                var ruangan = "Anda 12 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else {
            var ket = "Anda ALumni Cuyy";
        }
    } if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = "Anda Kelas 10 TKRO";
        } else if (kelas == '11 TKRO') {
            var ket = "Anda Kelas 11 TKRO";
        } else if (kelas == '12 TKRO') {
            var ket = "Anda Kelas 12 TKRO";
        } else {
            var ket = "Anda ALumni Cuyy";
        }
        var Ket = "Anda Jurusan TKRO";
    } if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = "Anda Kelas 10 TBSM";
        } else if (kelas == '11 TBSM') {
            var ket = "Anda Kelas 11 TBSM";
        } else if (kelas == '12 TBSM') {
            var ket = "Anda Kelas 12 TBSM";
        } else {
            var ket = "Anda Alumni Cuyy";
        }
    } else {
        var Ket = "Jurusan Tidak Tersedia";
    }
    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + jurusan + '<br>' +
        'Kelas : ' + ket + '<br>' +
        'Keterangan : ' + ruangan + '<br>'
    );
});
router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) =>{
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = parseInt(req.params.jumlah);
    if (jenis == 'makanan') {
        if (pesanan == "nasi goreng") {
            var harga = 20000;
        } else if (pesanan == "mie goreng") {
            var harga = 30000;
        } else if (pesanan == "ayam goreng") {
            var harga = 40000;
        } else {
            var harga = "Tidak Ada Harga";
        }
    } else if (jenis == 'minuman') {
        if (pesanan == "air mineral") {
            var harga = 10000;
        } else if (pesanan == "jus") {
            var harga = 20000;
        } else if (pesanan == "kopi") {
            var harga = 30000;
        } else {
            var harga = "Tidak Ada Harga";
        }
    } else {
        var jenis = "Anda Tidak Memilih Jenis";
    }
    var total = jumlah * harga;
        if (total >= 100000) {
            var diskon = total - (total * 0.5);
            var ket ='Anda Mendapatkan Diskon 50%';
        } else {
            var diskon = 0;
            var ket ='Anda Tidak Mendapatkan Diskon';
        }
        var total_pembayaran = total - diskon;
res.send(
    '<h1>Starbucks Lokal</h1><br>' +
    'Nama Pembeli : ' + nama + '<br>' +
    'Tanggal : ' + tanggal + '<br>' +
    'Jenis : ' + jenis + '<br>' +
    'Pesanan : ' + pesanan + '<br>' +
    'Harga : ' + harga + '<br>' +
    'Jumlah : ' + jumlah + '<br>' +
    '<br>' +
    '-----------------------------------------------------------<br>'+
    '<br>' +
    'Total : ' + total + '<br>' +
    'Diskon 50% : ' + diskon + '<br>' +
    'Keterangan : ' + ket + '<br>' +
    'Total Pembayaran : ' + total_pembayaran + '<br>' +
    '<br>' +
    '>>>>>>>>>>TERIMA KASIH<<<<<<<<<<<<<<br>'
);
});
router.get('/sample', (req, res) =>{
    res.send(
        '<h3>Selamat Datang</h3>'
    );
});
//export default router
export default router;