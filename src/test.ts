// this file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed }                                                 from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// there is no typing for the `__karma__` variable, declare it as any
declare const __karma__: any;
declare const require: any;

// prevent karma from running prematurely
__karma__.loaded = function () {};

// initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// find all the tests
const context = require.context('./', true, /\.spec\.ts$/);
// load the modules
context.keys().map(context);
// start karma to run the tests
__karma__.start();