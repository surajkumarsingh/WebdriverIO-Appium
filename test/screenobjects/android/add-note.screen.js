class AddNoteScreen{

get skipBtn(){return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip')}

get addNoteTxt(){ return $('//*[@text="Add note"]')}

get addNote(){return $('//*[@text="Add note"]')}

get addText(){return $('//*[@text="Text"]')}

get noteTitle(){ return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_title')}

get enterNote(){return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note')}

get editNoteBtn(){return $('id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn')}

get savedNotetext(){return $('id=com.socialnmobile.dictapps.notepad.color.note:id/view_note')}
}

export default new AddNoteScreen();