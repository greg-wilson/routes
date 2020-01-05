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
    // seems that child routes to named outlets are kinda weird when lazy loaded,
    // need to specify the parent route to get this to work. Not an issue for eager loaded modules
    this.router.navigate(['/speakers/speakers', { outlets: { speakerOutlet: ['speakermap'] } }]);
  }

}
