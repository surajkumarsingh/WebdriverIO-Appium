describe("Locator Stratgies", () => {

    it("Using Accessbility Id", async () => {
        // it only locator stratgy which works on both iso and android
        await $('~Alert Views').click()
        await $('~Simple').click();
        expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it("Using Tag/Class/Type", async () => {
        /**
         * In Browsers we us tag names
         * In android it is a tag named as attribute class
         * In ios it is a tag named as attribute type
         * 
         */
        console.log(await $('XCUIElementTypeStaticText').getText());
        const textEle = await $$('XCUIElementTypeStaticText');
        for (const text of textEle) {
            console.log(await text.getText());
        }
    })

    it('Using Xpath', async () => {
        await $('//XCUIElement[@name="Alert Views"]').click();
        await $('//XCUIElement[@label="Simple"]').click();
    });

    it('Using Class Chains', async () => {
        //https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
        //Only in ios similar to Android Uiautomator selector
        //Explicitly tell locator stratgy
        // *** Read docs for benefits of class chains
        await $('-iso class chain:**/XCUIElement[`name="Alert Views"`]').click();
        await $('-iso class chain:**/XCUIElement[`label CONTAINS "Simple"`]').click();
    });

    it('Using Predicate String', async () => {
        //https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
        // check begins with condition+caseInsesitive
        await $('-iso prdicate String:value BEGINSWITH[c] "alert"').click();
    })

})