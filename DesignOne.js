/* Get electron and fs functions */
const fsSource = require('fs')
// const electronSource = require('electron')
// const { BrowserWindow, CurrentWindow, MessageWindow } = require('electron');
const { BrowserWindow, CurrentWindow} = require('electron');

/* Original MessageWindow */
// const {MessageWindow} = require('electron').remote;
// const MessageWindow = electronSource.remote
// const { MessageWindow } = electronSource.remote
/* Original MessageWindow */
const {remote} = require('electron');
const {MessageWindow} = remote;

const { dialog } = MessageWindow.dialog

// BrowserWindow.showSaveDialog
// CurrentWindow.showSaveDialog
// MessageWindow.showSaveDialog
// MessageWindow.showSaveDialog
/* Get electron and fs functions */

/* Get a Message Window from the Remote Module */

/* Original eleDialog */
// const { eleDialog } = electronSource.remote.dialog
/* Original eleDialog */
// const { eleDialog } = remote.dialog
const { eleDialog } = require("electron").remote;
const fs = require('fs');

var FileSavingPath = eleDialog.showSaveDialog({});
var FileOpenPath = eleDialog.showOpenDialog({});
eleDialog.properties

// const { CurrentWindow, ChildWindow } = CurrentWindow.showSaveDialog
// const { ChildWindow } = CurrentWindow.showSaveDialog
// const { ChildWindow } = eleDialog.showSaveDialog
// const { ChildWindow } = eleDialog.showSaveDialo

// BrowserWindow.getCurrentWindow()
/* Get a Message Window from the Remote Module */

// from the document module of node
// getElementById: Returns a reference to the first object with the specified value of the ID or NAME attribute.
// Element.addEventListener


document.getElementById("FirstClickArea").addEventListener
// ("FirstClick", () => 
// debugger;
("click", () => 
    {
        // const LocalMessage = "*** Beginning of the Local Message ***";
        const FirstClickAreaMsg = "[FirstClickArea Clicked]";
        console.log(FirstClickAreaMsg);
        // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
        console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
        MessageWindow.showSaveDialog.LocalMessage
        // fsSource.writeFileSync()
        fsSource.writeSync()
        fsSource.writevSync()
        fsSource.WriteStream
        // MessageWindow.showSaveDialog(
            // eleDialog.showSaveDialog(
        // CurrentWindow.CurrentWindow
        // CurrentWindow.MessageWindow.showSaveDialog(
        MessageWindow.showMessageBox()
        MessageWindow.showSaveDialog(
            function (filename) {
                    fsSource.writeFileSync(
                        filename + ".txt", data, "utf-8", () => {
                            console.log("Saving the File");
                        }
                    );
                }
        );
    }
);

const {CurrentWindow} = electronSource.getCurrentWindow()
electronSource.ClientRequest

document.getAnimations()
DocumentType.properties.remote
document.getElementById("TurnOffApplication").addEventListener
("click", () =>
{
    const TurnOffApplicationMsg = "[TurnOffApplicationMsg Clicked]";
    const TurnOfFPopupMsg = "[Turned Off]";
    // console.log(TurnOffApplicationMsg);
    // CurrentWindow.Close()
    CurrentWindow.Closing()
}
);
