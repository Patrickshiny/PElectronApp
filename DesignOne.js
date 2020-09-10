/* Get electron and fs functions */
const fsSource = require('fs')
const electronSource = require('electron')
/* Get electron and fs functions */

/* Get a Message Window from the Remote Module */
// const MessageWindow = electronSource.remote
const {MessageWindow} = electronSource.remote
/* Get a Message Window from the Remote Module */

// from the document module of node
// getElementById: Returns a reference to the first object with the specified value of the ID or NAME attribute.
// Element.addEventListener
document.getElementById("FirstClickArea").addEventListener("FirstClick", () =>
{
    const LocalMessage = "*** Beginning of the Local Message ***";
    MessageWindow.showSaveDialog.LocalMessage
}
