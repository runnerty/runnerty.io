import { MetaDefinition } from '@angular/platform-browser';

export interface RunnertyNews {
  title: string;
  site: string;
  image: string;
  url: string;
}

export interface RunnertyMeta {
  title: string;
  meta: MetaDefinition[];
}

export interface RunnertyMenuLink {
  title: string;
  href: string;
}
