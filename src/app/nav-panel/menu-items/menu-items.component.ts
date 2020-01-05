import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Output()
  menuClick = new EventEmitter<MenuItem>();

  @Input()
  menuItems: Array<MenuItem>;

  constructor() { }

  ngOnInit() {
  }

  show(item: MenuItem) {
    this.menuClick.emit(item);
  }

}
