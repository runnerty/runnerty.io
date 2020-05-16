import { Component, Input } from '@angular/core';
import { RunnertyMenuLink } from '../../runnerty.interfaces';
import { AnalyticsService } from '../../shared/services/analytics.service'

@Component({
  selector: 'rty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menu: RunnertyMenuLink[];

  constructor(
    private analyticsService: AnalyticsService
  ) {}

  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
