import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.sass']
})
export class MyFormsComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  charsCount = 8;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  checkForLength(control: FormControl) {
    if (control.value.length < this.charsCount) {
      return {'lengthError': true}
    }

    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({
            'emailIsUsed': true
          })
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }
}
