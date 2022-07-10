import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  name: string;
  url: string;

  constructor(private route: ActivatedRoute, private router: Router, private _location: Location) { }
 
 ngOnInit() {
  const queryParamMap = this.route.snapshot.queryParamMap;

  this.url = String(queryParamMap.getAll("url"));
  this.name = String(queryParamMap.getAll("name"));

  if (this.name.split('.').pop() != 'pdf' && this.name.split('.').pop() != 'png' && this.name.split('.').pop() != 'jpg') {
    window.open(this.url);
  }
 }

 back() {
  this._location.back();
 }
}
