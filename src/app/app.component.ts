import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  feeds: Array<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }


  getData() {
    const url =
      'https://api.bellita.co.in/api/v1/getfeedsgroupby/all/0/n?token=160f7dcb51d7f1df4d2decbe5f0299cd82b552c3&filter={"order":"id desc","limit":"20","skip":"0"} ';
    this.http.get<any[]>(url).subscribe(
      (result) => {
        this.feeds = result['data'];
        console.log(this.feeds);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
