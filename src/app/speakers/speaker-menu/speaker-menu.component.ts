import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-menu',
  templateUrl: './speaker-menu.component.html',
  styleUrls: ['./speaker-menu.component.scss']
})
export class SpeakerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Demo using the router serivce to navigate
   */
  navigate() {
    this.router.navigate(['/speakers', { outlets: { speakerOutlet: ['speakermap'] } }]);
  }

}
