/* Get electron and fs functions */
const fsSource = require('fs')
const electronSource = require('electron')
/* Get electron and fs functions */

/* Get a Message Window from the Remote Module */
// const MessageWindow = electronSource.remote
const { MessageWindow } = electronSource.remote
/* Get a Message Window from the Remote Module */

// from the document module of node
// getElementById: Returns a reference to the first object with the specified value of the ID or NAME attribute.
// Element.addEventListener
document.getElementById("FirstClickArea").addEventListener
// ("FirstClick", () => 
("click", () => 
    {
        const LocalMessage = "*** Beginning of the Local Message ***";
        console.log(LocalMessage);
        // MessageWindow.showSaveDialog.LocalMessage
        // fsSource.writeFileSync()
        // fsSource.writeSync()
        // fsSource.writevSync()
        // fsSource.WriteStream
        MessageWindow.showSaveDialog(
            filename=>
            {
                fsSource.writeFileSync(
                    filename + ".txt", data, "utf-8", () =>
                    {
                        console.log("Saving the File");
                    }
                );
            }
        );
    }
);

CurrentWindow = electronSource.getCurrentWindow()
electronSource.ClientRequest
querySelector()
document.getElementById("TurnOffApplication").addEventListener
("click", () =>
{
    CurrentWindow.Close()
}
);
