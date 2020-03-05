import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  tiles: any;


ngOnInit() {
this.tiles = [{
    "name": 1,
    "display": true

  },
  {
    "name": 2,
    "display": true

},
{
  "name": 3,
  "display": true

},
{
  "name": 4,
  "display": true

}];
}
updateTileDetails(updatedTileDetails: any){
  this.tiles = updatedTileDetails;

}

}
