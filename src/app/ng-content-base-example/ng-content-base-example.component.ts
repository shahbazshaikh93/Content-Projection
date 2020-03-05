import { Component, OnInit, ViewChild } from '@angular/core';
import { NgContentExampleComponent } from '../ng-content-example/ng-content-example.component';

@Component({
  selector: 'app-ng-content-base-example',
  templateUrl: './ng-content-base-example.component.html',
  styleUrls: ['./ng-content-base-example.component.scss']
})
export class NgContentBaseExampleComponent implements OnInit {

  @ViewChild(NgContentExampleComponent) ngContentExampleComponent: NgContentExampleComponent;


  public lists: any[];

  constructor() {
    this.lists = [
      {
        name: 'Shahbaz',
        age: 26,
      },
      {
        name: 'Naim',
        age: 24
      }
    ];
  }

  ngOnInit(): void {
  }

}
