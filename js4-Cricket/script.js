const ball = document.getElementById("ball");

let ballcount = 0;
let TotalRun = 0;
let wicket = 0;
let overs = 1;

let TotalRun2 = 0;
let ballcount2 = 0;
let wicket2 = 0;
let overs2 = 1;
let team2turn = true;
let team1turn = true;


ball.addEventListener('click', play);

// when the ball is played this function is called
function play(){
    let all_score = '123456WNO'; // score from 1-6runs W=Wideball N=Noball O=Wicket/Out
    let bat = generateScore(all_score);
    let live1 = document.getElementById("score-image1");
    
    // if team1 is playing 
    if (team1turn == true) {
        if (wicket < 11){ // this means team1 11players can bat and after 11thplayer is out then team 2 comes for innings
            team2turn = false; // Making sure team 1 is playing
            ballcount += 1; // each ball is counted after ball is played for team 1
            
    
            // runcounter
            if (ballcount <= 6) { // counting overs for team 1
                // run is added to total runs with respective to what score did the batman scored 
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
                livescore(bat); // updating the scoreboard 
    
            }else{
                ballcount = 0; // reseting ballcount after each over for team 1
                overs += 1; // updating overs for team 1
                live1.innerHTML = ``; // updating live score space
            }
            
        }else{
            if (team1turn == true) { // if all player of team 1 are out then everythign is reset and then team1turn is turned false as team 2 will be starting innings
                live1.innerHTML = ``;
                team1turn = false;
                team2turn = true;
            }
        }
    }
    
    // if team2 is playing 
    if (team2turn == true) {
        if (wicket2 < 11 ){ // this means team1 11players can bat and after 11thplayer is out then gameover
            ballcount2 += 1; // each ball is counted after ball is played for team 2
    
            if (ballcount2 <= 6){ // counting overs for team 2
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
                    if (ballcount2 > 0){
                        ballcount2 -= 1;
                    }
                }else if (bat == "W") {
                    if (ballcount2 > 0){
                        ballcount2 -= 1;
                    }
                }
                else if (bat == "O"){
                    wicket2 += 1;
                }
                livescore(bat);
            }else{
                ballcount2 = 0; // reseting ballcount after each over for team 2
                overs2 += 1; // updating overs for team 2
                live1.innerHTML = ``;
            }
            
        }else{
            live1.innerHTML = ``;
            
        }
    }

    updateScore(TotalRun, wicket, overs); // updating score for team 1 in scoreboard below
    updateScore2(TotalRun2, wicket2, overs2); // updating score for team 2 in scoreboard below



}


// generates random score for batmens
function generateScore(s){
    let score = '';
    if (score == '') {
        let sc = Math.floor(Math.random() * s.length);
        score += s.charAt(sc);
    }
    console.log(score);
    return score;
}


// updates the score image in the live bat section
function livescore(bat){
    let live1 = document.getElementById("score-image1");
    console.log("livescore in");
    if (ballcount <= 6) {
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

// updates score of team 1
function updateScore(r, w, o){
    let run1 = document.getElementById("run1");
    let wicket1 = document.getElementById("wicket1");
    let over1 = document.getElementById("over1");
    
    run1.innerHTML = `${r}`;
    wicket1.innerHTML = `${w}`;
    over1.innerHTML = `${o}`;

}

// updates score of team 2
function updateScore2(r, w, o){
    let run2 = document.getElementById("run2");
    let wicket2 = document.getElementById("wicket2");
    let over2 = document.getElementById("over2");
    
    run2.innerHTML = `${r}`;
    wicket2.innerHTML = `${w}`;
    over2.innerHTML = `${o}`;
    
}