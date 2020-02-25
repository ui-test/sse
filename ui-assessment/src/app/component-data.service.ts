import { Injectable } from '@angular/core';

@Injectable()
export class ComponentDataService {

  constructor() { }

  getComponents() {
    return [
      {
        header: 'Component #1',
        display: true,
        position: 0,
        theme: 'bg-success'
      },
      {
        header: 'Component #2',
        display: true,
        position: 1,
        theme: 'bg-danger'
      },
      {
        header: 'Component #3',
        display: true,
        position: 2,
        theme: 'bg-warning'
      },
      {
        header: 'Component #4',
        display: true,
        position: 3,
        theme: 'bg-info'
      }
    ]
  }

}
