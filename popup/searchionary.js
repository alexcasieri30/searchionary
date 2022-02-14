document.getElementById("submit").addEventListener("click", function(){ 
    const word = document.getElementById("word").value;
    searchWord(word);
});

function searchWord(word){
    // check for valid word
    let alphaCheck = /^[a-zA-Z]+$/.test(word);
    // check that word length is greater than 0 and only contains letters
    if (alphaCheck == true && word.length > 0){
        const URL = `https://www.merriam-webster.com/dictionary/${word}`;
        window.open(
            URL, "_blank");
    }
}