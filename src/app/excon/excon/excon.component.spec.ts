import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExconComponent } from './excon.component';

describe('ExconComponent', () => {
  let component: ExconComponent;
  let fixture: ComponentFixture<ExconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
