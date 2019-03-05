import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private meta: Meta,
    private title: Title,
    private ccService: NgcCookieConsentService
  ) {}

  data;
  news;
  menu;

  ngOnInit() {
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
  }
}
