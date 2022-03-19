var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');


//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="	https://api.funtranslations.com/translate/minion.json"
function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text;
}
function errorHandler(err) {
    console.log("Error occured: " + err);
    alert("Something went wrong try after some time");

}
//outputDiv.innerText="shekhar is great";

btnTranslate.addEventListener('click', function ClickHandler() {

    var inputtxt = txtInput.value;
    //call server  processing 
    fetch(getTranslateURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
    //outputDiv.innerText ="translated "+ txtInput.value;
    //console.log("this",outputDiv.innerText);
    //console.log("textInput.value: ", txtInput.value);
});