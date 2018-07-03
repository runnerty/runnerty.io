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
        image: 'https://cdn-images-1.medium.com/max/800/1*DBmICuc7vTNe7u7YWilL9Q.jpeg',
        url: 'https://medium.com/runnerty/build-a-twitter-bot-with-runnerty-in-less-than-5-minutes-2ea45fe87ca1'
      },
      {
        title: 'Introducing Runnerty',
        site: 'Medium',
        image: 'https://cdn-images-1.medium.com/max/800/1*mTuBaRbtMt8DbBZ9YxQaCA.jpeg',
        url: 'https://medium.com/runnerty/introducing-runnerty-1284c3e5d1b1'
      },
      {
        title: 'Why use Runnerty?',
        site: 'Medium',
        image: 'https://cdn-images-1.medium.com/max/800/1*3xKYwTWsKcIpE2EWyZj5sQ.png',
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
          content: 'angular seo, angular 5 universal, nelacantinela'
        },
        {
          name: 'description',
          content: 'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          name: 'copyright',
          content: 'Runnerty'
        },
        {
          property: 'og:title',
          content: 'Runnerty'
        },
        {
          property: 'og:description',
          content: 'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          property: 'og:image',
          content: ''
        },
        {
          property: 'og:url',
          content: 'http://runnerty.io/'
        },
        {
          property: 'og:site_name',
          content: 'runnerty.io'
        }
      ]
    };
  }
}
