
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

let userinfo = {}

function actionButton(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("comment").value;
    const sub = document.getElementById("subs").checked;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    var tabs = document.getElementsByClassName("screenTab");
    if ( tabCount == 0 ){
        userinfo.name = name;
    }else if (tabCount == ( tabs.length - 1)){
        userinfo.comment = message;
        submitAction();
    }else{
        userinfo.email = email;
        userinfo.subscription = "Subscribed";
        if (male){
            userinfo.gender = "male";

        }
        else{
            userinfo.gender = "female";
        }
    }

    const objToString = JSON.stringify(userinfo);
    localStorage.setItem("userDetails", objToString);
}

// function submitAction(){
//     var new_obj = JSON.parse(localStorage.getItem("userDetails"));

//     alert()
// }