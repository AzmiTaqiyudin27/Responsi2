import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-keseharianku-tambah',
  templateUrl: './keseharianku-tambah.page.html',
  styleUrls: ['./keseharianku-tambah.page.scss'],
})
export class kesehariankuTambahPage implements OnInit {
  id: any;
  tangggal: any;
  waktu: any;
  aktivitas: any;

  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addkeseharianku() {
    let data = {
      tangggal: this.tangggal,
      waktu: this.waktu,
      aktivitas: this.aktivitas,
    };
    this._apiService.tambah(data, '/tambahkeseharianku.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.tangggal = '';
        this.waktu = '';
        this.aktivitas = '';
        this._apiService.notif('berhasil input keseharianku');
        this.router.navigateByUrl('/keseharianku');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input keseharianku');
      },
    });
  }
}
