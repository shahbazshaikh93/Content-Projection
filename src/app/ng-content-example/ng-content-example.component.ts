import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  templateUrl: './ng-content-example.component.html',
  styleUrls: ['./ng-content-example.component.scss']
})
export class NgContentExampleComponent implements OnInit, AfterContentInit {

  @ContentChild('ref') contentChild;

  public message: string;

  constructor() {
    this.message = 'Welcome to our restaurants ! We are best in service.';
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log('Shahu', this.contentChild);
  }
}
