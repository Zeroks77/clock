import { Component, DebugElement } from '@angular/core';
import { Alert, Logs } from 'selenium-webdriver';
import {Clock2} from './clock/clock.component';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { debug, debuglog } from 'util';
import { Command } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
}
)
export class AppComponent {
  title = 'clock';

  ngOnInit() {
    main();   
  }
}
function main(){
  const canvas2 = <HTMLCanvasElement>document.getElementById('Clock2');
  new Clock2(canvas2);
}