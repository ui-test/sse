import { Component, OnInit, Input } from '@angular/core';
import { dummyData, buttons } from "../../constant/local";
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-autogrid',
  templateUrl: './autogrid.component.html',
  styleUrls: ['./autogrid.component.css']
})
export class AutogridComponent implements OnInit {

  @Input() Title: String;
  @Input() Id: String;
  @Input() State: String;
  @Input() Display: String;

  buttons: any = buttons;

  constructor(private commonSVC: CommonService) {
    //this.toggleState.bind(this);
  }

  ngOnInit() {

  }

  public toggleContainer(id) {
    try {
      let selectedBtnId = id;
      dummyData.forEach((el) => {
        if (selectedBtnId === el.Id) {
          this.toggleState(el.Id)
        }
      });
      this.commonSVC.sendSubjectData(dummyData);
    } catch (error) {
      console.log(error);
    }
  }

  public toggleState(clickedButtonID) {
    try {
      let selectedObj = dummyData[clickedButtonID];
      (selectedObj.Display) ? selectedObj.Display = false : selectedObj.Display = true;
    } catch (error) {
      console.log(error);
    }
  }

}
