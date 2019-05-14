import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
const minify = require('html-minifier').minify;

import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';
import * as path from 'path';
import * as fs from 'fs';

// import * as cookieParser from 'cookie-parser';

const AppServerModuleNgFactory = require(__dirname + '/ssrtest-server/main').AppServerModuleNgFactory;

const distFolder = '.';
const index = fs.readFileSync(path.resolve(__dirname, `${distFolder}/ssrtest/index.html`)).toString();

enableProdMode();

renderModuleFactory(AppServerModuleNgFactory, {
  document: index
}).then(html => {
  writeFileSync('./dist/ssrtest/prerender.html', minify(html));
});
