import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.sass']
})
export class MyFormsComponent implements OnInit {

  answers = [
    {type: 'yes', text: 'Да'},
    {type: 'no', text: 'Нет'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
