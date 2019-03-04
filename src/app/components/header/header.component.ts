import { Component, Input } from '@angular/core';

@Component({
  selector: 'rty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Input() menu;

  constructor() {}
}
