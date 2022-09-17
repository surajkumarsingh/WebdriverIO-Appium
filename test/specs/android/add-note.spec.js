import AddNote from '../../screenobjects/android/add-note.screen';

describe("Color Note", async () => {
    const listName = 'Fav Animes';

    it("Skip instruction", async () => {
        await AddNote.skipBtn.click();
        await expect(await AddNote.addNoteTxt).toBeDisplayed();
    });
    it("Create and save Notes", async () => {
        await AddNote.addNote.click();
        await AddNote.addText.click();

        await AddNote.noteTitle.addValue(listName)
        await AddNote.enterNote.addValue('Naruto\nOnePiece\nDragonBall');
        await driver.back();
        await driver.back();
        await expect(await AddNote.editNoteBtn).
            toBeDisplayed();
        await expect(await AddNote.savedNotetext).toHaveText('Naruto\nOnePiece\nDragonBall')
    })

    it("Delete Note", async () => {
        await driver.back();
        await $(`//android.widget.TextView[@text="${listName}"]`).click();
        await $('//android.widget.ImageButton[@content-desc="More"]').click();
        await $('//android.widget.TextView[@text="Delete"]').click();
        await driver.acceptAlert();
        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav').click();
        await $('//android.widget.TextView[@text="Trash Can"]').click();
        await expect(await $('id=com.socialnmobile.dictapps.notepad.color.note:id/title'))
            .toHaveText(listName);

    })
});