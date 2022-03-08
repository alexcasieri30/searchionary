// add click event listener for when the submit button is clicked
document.getElementById("search").addEventListener("click", function(){ 
    const word = document.getElementById("word").value;
    searchWord(word);
});

// given the user input, search the word
function searchWord(word){
    // check for valid word
    let alphaCheck = /^[a-zA-Z]+$/.test(word);
    // check that word length is greater than 0 and only contains letters
    if (alphaCheck == true && word.length > 0){
        // navigate to URL of merriam webster page for the given word inputted by the user
        const URL = `https://www.merriam-webster.com/dictionary/${word}`;
        window.open(URL, "wFormx", "width=800,height=600,location=no,menubar=no,status=no,titilebar=no,resizable=no,");
    }
}