import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-doApp',
  templateUrl: './doApp.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DoAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNavigate1(){
    // your logic here.... like set the url 
    const url = 'https://apps.apple.com/it/app/testflight/id899247664';
    window.open(url);
  }

  onNavigate2(){
    // your logic here.... like set the url 
    const url = 'https://testflight.apple.com/join/qWSx7HBL';
    window.open(url);
  }

}
