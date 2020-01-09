import { Component } from '@angular/core';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { RunnertyMeta, RunnertyNews, RunnertyMenuLink } from './runnerty.interfaces';
import { SeoService } from './services/seo.service';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  metaData: RunnertyMeta;
  news: RunnertyNews[];
  menu: RunnertyMenuLink[];

  constructor(
    private seoService: SeoService,
    private newsService: NewsService,
    private meta: Meta,
    private title: Title,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.metaData = this.seoService.getMeta();
    this.title.setTitle(this.metaData.title);
    this.meta.addTags(this.metaData.meta);
    this.news = this.newsService.getNews();
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
      'burger',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/header/burger.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/footer/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'slack',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/footer/slack.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/footer/twitter.svg')
    );
  }
}
