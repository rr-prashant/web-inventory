
document.addEventListener('DOMContentLoaded', (event) => {
    let audioIcon = document.getElementById("audioText");
    let audioPlayer = document.getElementById("audioPlayer");
    let mute = document.getElementById("mute");
    let result = document.getElementById("result");
    let errorfield = document.getElementById("errorfield");

    let form = document.getElementById("dictionaryForm");


    
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // word searched by user
        let inputdata = document.getElementById("xinput").value.toLowerCase();


        // variables for keeping data
        let title = document.getElementById("title");
        let noun = document.getElementById("noun");
        let phoneticx = document.getElementById("phonetic");
        let origin = document.getElementById("origin");
        let synoField = document.getElementById("syno");
        let anoField = document.getElementById("ano");
        let anoHead = document.getElementById("anoHead");
        let defiField = document.getElementById("defi");
        let defiHead = document.getElementById("defiHead");
        let synoHead = document.getElementById("synoHead");

        

        // fetching the data through dictonary url
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + `${inputdata}`)
        .then(response => response.json())
        .then(data => {
            if (inputdata == data[0].word){
                console.log(data);

                result.style.display = 'block';
                errorfield.style.display = 'none';

                if (data[0].phonetics.length != 0){
                    if (data[0].phonetics[0].audio){
                        console.log('1 print');
                        audioPlayer.src = `${data[0].phonetics[0].audio}` ;
                    }else if (data[0].phonetics[1].audio){
                        console.log('2 print');
                        audioPlayer.src = `${data[0].phonetics[1].audio}` ;
                    }
                    audioIcon.style.display = 'block';
                    audioIcon.style.display = 'block';
                    mute.style.display = 'none';
                }else{
                    
                    console.log('3 print')
                    audioPlayer.src =  `` ;
                    audioIcon.style.display = 'none';
                    audioIcon.style.display = 'none';
                    mute.style.display = 'block';
                }

                title.innerHTML = `${data[0].word}`;
                noun.innerHTML = `${data[0].meanings[0].partOfSpeech} `;

                let phoneticContent = data[0].phonetic ? `<p>${data[0].phonetic}</p>` : '';
                phoneticx.innerHTML = `${phoneticContent}`;


                let originContent = data[0].origin ? `<h2 class="fs-6">Origin</h2><p>${data[0].origin}</p>` : '';
                origin.innerHTML = `${originContent}`;


                // For synonyms
                let syno = data[0].meanings[0].synonyms;
                console.log(syno);
                let synoss = '';
                if (syno.length != 0){
                    synoHead.innerHTML = `<h2 class="fs-6 me-2">Synonyms:</h2><p>`;
                    
                    for ( let i = 0; i < syno.length; i++){
                        synoss =  `${data[0].meanings[0].synonyms[i]}`;
                        synoField.innerHTML += synoss;

                        let j = i;
                        while (j == i){
                            synoField.innerHTML += ", ";
                            j++;
                        }
                    };

                }


                // For antonyms
                let ano = data[0].meanings[0].antonyms;
                console.log(ano);
                let anoss = '';
                if (ano.length != 0){
                    anoHead.innerHTML = `<h2 class="fs-6 me-2">Antonyms:</h2><p>`;
                    
                    for ( let i = 0; i < ano.length; i++){
                        anoss =  `${data[0].meanings[0].antonyms[i]}`;
                        anoField.innerHTML += anoss;

                        let j = i;
                        while (j == i){
                            anoField.innerHTML += ", ";
                            j++;
                        }
                    };

                }

                // For defination
                let defi = data[0].meanings[0].definitions;
                console.log(defi[0][0]);
                let defii= '';
                if (defi.length != 0){
                    defiHead.innerHTML = `<h2 class="fs-6 me-2">Definitions:</h2><p>`;
                    
                    for ( let i = 0; i < defi.length; i++){
                        defii =  `${data[0].meanings[0].definitions[i][0]}`;
                        defiField.innerHTML += defii;

                        let j = i;
                        while (j == i){
                            defiField.innerHTML += `<br>`;
                            j++;
                        }
                    };

                }
                

                
            }else{
                result.style.display = 'none';
                errorfield.style.display = 'block';
                if (errorfield) {
                    errorfield.innerHTML = 'Your word is not available. Please try again.';
                }
            }
            
            
        }).catch(error => {
            console.log(error);
            result.style.display = 'none';
            errorfield.style.display = 'block';
            if (error) {
                errorfield.innerHTML = 'Error fetching data. Please try again.';
            }
        });
    })

    
    if (audioIcon) {
        audioIcon.addEventListener('click', function() {
            audioPlayer.play();
        });
    }
    
});