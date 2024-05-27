
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
    if (tabCount < ctab.length){
        ctab[t].style.display = "block";
    }
    else{
        let form = document.getElementById("formdata");
        form.style.display = "none";
    }
    
    

    
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
    var ctab = document.getElementsByClassName("screenTab");
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
    }else if ( tabCount == (tabs.length - 1)){
        userinfo.comment = message;
    }else{
        userinfo.email = email;
        if (sub){
            userinfo.subscription = "Subscribed";
        }else{
            userinfo.subscription = "Not subscribed";
        }
        if (male){
            userinfo.gender = "male";

        }
        else{
            userinfo.gender = "female";
        }
        console.log(tabs.length);
    }

    const objToString = JSON.stringify(userinfo);
    localStorage.setItem("userDetails", objToString);

    
    nextBtn.addEventListener('click', (e)=>{
        if (tabCount > (tabs.length - 1)){
            submitAction(tabCount);
        }
    })

}

function submitAction(n){
    let new_obj = JSON.parse(localStorage.getItem("userDetails"));

    let tag = document.getElementById("resultPrompt");
    let content = document.getElementById("submitcontent");
    var tabs = document.getElementsByClassName("screenTab");
    let form = document.getElementById("formdata");

    content.innerHTML = `
    Name: ${new_obj.name}<br>
    Email: ${new_obj.email}<br>
    Gender: ${new_obj.gender}<br>
    Subscription: ${new_obj.subscription}<br>
    Message: ${new_obj.comment}
    `;

    console.log(new_obj.email);

    tag.style.display = "block";

    tabs[n].style.display = "none";
    form.style.display = "none";
    
    
}

let closebtn = document.getElementById("close");

closebtn.addEventListener('click', (e)=>{
    closeAction();
})

function closeAction(){
    window.location.href = './index.html'
}