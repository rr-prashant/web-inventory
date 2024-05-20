
let btn = document.getElementById("xbtns");
btn.addEventListener('click', result);

function result(event){
    event.preventDefault();

    let investment = parseFloat(document.getElementById("invest").value);
    let contribution = parseFloat(document.getElementById("contrib").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let years = parseFloat(document.getElementById("years").value);
    

    let months = (years) * 12;
    let total_contribution = parseFloat(contribution * months);

    let total_investment = parseFloat(investment + total_contribution);
    console.log(total_investment.toFixed(2));
}

