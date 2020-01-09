import { Component, Input } from '@angular/core';
import { RunnertyMenuLink } from 'src/app/runnerty.interfaces';

@Component({
  selector: 'rty-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.scss']
})
export class QuickstartComponent {
  @Input() menu: RunnertyMenuLink[];

  constructor() {}
}
