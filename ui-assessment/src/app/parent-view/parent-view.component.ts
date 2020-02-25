import { Component, OnInit } from '@angular/core';
import { ComponentClass } from '../component-class';
import { ComponentDataService } from '../component-data.service';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {

  componentDivs: ComponentClass[] = [];

  retriveComponentDivs: ComponentClass[] = [];

  constructor(public componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDivs = this.componentDataService.getComponents();
  }

  displayAll() {
    this.componentDivs = this.componentDataService.getComponents();
    this.retriveComponentDivs = [];
  }

  updatePage(buttonNumber: number) {

    let index = this.componentDivs.findIndex(element => element.position == buttonNumber)
    if (index == -1) {    // Retrive hidden Component
      this.componentDivs.splice(buttonNumber, 0, this.retriveComponentDivs.find(retrive => retrive.position == buttonNumber));
    } else {              // Hide selected button Component
      let duplicate = this.retriveComponentDivs.findIndex(duplicate => duplicate.position == this.componentDivs[index].position);
      if (duplicate == -1) {  // Retrive Array to hold unique value 
        this.retriveComponentDivs.push(this.componentDivs[index]);
      }       //Re-position Components
      this.componentDivs.splice(index, 1);
    }
  }

}