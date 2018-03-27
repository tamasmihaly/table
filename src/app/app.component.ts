import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero Form';
  oData: Observable<any>;

  constructor() {/*
    this.oData = new Observable(subscriber => {
      setInterval(() => {
        subscriber.next(Math.random())
      }, 1e3);
      //subscriber.error({ type: 2, message: 'Error in response' });
      setTimeout(() => {
        subscriber.complete();
      }, 7e3);

    })

    this.oData.subscribe(
      data => console.log(data),
      error => console.error(error),
      () => console.log("a buli véget ért")
    )

  */}

}


