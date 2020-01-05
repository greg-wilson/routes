import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Speaker } from '../speaker';
import { SpeakersService } from '../speakers.service';


@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  speakers: Speaker[] = [];
  selectedSpeaker: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SpeakersService
  ) { }

  ngOnInit() {
    this.speakers = this.service.getSpeakers();
    this.route.parent.children
      .find(r => r.outlet === 'bio')
      .params
      .subscribe((params: any) => {
        if (params.id) {
          this.selectedSpeaker = +params.id;
        }
      });
  }

  showBio(id: number) {
    this.selectedSpeaker = id;
    this.router.navigate(['/speakersBio/speakers', { outlets: { bio: [id] } }]);
  }
}
