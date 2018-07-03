import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';

const document = fs.readFileSync(__dirname + '/ssrtest/index-1.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/ssrtest-server/main')
  .AppServerModuleNgFactory;

const app = express();
app.get('**', (req, res) => {
  const url = req.url;
  renderModuleFactory(AppServerModuleNgFactory, { document, url }).then(
    html => {
      res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      res.send(html);
    }
  );
});

export let ssr = functions.https.onRequest(app);
