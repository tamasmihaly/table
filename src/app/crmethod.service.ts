import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class CrmethodService {

  heroes: Array<Hero> = [
    new Hero(1, "Superman", "Laser eye", "Clark Kent");
    new Hero(2, "Batman", "Strong", "Wayne")
  ];

  constructor() { }
}
