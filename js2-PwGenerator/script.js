
let btn = document.getElementById("xbtns");

btn.addEventListener('click', result);

function result(event){
    event.preventDefault();

    const upper_case = document.getElementById("upper").checked;
    const lower_case = document.getElementById("lower").checked;
    const number = document.getElementById("num").checked;
    const symbol = document.getElementById("symbols").checked;

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const sym = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";


    let random_password = '';

    if (upper_case){
        random_password += upper;
        if (lower_case){
            random_password += lower;
        };
        if (number){
            random_password += num;
        };
        if (symbol){
            random_password += sym;
        };

    }else if (lower_case){
        random_password += lower;
        if (upper_case){
            random_password += upper;
        };
        if (number){
            random_password += num;
        };
        if (symbol){
            random_password += sym;
        };
    }else if (number){
        random_password += num;
        if (lower_case){
            random_password += lower;
        };
        if (upper_case){
            random_password += upper;
        };
        if (symbol){
            random_password += sym;
        };
    }else if(symbol){
        random_password += symbol;
        if (lower_case){
            random_password += lower;
        };
        if (number){
            random_password += num;
        };
        if (upper_case){
            random_password += upper;
        };
    }else{
        random_password += upper + lower + num + symbol
    }
    
    console.log(random_password)
    let new_pw = generatePW(random_password);

    let result = document.getElementById("result");
    
    result.style.display = 'block';

    result.innerHTML = `
        ${new_pw}
    `;
}


function generatePW(content){
    const len = parseInt(document.getElementById('pwlen').value);
    
    let generated_pw = '';
    for (let i=1; i <= len; i++){
        let pw = Math.floor(Math.random() * content.length);
        console.log(i);
        generated_pw += content.charAt(pw);
    };
    console.log(generated_pw);
    return generated_pw;
}