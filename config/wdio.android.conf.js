/**
 * Creating seperate config file for different
 * platforms taking all setting fron config file and override
 * some which capabilities
 */

const { config } = require('./wdio.shared.conf')
import path from 'path'

config.port = 4723;


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
    "appium:automationName": "UIAutomator2",
    "appium:deviceName": "1718c8bc",
    "appium:autoGrantPermissions": true,
    "appium:app": path.join(process.cwd(), "./app/android/ColorNote.apk")
}]

exports.config = config;