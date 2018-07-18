

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({After}) {
    After(function (scenario) {
        var world = this;
        if (scenario.isFailed()) {
            return browser.takeScreenshot().then(function (screenshot) {
                const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
                world.attach(decodedImage, 'image/png'); 
            });
        }
    });
});

    