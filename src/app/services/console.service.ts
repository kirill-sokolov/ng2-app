import {Injectable} from '@angular/core';

@Injectable()
export class ConsoleService {

  constructor() {
  }

  log(str: string) {
    console.log(str);
  }
}
