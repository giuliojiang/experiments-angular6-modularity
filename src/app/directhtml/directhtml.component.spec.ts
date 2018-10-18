import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecthtmlComponent } from './directhtml.component';

describe('DirecthtmlComponent', () => {
  let component: DirecthtmlComponent;
  let fixture: ComponentFixture<DirecthtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecthtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecthtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
