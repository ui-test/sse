import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentClass } from '../component-class';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  @Input() componentDiv: ComponentClass;
  @Output() buttonClicked = new EventEmitter<number>();

  totalButtons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
  constructor() { }

  ngOnInit() {
  }

  buttonClick(name) {
    this.buttonClicked.emit(name);
  }

}
