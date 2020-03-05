import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentBaseExampleComponent } from './ng-content-base-example.component';

describe('NgContentBaseExampleComponent', () => {
  let component: NgContentBaseExampleComponent;
  let fixture: ComponentFixture<NgContentBaseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentBaseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentBaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
