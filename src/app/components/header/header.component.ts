import { Component, Input } from '@angular/core';
import { RunnertyMenuLink } from '../../runnerty.interfaces';

@Component({
  selector: 'rty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menu: RunnertyMenuLink[];

  constructor() {}
}
