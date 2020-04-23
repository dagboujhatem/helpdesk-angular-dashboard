import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesShowComponent } from './acces-show.component';

describe('AccesShowComponent', () => {
  let component: AccesShowComponent;
  let fixture: ComponentFixture<AccesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
