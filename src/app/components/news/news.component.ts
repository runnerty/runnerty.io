import { Component, Input } from '@angular/core';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'rty-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  @Input() news;
  constructor(
    private analyticsService: AnalyticsService
  ) {}

  onMenuNav(title){
    this.analyticsService.trackEvent('click', title)
  }
}
