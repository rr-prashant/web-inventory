const ball = document.getElementById("ball");

let ballcount = 0;
let TotalRun = 0;
let wicket = 0;
let overs = 0;
ball.addEventListener('click', play);

let score = [];



function play(){
    let all_score = '123456NWO';


    if (ballcount < 6){
        let bat = generateScore(all_score);
        livescore(bat);

        // runcounter
        if (bat == "1") {
            TotalRun += 1;
        }else if (bat == "2") {
            TotalRun += 2;
            ballcount += 1;
        }else if (bat == "3") {
            TotalRun += 3;
            ballcount += 1;
        }else if (bat == "4") {
            TotalRun += 4;
            ballcount += 1;
        }else if (bat == "5") {
            TotalRun += 5;
            ballcount += 1;
        }else if (bat == "6") {
            TotalRun += 6;
            ballcount += 1;
        }else if (bat == "N") {
            TotalRun += 1;
           
        }else if (bat == "O"){
            wicket += 1;
            ballcount += 1;
        }

        
    }else{
        ballcount = 0;
        overs += 1;
    }
        console.log('ball - ' + ballcount);
        console.log('run - ' + TotalRun);
        console.log('wicet - ' + wicket);
        console.log('over - ' + overs);

 
    
}

function generateScore(s){
    let score = '';
    if (score == '') {
        let sc = Math.floor(Math.random() * s.length);
        score += s.charAt(sc);
    }
    console.log(score);
    return score;
}



function livescore(bat){
    let live1 = document.getElementById("score-image1");
    let live2 = document.getElementById("score-image2");
    let live3 = document.getElementById("score-image3");
    let live4 = document.getElementById("score-image4");
    let live5 = document.getElementById("score-image5");
    let live6 = document.getElementById("score-image6");
    let live7 = document.getElementById("score-image7");
    let live8 = document.getElementById("score-image8");
    let live9 = document.getElementById("score-image9");

    if (bat == "1") {
        live1.innerHTML = `
            <img src="./img/runs/number-1.png" alt="" height="30px" width="30px" class="ms-2">
        `;
    }else if (bat == "2") {
        live2.innerHTML = `
            <img src="./img/runs/number-2.png" alt="" height="30px" width="30px" class="ms-2">
        `;
            
    }else if (bat == "3") {
        live3.innerHTML = `
            <img src="./img/runs/number-3.png" alt="" height="30px" width="30px" class="ms-2">
        `;
    }else if (bat == "4") {
        live4.innerHTML = `
            <img src="./img/runs/number-4.png" alt="" height="30px" width="30px" class="ms-2">
        `;
    }else if (bat == "5") {
        live5.innerHTML = `
            <img src="./img/runs/number-5.png" alt="" height="30px" width="30px" class="ms-2">
        `;
    }else if (bat == "6") {
        live6.innerHTML = `
            <img src="./img/runs/number-6.png" alt="" height="30px" width="30px" class="ms-2">
        `;
    }else if (bat == "N") {
        live7.innerHTML = `
            <img src="./img/noball.png" alt="" height="30px" width="30px">
        `;
        
    }else if (bat == "W") {
        live8.innerHTML = `
            <img src="./img/wideball.png" alt="" height="30px" width="30px">
        `;
    }else if (bat == "O") {
        live9.innerHTML = `
            <img src="./img/wicket.png" alt="" height="30px" width="30px">
        `;
    }
}
