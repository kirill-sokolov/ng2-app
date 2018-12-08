import {Component, Input} from '@angular/core';
import {ConsoleService} from "../services/console.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent {

  constructor(private consoleService: ConsoleService) {

  }

  @Input() car;

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }

}


// import {
//   Component,
//   OnInit,
//   Input,
//   ViewChild,
//   ElementRef,
//   ContentChild,
//   OnChanges,
//   SimpleChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   OnDestroy
// } from '@angular/core';
//
// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   // template: `
//   //   <p class="car">
//   //     car works!
//   //   </p>
//   // `,
//   styleUrls: ['./car.component.sass']
//   // styles: [`
//   //   .car {
//   //     color: #fff
//   //   }
//   // `]
// })
// export class CarComponent implements OnInit {
// // export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
//
//   // name = "Mitsubisi";
//   year = "2009";
//   @Input('carItem') carAlias: { name: String, year: number };
//   @Input('name') name: String;
//   @ContentChild('carText') carText: ElementRef;
//
//   constructor() {
//
//   }
//
//   // ngOnChanges(changes: SimpleChanges) {
//   //   console.debug('ngOnChanges', changes);
//   // }
//
//   ngOnInit() {
//
//   }
//
//   // ngDoCheck() {
//   //   console.debug('ngDoCheck');
//   // }
//   //
//   // ngAfterContentInit() {
//   //   console.debug('ngAfterContentInit');
//   // }
//   //
//   // ngAfterContentChecked() {
//   //   console.debug('ngAfterContentChecked');
//   // }
//   //
//   // ngAfterViewInit() {
//   //   console.debug('ngAfterViewInit');
//   // }
//   //
//   // ngAfterViewChecked() {
//   //   console.debug('ngAfterViewChecked');
//   // }
//   //
//   // ngOnDestroy() {
//   //   console.debug('onDestroy');
//   // }
//
//   getName() {
//     return this.name;
//   }
//
// }
