import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearn';

  asyncValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('this is async pipe');
    }, 1000);
  });

  date = new Date();

  price = 1000;

  users = {name: 'Tomas', age: 122};
  titleCase = 'angular learn fast';
  e = 2.3234235235233441;
}
