const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("comment");
const sub = document.getElementById("subs").checked;
const male = document.getElementById("male").checked;
const female = document.getElementById("female").checked;




// buttons
let prevBtn = document.getElementById("xprev");
let nextBtn = document.getElementById("xnext");


var tabCount = 0; // current tab count
displayTab(tabCount); // display tabs

function displayTab(t){
    var ctab = document.getElementsByClassName("screenTab");

    //hide all the tabs
    for (var i = 0; i < ctab.length; i++) {
        ctab[i].style.display = "none";
    }

    // display only the current tab
    ctab[t].style.display = "block";

    
    // buttons integration respectively with tabs
    if (t == 0){
        prevBtn.style.display = "none";

    }else{
        prevBtn.style.display = "inline";
    }

    if (t == (ctab.length -1)){
        nextBtn.innerHTML = "Submit";
    }else{
        nextBtn.innerHTML = "Next";
    }

}

nextBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    tabCount++;
    displayTab(tabCount);
})

prevBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    tabCount--;
    displayTab(tabCount);
})