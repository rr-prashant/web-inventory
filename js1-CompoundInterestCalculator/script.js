
let btn = document.getElementById("xbtns");

btn.addEventListener('click', result);

function result(event){
    event.preventDefault();

    const investment = parseFloat(document.getElementById("invest").value);
    const contribution = parseFloat(document.getElementById("contrib").value);
    const interest = parseFloat(document.getElementById("interest").value) / 100;
    const years = parseInt(document.getElementById("years").value);
    

    const months = years * 12;
    const monthlyrate = interest / 12;

    let total_investment = investment;
    let total_amount_earned = investment * Math.pow(1 + monthlyrate, months);

    for(let i = 1; i <= months; i++){
        total_amount_earned += contribution * Math.pow(1 + monthlyrate, months - i);
        total_investment += contribution;
    }

    let total_interest = total_amount_earned - total_investment;

    let result = document.getElementById("result");

    result.style.display = 'block';

    result.innerHTML = `
        Total Amount: ₹${total_amount_earned.toFixed(2)}<br>
        Total Invested: ₹${total_investment.toFixed(2)}<br>
        Compound Interest Earned: ₹${total_interest.toFixed(2)}
    `;
}

