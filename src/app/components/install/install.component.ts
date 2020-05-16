import { Component, Input } from '@angular/core';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'rty-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.sass']
})
export class InstallComponent {
  constructor(
    private analyticsService: AnalyticsService
  ) {}

  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
