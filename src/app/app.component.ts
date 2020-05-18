import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AnalyticsService } from './shared/services/analytics.service';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { RunnertyData, RunnertyNews, RunnertyMenuLink } from './runnerty.interfaces';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: RunnertyData;
  news: RunnertyNews[];
  menu: RunnertyMenuLink[];

  constructor(
    private appService: AppService,
    private meta: Meta,
    private title: Title,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.initializeAnalytics();
    this.data = this.appService.getData();
    this.title.setTitle(this.data.title);
    this.meta.addTags(this.data.meta);
    this.news = this.appService.getNews();
    this.menu = [
      {
        title: 'Docs',
        href: 'http://docs.runnerty.io/'
      },
      {
        title: 'Quickstart',
        href: 'https://github.com/runnerty/runnerty-quick-start'
      },
      {
        title: 'Blog',
        href: 'https://medium.com/runnerty/'
      }
    ];
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/footer/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'slack',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/footer/slack.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/footer/mail_outline.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/footer/twitter.svg')
    );
  }

  initializeAnalytics() {
    this.analyticsService.startTrackerWithId('UA-61344582-9');
    this.analyticsService.trackView('home', this.title.getTitle());
  }
}
