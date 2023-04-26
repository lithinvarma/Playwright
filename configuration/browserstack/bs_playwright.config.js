// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: '/Users/lithin/WebstormProjects/Playwright/web/tests',//Jenkins /Users/lithin/.jenkins/workspace/web/web/tests
    timeout: 60000,

    use:{
        viewport: null,
        screenshot:"on"
    },
    projects: [
        // -- BrowserStack Projects --
        // name should be of the format browser@browser_version:os os_version@browserstack
        {
            name: 'chrome@latest:Windows 10@browserstack',
            use: {
                browserName: 'chromium',
                channel: 'chrome'
            },
        },
       /* {
            name: 'chrome@latest-beta:OSX Big Sur@browserstack',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
            },
        },
        {
            name: 'edge@90:Windows 10@browserstack',
            use: {
                browserName: 'chromium'
            },
        },
        {
            name: 'playwright-firefox@latest:OSX Catalina@browserstack',
            use: {
                browserName: 'firefox',
                ignoreHTTPSErrors: true
            },
        },
        {
            name: 'playwright-webkit@latest:OSX Big Sur@browserstack',
            use: {
                browserName: 'webkit',
                // Config to use playwright emulated devices.
                // ...devices['iPhone 12 Pro Max'],
            },
        },*/
        // -- Local Projects --

        // Test against playwright browsers
        // {
        //   name: "chrome",
        //   use: {
        //     browserName: "chromium",
        //     // Test against Chrome channel.
        //     channel: "chrome",
        //   },
        // },
        // {
        //   name: "safari",
        //   use: {
        //     browserName: "webkit",
        //     viewport: { width: 1200, height: 750 },
        //   },
        // },
        // {
        //   name: "firefox",
        //   use: {
        //     browserName: "firefox",
        //     viewport: { width: 800, height: 600 },
        //   },
        // },
        //  Test against mobile viewports.
        // {
        //   name: "chrome@pixel5",
        //   use: {
        //     ...devices["Pixel 5"]
        //   }
        // },
    ],
    reporter: [ ['html', { outputFolder: '/Users/lithin/WebstormProjects/Playwright/testReports'}]],

};
module.exports = config;
