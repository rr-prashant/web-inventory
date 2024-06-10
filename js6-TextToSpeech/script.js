const speakbtn = document.getElementById("speakbtn");


speakbtn.addEventListener("click", speak);

function speak(){
    let inputData = document.getElementById("userText");

    let textTospeak = new SpeechSynthesisUtterance(inputData.value);

    let getVoice = speechSynthesis.getVoices();
    console.log(getVoice);
    textTospeak.voice = getVoice[0];

    speechSynthesis.speak(textTospeak);
}