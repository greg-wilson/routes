import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerContentComponent } from './speaker-content.component';

describe('SpeakerContentComponent', () => {
  let component: SpeakerContentComponent;
  let fixture: ComponentFixture<SpeakerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
