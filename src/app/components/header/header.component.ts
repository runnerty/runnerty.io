import { AfterViewInit, Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'rty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {
  scrollTop;
  @Input() menu;

  constructor() {}

  ngAfterViewInit() { }
}