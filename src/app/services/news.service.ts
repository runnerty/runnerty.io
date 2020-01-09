import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RunnertyNews } from '../runnerty.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): RunnertyNews[] {
    //return this.http.get('https://medium.com/runnerty/latest?format=json', {responseType: 'text'});
    return [
      {
        title: 'Build a Twitter bot with Runnerty in 5 min',
        site: 'Medium',
        image: 'assets/images/news/articles/article3.jpg',
        url: 'https://medium.com/runnerty/build-a-twitter-bot-with-runnerty-in-less-than-5-minutes-2ea45fe87ca1'
      },
      {
        title: 'Introducing Runnerty',
        site: 'Medium',
        image: 'assets/images/news/articles/article1.jpg',
        url: 'https://medium.com/runnerty/introducing-runnerty-1284c3e5d1b1'
      },
      {
        title: 'Why use Runnerty?',
        site: 'Medium',
        image: 'assets/images/news/articles/article2.jpg',
        url: 'https://medium.com/runnerty/why-use-runnerty-dfa1af208977'
      }
    ];
  }
}
