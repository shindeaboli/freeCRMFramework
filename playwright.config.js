const { defineConfig, chromium } = require('@playwright/test');
import env from './env/env.config.js';

export default defineConfig({
  testDir: './tests',

  workers: 2,
  //retries: 1,

  
  fullyParallel: true,

  reporter: [['html'],['allure-playwright']],

  globalSetup : 'storage/login.js',

  use :
  {
    baseURL : env.BASEURL,

    storageState : './storage/login.json',
    
    
    screenshot: 'on',
    video: 'retain-on-failure',
    trace : 'retain-on-failure',

    launchOptions :
    {
        slowMo : 500
    }
  },

  projects :
  [
    {
      name : 'chromium',
      use :
      {
        browserName : 'chromium'
      }
    },
    
    {
      name : 'firefox',
      use:
      {
        browserName : 'firefox'
      }
    }


  ]

});