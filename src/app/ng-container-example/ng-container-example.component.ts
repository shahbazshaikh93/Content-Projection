import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  templateUrl: './ng-container-example.component.html',
  styleUrls: ['./ng-container-example.component.scss']
})
export class NgContainerExampleComponent implements OnInit {

  public items: any[];

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'John'
      },
      {
        name: 'Alex'
      },
      {
        name: 'Rock'
      },
      {
        id: 4,
        name: 'Adam'
      },
      {
        id: 5,
        name: 'Johhn'
      }
    ];
  }

  ngOnInit(): void {
  }

}
