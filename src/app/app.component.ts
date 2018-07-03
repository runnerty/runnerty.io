import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { CookieService } from 'angular2-cookie/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  private popupCloseSubscription: Subscription;

  constructor(
    private cookieService: CookieService,
    private cookieConsent: NgcCookieConsentService,
    private appService: AppService,
    private meta: Meta,
    private title: Title
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
    this.checkCookies();
    this.popupCloseSubscription = this.cookieConsent.popupClose$.subscribe(() => {
      this.checkCookies();
    });
  }

  ngOnDestroy() {
    this.popupCloseSubscription.unsubscribe();
  }

  checkCookies() {
    if (this.cookieService.get('cookieconsent_status') === 'dismiss') {
      require('../assets/ga.js');
    }
  }
}
