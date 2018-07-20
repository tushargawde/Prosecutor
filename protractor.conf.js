// Protractor configuration file, see link for more information

const report = require('multiple-cucumber-html-reporter');
const path = require('path');

exports.config = {
    allScriptsTimeout: 15 * 1000,
    directConnect: false,
    ignoreUncaughtExceptions: true,
    multiCapabilities: [
        {
            'browserName': 'chrome'
        }
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Spec patterns are relative to the current working directly when protractor is called.
    specs: [
        './e2e/features/*.feature',
    ],
    cucumberOpts: {
        require: [
            './e2e/step_definitions/*.js',
             ],
        tags: ['@run'],
        format: 'json:e2e/results/results.json',
        profile: false,
        'no-source': true,
    },
    resultJsonOutputFile: './e2e/results/results.json',
    plugins: [{
        path: path.resolve(process.cwd(), './', 'node_modules/protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true,
            openReportInBrowser: true
        }
    }],
    onPrepare: function() {
        browser.manage().window().maximize(); 
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.manage().timeouts().implicitlyWait(10000);
    }
};