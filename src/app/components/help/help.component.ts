import { Component } from '@angular/core';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'rty-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  constructor(
    private analyticsService: AnalyticsService
  ) {}

  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
