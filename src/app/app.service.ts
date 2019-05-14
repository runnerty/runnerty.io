import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  
  getNews() {
    //return this.http.get('https://medium.com/runnerty/latest?format=json', {responseType: 'text'});
    return [
      {
        title: 'Build a Twitter bot with Runnerty in 5 min',
        site: 'Medium',
        image: 'assets/news/articles/article3.jpg',
        url: 'https://medium.com/runnerty/build-a-twitter-bot-with-runnerty-in-less-than-5-minutes-2ea45fe87ca1'
      },
      {
        title: 'Introducing Runnerty',
        site: 'Medium',
        image: 'assets/news/articles/article1.jpg',
        url: 'https://medium.com/runnerty/introducing-runnerty-1284c3e5d1b1'
      },
      {
        title: 'Why use Runnerty?',
        site: 'Medium',
        image: 'assets/news/articles/article2.jpg',
        url: 'https://medium.com/runnerty/why-use-runnerty-dfa1af208977'
      }
    ];
  }

  getData() {
    return {
      title: 'Runnerty',
      meta: [
        {
          name: 'author',
          content: 'Runnerty'
        },
        {
          name: 'keywords',
          content: 'taskrunner, angular, seo, angular6, universal'
        },
        {
          name: 'description',
          content: 'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          name: 'copyright',
          content: 'Coderty'
        },
        {
          property: 'og:title',
          content: 'Runnerty'
        },
        {
          property: 'og:image',
          content: 'https://runnerty.io/assets/header/logo-stroked.png'
        },
        {
          property: 'og:description',
          content: 'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          property: 'og:url',
          content: 'http://runnerty.io/'
        },
        {
          property: 'og:site_name',
          content: 'runnerty.io'
        },
        {
          name: 'twitter:title',
          content: 'Runnerty'
        },
        {
          name: 'twitter:description',
          content:
            'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          name: 'twitter:image',
          content: 'https://runnerty.io/assets/icons/twitter.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    };
  }
}
