import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExconCamerasComponent } from './excon-cameras.component';

describe('ExconCamerasComponent', () => {
  let component: ExconCamerasComponent;
  let fixture: ComponentFixture<ExconCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExconCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExconCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
