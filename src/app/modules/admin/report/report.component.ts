import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Pikerv } from 'app/core/piker/Piker.service';

@Component({
    selector     : 'example',
    templateUrl  : './report.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ReportComponent
{
    reportpage = '0';

    reportype: string[];
  
    constructor(private router: Router, public _piker: Pikerv) {
      _piker.piker('reportype').subscribe((resp) => { this.reportype = resp.value });
    }
  
    ngOnInit(): void {
    }
  
}

