
document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.getElementById("dictionaryForm");
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // word searched by user
        let inputdata = document.getElementById("xinput").value;


        // variables for keeping data
        let title = document.getElementById("title");

        // fetching the data through dictonary url
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + `${inputdata}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            title.innerHTML = `Title: ${data[0].word}`;
        });
    })
    
});