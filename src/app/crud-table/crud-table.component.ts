import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/de.1.clubs.json";
  multiplier: number = 1;
  lastKey: string = "";



  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: object) => {
      this.clubs = data.clubs;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
