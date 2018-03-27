import { Component, OnInit } from '@angular/core';
import { CrmethodService } from '../crmethod.service';
import { Hero } from "../hero";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  heroes: Array<Hero> = [];
  newHero: Hero = new Hero();


  constructor(private crService: CrmethodService) {
    this.heroes = this.crService.heroes;
  }

  addHero() {
    let heroClone = {};

    for (const key in this.newHero) {
      heroClone[key] = this.newHero[key]
    }

    this.heroes.push(this.newHero)
  }
  deleteRow(i) {
    this.heroes.splice(i, 1);
  }

  ngOnInit() {
  }

}
