import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

export const generateWCBootstrap = (webComponentAngularModule: any) => {
  if (environment.production) {
    enableProdMode();
  }

  const bootstrap = () => platformBrowserDynamic().bootstrapModule(webComponentAngularModule);
  bootstrap().catch(err => console.error(err));
};
