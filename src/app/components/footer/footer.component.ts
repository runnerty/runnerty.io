import { Component, Input } from '@angular/core';

@Component({
  selector: 'rty-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  @Input() menu;

  constructor() {}
}
