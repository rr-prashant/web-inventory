const ball = document.getElementById("ball");

let ballcount = 0;
let ballcount2 = 0;
let TotalRun = 0;
let wicket = 0;
let overs = 0;

let TotalRun2 = 0;
let wicket2 = 1200;
let overs2 = 0;

ball.addEventListener('click', play);

let score = [];



function play(){
    let all_score = 'O';
    let bat = generateScore(all_score);
    let live1 = document.getElementById("score-image1");
    if (wicket < 11){
        
        ballcount += 1;
        ballcount2 = 0;
        

        // runcounter
        if (ballcount <= 6) {
            if (bat == "1") {
                TotalRun += 1;
            }else if (bat == "2") {
                TotalRun += 2;
            }else if (bat == "3") {
                TotalRun += 3;
            }else if (bat == "4") {
                TotalRun += 4;
            }else if (bat == "5") {
                TotalRun += 5;
            }else if (bat == "6") {
                TotalRun += 6;
            }else if (bat == "N") {
                TotalRun += 1;
                if (ballcount > 0){
                    ballcount -= 1;
                }
            }else if (bat == "W") {
                if (ballcount > 0){
                    ballcount -= 1;
                }
            }
            else if (bat == "O"){
                wicket += 1;
            }
            livescore(bat);

        }else{
            ballcount = 0;
            overs += 1;
            live1.innerHTML = ``;
        }
        
    }else{
        wicket2 = 0;
        live1.innerHTML = ``;
    }
    
    
    if (wicket2 < 11 ){
        ballcount = 0;
        ballcount2 += 1;

        if (ballcount2 <= 6){
            if (bat == "1") {
                TotalRun2 += 1;
            }else if (bat == "2") {
                TotalRun2 += 2;
            }else if (bat == "3") {
                TotalRun2 += 3;
            }else if (bat == "4") {
                TotalRun2 += 4;
            }else if (bat == "5") {
                TotalRun2 += 5;
            }else if (bat == "6") {
                TotalRun2 += 6;
            }else if (bat == "N") {
                TotalRun2 += 1;
                if (ballcount > 0){
                    ballcount -= 1;
                }
            }else if (bat == "W") {
                if (ballcount > 0){
                    ballcount -= 1;
                }
            }
            else if (bat == "O"){
                wicket2 += 1;
            }
            livescore(bat);
        }else{
            ballcount = 0;
            overs2 += 1;
            live1.innerHTML = ``;
        }
    }else{
        if (wicket2 != 1200) {
            live1.innerHTML = ``;
        }
        
    }
    
        console.log('TEAM 1 ball - ' + ballcount);
        console.log('TEAM 1 run - ' + TotalRun);
        console.log('TEAM 1 wicket - ' + wicket);
        console.log('TEAM 1 over - ' + overs);


        console.log('TEAM 2 ball - ' + ballcount2);
        console.log('TEAM 2 run - ' + TotalRun2);
        console.log('TEAM 2 wicket - ' + wicket2);
        console.log('TEAM 2 over - ' + overs2);

 
    
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
    console.log("livescore in");
    if (ballcount <= 6 || ballcount2 <= 6) {
        console.log("livescore out");
        let imgTag = '';
        
        if (bat == "1") {
            imgTag = `<img src="./img/runs/number-1.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "2") {
            imgTag = `<img src="./img/runs/number-2.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "3") {
            imgTag = `<img src="./img/runs/number-3.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "4") {
            imgTag = `<img src="./img/runs/number-4.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "5") {
            imgTag = `<img src="./img/runs/number-5.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "6") {
            imgTag = `<img src="./img/runs/number-6.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "N") {
            imgTag = `<img src="./img/noball.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "W") {
            imgTag = `<img src="./img/wideball.png" alt="" height="30px" width="30px" class="ms-2">`;
        } else if (bat == "O") {
            imgTag = `<img src="./img/wicket.png" alt="" height="30px" width="30px" class="ms-2">`;
        }
    
        // Append the image to the live1 element
        live1.innerHTML += imgTag;
    }
}
