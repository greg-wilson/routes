import { Component, AfterViewInit } from '@angular/core';
import { SpeakersService } from './speakers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [SpeakersService]
})
export class SpeakersComponent implements AfterViewInit {


  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
    this.router.navigate(['/speakersBio/speakers', { outlets: { list: ['speakersList'], bio: ['none'] } }]);
  }
}
