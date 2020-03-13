import { Component, OnInit } from '@angular/core';
import { dummyData } from './constant/local'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'uitest';
  private dataSet:any ;

  constructor() { }

  ngOnInit() {
    this.dataSet = dummyData;
  }


}
