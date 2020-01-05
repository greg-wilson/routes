import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerMenuComponent } from './speaker-menu.component';

describe('SpeakerMenuComponent', () => {
  let component: SpeakerMenuComponent;
  let fixture: ComponentFixture<SpeakerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
