<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$tanggal = trim($data['tanggal']);
$waktu = trim($data['waktu']);
$aktivitas = trim($data['aktivitas']);

//jika nama matakuliah dan keterangan tidak kosong 
if (
    $tanggal != '' and 
    $waktu != ''  and 
    $aktivitas != '' )  {
        
    $query = mysqli_query($koneksi, "INSERT INTO keseharianku(tanggal, waktu, aktivitas) 
    values('$tanggal', '$waktu', '$aktivitas')");
    
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan); 
echo mysqli_error($koneksi);
