//const { AppiumDriver } = require("appium/build/lib/appium")

describe("API demos APP", () => {

    it('Start Activity', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    });

    it('Handle Alerts', async () => {
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
            .click()

        // Accept alert
        await driver.acceptAlert();
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it("Vertical Scroll using UIScrollable", async () => {

        await $('~App').click();
        await $('~Activity').click();

        //**scroll to the end (not satble if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        // more stable it scrolls up and down till text found
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfacess")').click();
        await expect($('~Secure Dialog')).toExist();
    });
    it("Horizontal Scrolling", async () => {

        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(3000)
    });


    it("Change Date", async()=>{

        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        const currentDate = await $('id=io.appium.android.apis:id/dateDisplay').getText();
        await $('~change the date').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('~10 October 2022').click();
        await $('id=android:id/button1').click();
        await expect(await $('id=io.appium.android.apis:id/dateDisplay').getText()).not.toEqual(currentDate);
    });
})