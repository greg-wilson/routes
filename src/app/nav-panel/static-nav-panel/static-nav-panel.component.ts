import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './static-nav-panel.component.html',
  styleUrls: ['./static-nav-panel.component.scss']
})
export class StaticNavPanelComponent implements OnInit {

  @Input()
  menuItems: Array<MenuItem>;

  @Output()
  menuClick = new EventEmitter<MenuItem>();

  @Input()
  showContent = false;

  currentMenuItem: MenuItem;

  constructor() {
  }

  ngOnInit() {
    console.log('MeutItems: ' + this.menuItems.length);
  }

  back() {
    this.showContent = false;
  }

  onClick(menu: MenuItem) {
    if (!this.currentMenuItem || this.currentMenuItem.route !== menu.route) {
      this.showContent = true;
      this.currentMenuItem = menu;
    } else {
      this.showContent = false;
      this.currentMenuItem = null;
    }
    this.menuClick.emit(menu);
  }
}
