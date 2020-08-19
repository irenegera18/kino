exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
      },

    directConnect: true,
    baseUrl: 'https://www.kinopoisk.ru/',
    framework: 'jasmine2',
    specs: [
        './specs/search.js'
      ],
    
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      },

      

      onPrepare: function () {

        browser.driver.manage().window().maximize();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;

        const JasmineConsoleReporter = require('jasmine-console-reporter');
        const reporter = new JasmineConsoleReporter({
            colors: 1,           // (0|false)|(1|true)|2
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
            listStyle: 'indent', // "flat"|"indent"
            timeUnit: 'ms',      // "ms"|"ns"|"s"
            timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
            activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
            emoji: true,
            beep: true
        });
        jasmine.getEnv().addReporter(reporter);


          
      }
};