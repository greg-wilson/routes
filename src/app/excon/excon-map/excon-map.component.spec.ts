import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExconMapComponent } from './excon-map.component';

describe('ExconMapComponent', () => {
  let component: ExconMapComponent;
  let fixture: ComponentFixture<ExconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExconMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
