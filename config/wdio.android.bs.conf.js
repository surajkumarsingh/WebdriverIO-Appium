/**
 * Creating seperate config file for different
 * platforms taking all setting fron config file and override
 * some which capabilities
 */

const { config } = require('./wdio.shared.conf')
require('dotenv').config()
//===========
//BrowserStack Credentials
//===========
config.user=process.env.BROWSERSTACK_USER
config.key=process.env.BROWSERSTACK_KEY
//====================
// Specs
//====================

config.specs = [
    './test/specs/android/add-note.spec.js'
];


//==================
// Capabilities
//==================

config.capabilities = [{
    platformName: "Android",
    "appium:platformVersion": "10.0",
    "appium:automationName": "UIAutomator2",
    "appium:deviceName": "Google Pixel 3",
    "appium:autoGrantPermissions": true,
    "appium:app": "bs://b8e57762af5fbaff72d86dc40b0495ef53fd474d"
}]

config.services = ['browserstack']
exports.config = config;