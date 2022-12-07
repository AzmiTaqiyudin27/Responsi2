<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$id = trim($data['id']);

$tanggal = trim($data['tanggal']);
$waktu = trim($data['waktu']);
$aktivitas = trim($data['aktivitas']);
//jika nama matakuliah dan keterangan tidak kosong 
if ($id != '' and
    $tanggal != '' and 
    $waktu != ''  and 
    $aktivitas != '' ) {
        
    $query = mysqli_query($koneksi, "UPDATE keseharianku at SET tanggal='$tanggal',waktu='$waktu', aktivitas='$aktivitas' WHERE id='$id'");
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}
echo json_encode($pesan); 
echo mysqli_error($koneksi);
