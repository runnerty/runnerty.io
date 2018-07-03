import { Component, Input } from '@angular/core';

@Component({
  selector: 'rty-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.sass']
})
export class QuickstartComponent {
  @Input() menu;

  constructor() {}
}
