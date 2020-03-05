import { Component, OnInit, ViewChild, TemplateRef, ViewChildren, QueryList, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ContentProjectionService } from '../content-projection.service';
@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.scss']
})
export class NgTemplateExampleComponent implements OnInit, AfterViewInit {

  public ngIfBlock = true;
  public ngIfElseBlock = true;
  public ngIfThenElseBlock = true;

  public items: any[];
  public myDir = '';

  studentList: Promise<any[]>;

  // @ViewChild('msg', { read: TemplateRef }) private msgTempRef: TemplateRef<any>;

  // @ViewChildren('cpMsg', { read: ViewContainerRef }) public queryList: QueryList<ViewContainerRef>;

  constructor(
    private contentProjectionService: ContentProjectionService
  ) {
    this.items = [
      {
        name: 'John',
        age: 25
      },
      {
        name: 'Alex',
        age: 26
      },
      {
        name: 'Rock',
        age: 27
      },
      {
        name: 'Adam',
        age: 28
      },
      {
        name: 'Johhn',
        age: 29
      }
    ];
  }

  ngOnInit(): void {
    this.studentList = this.contentProjectionService.getStudentListSlowly();
  }

  ngAfterViewInit() {
    // this.queryList.forEach((viewRef) => {
    //   viewRef.createEmbeddedView(this.msgTempRef);
    // });
  }

  public onNgIfBlock() {
    this.ngIfBlock = !this.ngIfBlock;
  }

  public onNgIfElseBlock() {
    this.ngIfElseBlock = !this.ngIfElseBlock;
  }

  public onNgIfThenElseBlock() {
    this.ngIfThenElseBlock = !this.ngIfThenElseBlock;
  }

  public trackByFn(index) {
    return index;
  }
}
