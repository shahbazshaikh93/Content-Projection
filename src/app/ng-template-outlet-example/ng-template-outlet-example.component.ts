import { Component, OnInit, Input, TemplateRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-example',
  templateUrl: './ng-template-outlet-example.component.html',
  styleUrls: ['./ng-template-outlet-example.component.scss']
})
export class NgTemplateOutletExampleComponent implements OnInit {

  public students: any[];

  entry = {
    label: 'This is a label',
    description: 'Desc',
  };

  contextDetails = {
    $implicit: 'World',
    contextName: 'John Doe',
    contextProfile: 'JavaScript developer',
  };

  constructor() {
    this.students = [
      {
        name: 'Jack',
        stream: 'Science'
      },
      {
        name: 'Thomas',
        stream: 'Commerce'
      },
      {
        name: 'Harry',
        stream: 'Humanities'
      },
      {
        name: 'Noah',
        stream: 'Arts'
      }
    ];
  }

  ngOnInit(): void {
  }
}
