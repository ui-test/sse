import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blockcomponent',
  templateUrl: './blockcomponent.component.html',
  styleUrls: ['./blockcomponent.component.css']
})
export class BlockcomponentComponent implements OnInit {
  buttons: any;
  @Input() tileDetails: any;
  @Input() tiles: any;
  @Output()updateTileDetails: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.tileDetails);
    this.buttons = [
      {name: '1', cols: 2},
      {name: '2', cols: 2},
      {name: '3', cols: 2},
      {name: '4', cols: 2},
    ];
  }
  selectedTitle(selectedValue: any) {
    // tslint:disable-next-line: prefer-for-of

    this.tiles.forEach(elem => {
        if(elem.name == selectedValue){
          elem.display = !elem.display;
        }
    });

    this.updateTileDetails.emit(this.tiles);
  }
}
