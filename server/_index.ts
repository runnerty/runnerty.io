import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';

// NOTE: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./ssrtest-server/main');
const DISABLE_FIREBASE = process.env.DISABLE_FIREBASE || false;

// NgUniversalTools: Express Engine and moduleMap for lazy loading
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as firebaseFunctions from 'firebase-functions';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), DISABLE_FIREBASE ? 'dist' : './');
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'ssrtest-server'));

if (DISABLE_FIREBASE) {
  // Server static files using the express server only if not using firebase hosting
  app.get('*.*', express.static(join(DIST_FOLDER, 'ssrtest')));
}

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'ssrtest', 'index-1.html'), { req });
});

if (DISABLE_FIREBASE) {
  // Start up the Node server if not using firebase cloud functions
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}


export let ssr = DISABLE_FIREBASE
  ? null
  : firebaseFunctions.https.onRequest(app);
