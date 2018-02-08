import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HummushomeComponent } from './hummushome.component';

describe('HummushomeComponent', () => {
  let component: HummushomeComponent;
  let fixture: ComponentFixture<HummushomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HummushomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HummushomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
