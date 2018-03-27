import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-from',
  templateUrl: './hero-from.component.html',
  styleUrls: ['./hero-from.component.css']
})
export class HeroFromComponent implements OnInit {

  powers: Array<string> = [
    "Really smart",
    "Super flexible",
    "Super Hot",
    "Weather change"
  ];
  model: Hero = new Hero(
    1,
    "Dr. IQ",
    this.powers[0],
    "Chuck Overstreet"
  );
  submitted: boolean = false; //még nem lett elküldve



  constructor() {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

}
