import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindAngComponent } from './bind-ang.component';

describe('BindAngComponent', () => {
  let component: BindAngComponent;
  let fixture: ComponentFixture<BindAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
