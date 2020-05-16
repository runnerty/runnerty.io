import { Component, Input } from '@angular/core';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'rty-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  constructor(
    private analyticsService: AnalyticsService
  ) {}
  
  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
