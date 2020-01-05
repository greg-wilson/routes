import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExconDevicesComponent } from './excon-devices.component';

describe('ExconDevicesComponent', () => {
  let component: ExconDevicesComponent;
  let fixture: ComponentFixture<ExconDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExconDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExconDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
