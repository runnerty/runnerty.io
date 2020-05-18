import { Component, Input, OnInit } from '@angular/core';
import { RunnertyMenuLink } from '../../runnerty.interfaces';
import { AnalyticsService } from '../../shared/services/analytics.service'

@Component({
  selector: 'rty-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menu: RunnertyMenuLink[];

  constructor(
    private analyticsService: AnalyticsService
  ) {}

  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
