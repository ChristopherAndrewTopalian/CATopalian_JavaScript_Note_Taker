// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'relative';
    mainDiv.style.top = 50 + 'px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.overflowY = 'scroll';
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let theTitle = ce('div');
    theTitle.textContent = 'Enter Note';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(theTitle);

    //-//

    let textInput = ce('textarea');
    textInput.id = 'textInput';
    textInput.style.width = 500 + 'px';
    textInput.style.height = 100 + 'px';
    mainDiv.append(textInput);

    //-//

    let saveButton = ce('button');
    saveButton.id = 'saveButton';
    saveButton.textContent = 'Save';
    saveButton.onmouseover = function()
    {
        hoverSound();
    };
    saveButton.onclick = function()
    {
        clickSound();
        saveFile('ourFile.txt');
    };
    mainDiv.append(saveButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

