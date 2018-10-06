import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveaucomponentComponent } from './nouveaucomponent.component';

describe('NouveaucomponentComponent', () => {
  let component: NouveaucomponentComponent;
  let fixture: ComponentFixture<NouveaucomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveaucomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveaucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
