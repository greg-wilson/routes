import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerMapComponent } from './speaker-map.component';

describe('SpeakerMapComponent', () => {
  let component: SpeakerMapComponent;
  let fixture: ComponentFixture<SpeakerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
