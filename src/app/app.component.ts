import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { dummyData } from './constant/local'
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'uitest';
  dataSet:any ;

  constructor(private commonSVC:CommonService,private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSet = dummyData;
  }

  public reset(){
    dummyData.forEach(element => {
      return element.Display = true;
    });
    this.dataSet = dummyData;
   // this.cdr.detectChanges();
  }


}
