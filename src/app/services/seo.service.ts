import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RunnertyMeta } from '../runnerty.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private http: HttpClient) {}

  getMeta(): RunnertyMeta {
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
          content: 'https://runnerty.io/assets/images/header/logo-stroked.png'
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
          content: 'A new way to manage, plan and develop your processes and workflows.'
        },
        {
          name: 'twitter:image',
          content: 'https://runnerty.io/assets/images/icons/twitter.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    };
  }
}
