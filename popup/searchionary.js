// add click event listener for when the submit button is clicked
document.getElementById("search").addEventListener("click", function(){ 
    const word = document.getElementById("word").value;
    var t = searchWord(word);
    const definition = document.getElementById("definition");
    var els = t.querySelectorAll("span.dtText");
    for (let i = 0; i < els.length; i++){
        let text = els[i].innerHTML;
        definition.innerHTML += text;
    }
});

// given the user input, search the word
function searchWord(word){
    const definition = document.getElementById("definition");
    definition.innerHTML = "Definition";
    // check for valid word
    let alphaCheck = /^[a-zA-Z]+$/.test(word);
    // check that word length is greater than 0 and only contains letters
    if (alphaCheck == true && word.length > 0){
        // navigate to URL of merriam webster page for the given word inputted by the user
        const URL = `https://www.merriam-webster.com/dictionary/${word}`;
        var text = getSourceAsDOM(URL);
        return text;
    }
}

function getSourceAsDOM(url)
{
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    parser=new DOMParser();
    return parser.parseFromString(xmlhttp.responseText,"text/html");      
}