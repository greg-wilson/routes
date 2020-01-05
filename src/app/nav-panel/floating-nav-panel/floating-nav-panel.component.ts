import {
  Component, OnInit, ElementRef,
  ViewChild, Input, AfterViewInit,
  ChangeDetectionStrategy, OnChanges,
  SimpleChanges, Renderer2
} from '@angular/core';

import { MenuItem } from '../menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './floating-nav-panel.component.html',
  styleUrls: ['./floating-nav-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPanelComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  position = 'left';

  @Input()
  menuItems: Array<MenuItem>;

  @ViewChild('navcontent', { static: false })
  navcontent: ElementRef;

  @ViewChild('wrapper', { static: false })
  wrapper: ElementRef;

  hideContent = false;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    console.log(this.menuItems);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  show(item: MenuItem) {
    // this.hideContent = !this.hideContent;
    if (this.position === 'right') {
      const pixels = this.hideContent ? 'calc(100% - 40px)' : 'calc(100% - ' + item.width + 'px)';
      this.renderer.setStyle(this.wrapper.nativeElement, 'left', pixels);
      const contentWidth = item.width ? item.width : 300;
      this.renderer.setStyle(this.navcontent.nativeElement, 'width', contentWidth + 'px');
    }
    console.log('Width2: ' + this.wrapper.nativeElement.clientWidth);
    // ['/speakers', {outlets: {'list': ['speakersList'], 'bio': ['none']}}]"
    this.router.navigate(['/nav', { outlets: { navoutlet: ['bravo'] } }]);

  }

  isRight(): boolean {
    return this.position === 'right';
  }
}
