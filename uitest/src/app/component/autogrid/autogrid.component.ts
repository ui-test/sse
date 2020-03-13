import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-autogrid',
  templateUrl: './autogrid.component.html',
  styleUrls: ['./autogrid.component.css']
})
export class AutogridComponent implements OnInit {

  @Input() containerTitle:String;
  @Input() containerId:String;
  @Input() containerState:String;
  @Input() containerDisplay:String;

  constructor() { }

  ngOnInit() {
  }

}
