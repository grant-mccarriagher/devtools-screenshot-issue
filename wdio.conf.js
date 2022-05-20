require('@babel/register');

let config = {
  specs: [
    './features/**/*.feature'
  ],
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--disable-infobars',
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    }
  }],
  logLevel: 'error',
  bail: 0,
  waitforTimeout: 25000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./stepDefinitions/**/*.js'],
    snippets: true,
    source: true,
    strict: false,
    timeout: 1200000,
    ignoreUndefinedDefinitions: false
  }
}

export { config };
