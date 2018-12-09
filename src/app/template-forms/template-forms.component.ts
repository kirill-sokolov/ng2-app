import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.sass']
})
export class TemplateFormsComponent implements OnInit {


  @ViewChild('form') form: NgForm;

  answers = [
    {type: 'yes', text: 'Да'},
    {type: 'no', text: 'Нет'}
  ];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {};
  isSubmitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    // console.debug('submitted', form);
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
  }

  addRandEmail() {
    const randEmail = 'ggg@one.lv';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: this.defaultCountry,
    //   answer: this.defaultAnswer
    // });
    this.form.form.patchValue({
      user: {
        email: randEmail
      }
    });
  }
}
