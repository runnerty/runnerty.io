import { Component, Input, OnInit } from '@angular/core';
import { RunnertyMenuLink } from '../../runnerty.interfaces';

@Component({
  selector: 'rty-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menu: RunnertyMenuLink[];

  constructor() {}
}
