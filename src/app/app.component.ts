import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearn';

  user = {name: 'vasia', age: 124};

//   onInputAction(input: HTMLInputElement): void {
//     console.log(this.title);
//     console.log(input);
//   }
// }
//

//   submit(form: HTMLFormElement): void {
//     console.log(form);
//   }

//   submit(form: NgForm): void {
//     console.log(form);
//   }


  // name = new FormControl('vasia');
  // age = new FormControl(123);
  // myForm = new FormGroup({
  //   name: this.name,
  //   age: this.age
  // });
  //
  // xxx(myForm: FormGroup): void {
  //   console.log(myForm);
  // }

  name = new FormControl('', [Validators.required, Validators.minLength(10), this.customValidator]);
  age = new FormControl('');
  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });


  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }

  customValidator(inputData: AbstractControl): any {
    console.log('test');
    if (inputData.value === 'fuck') {
      console.log(inputData);

      return {error: true, msg: 'fuck is present'};
    } else {
      return null;
    }
  }


}

