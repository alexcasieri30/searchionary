// Option 1: view flashcard
// redirect user to separate extension webpage

let createData = {
type: "detached_panel",
url: "test.html",
width: 250,
height: 100
};
let creating = browser.windows.create(createData);

document.getElementById("view").addEventListener("click", function(){
    let winId = browser.windows.WINDOW_ID_CURRENT;
    let removing = browser.windows.remove(winId);
  });

// Option 2: Create new flashcard
// Create or get text file
// get user input
// save user input into text file