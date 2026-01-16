// saveFile.js

function saveFile(whichName)
{
    let data = ge("textInput").value;

    //-//

    let dateTime = new Date().toLocaleString();

    let theAnchor = ce("a");
    theAnchor.download = dateTime + ' ' + whichName;

    let theBlob = new Blob([data],
    {
        type: "text/plain"
    });

    theAnchor.href = window.URL.createObjectURL(theBlob);

    theAnchor.click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

