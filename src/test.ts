// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularFireModule} from '@angular/fire';
import {environment} from './environments/environment';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './app/store/reducers/deducers-map';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);


export const TestBadImportConfig = () => {
    return [ RouterModule.forRoot([]),
            HttpClientTestingModule ,
            StoreModule.forRoot(appReducers)];
};
