import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-keseharianku-edit',
  templateUrl: './keseharianku-edit.page.html',
  styleUrls: ['./keseharianku-edit.page.scss'],
})
export class kesehariankuEditPage implements OnInit {
  id: any;
  tanggal: any;
  waktu: any;
  aktivitas: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilkeseharianku(this.id);
    });
  }

  ngOnInit() {}

  ambilkeseharianku(id: any) {
    this._apiService.lihat(id, '/lihatkeseharianku.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let keseharianku = hasil;
        this.tanggal = keseharianku.tanggal;
        this.waktu = keseharianku.waktu;
        this.aktivitas = keseharianku.aktivitas;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }

  editkeseharianku() {
    let data = {
      id: this.id,
      tanggal: this.tanggal,
      waktu: this.waktu,
      aktivitas: this.aktivitas,
    };
    this._apiService.edit(data, '/edit.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.tanggal = '';
        this.waktu = '';
        this.aktivitas = '';
        this._apiService.notif('Berhasil Edit Data');
        this.router.navigateByUrl('/keseharianku');
      },
      error: (err: any) => {
        this._apiService.notif('Gagal Edit Data');
      },
    });
  }
}
