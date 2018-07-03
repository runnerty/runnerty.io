import { Component, Input } from '@angular/core';

@Component({
  selector: 'rty-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  @Input() news;
  constructor() {}
}
