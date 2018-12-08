import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.sass']
})
export class SwitchComponent implements OnInit {

  items = [1, 2, 3, 4, 5];
  current = 1;

  constructor() {
  }

  ngOnInit() {

  }

  onClick(number: number) {
    this.current = number;
  }

}
