import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/nav-panel/menu-item';

@Component({
  selector: 'app-excon',
  templateUrl: './excon.component.html',
  styleUrls: ['./excon.component.scss']
})
export class ExconComponent implements OnInit {

  @ViewChild('menu', { static: false })
  menu: ElementRef;

  @ViewChild('content', { static: false })
  content: ElementRef;

  currentMenu: MenuItem;

  menuItems = new Array<MenuItem>();

  constructor(private router: Router, private renderer: Renderer2) {
    this.menuItems.push(new MenuItem('Cameras', 'Edit Cameras', 'videocam', 'cameras', 50));
    this.menuItems.push(new MenuItem('Devices', 'Edit Devices', 'developer_board', 'devices', 50));
  }

  ngOnInit() {
  }

  menuClickHandler(menuItem: MenuItem) {
    console.log(menuItem.name);

    let menuWidth = '5vw';
    let contentWidth = '95vw';
    if (!this.currentMenu || this.currentMenu.route !== menuItem.route) {
      menuWidth = '25vw';
      contentWidth = '75vw';
    }
    this.currentMenu = menuItem;

    this.renderer.setStyle(this.menu.nativeElement, 'width', menuWidth);
    this.renderer.setStyle(this.content.nativeElement, 'width', contentWidth);
    this.router.navigate(['/excon', { outlets: { exconoutlet: [menuItem.route] } }]);
  }

}
