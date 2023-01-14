

let homeStoreEl =document.getElementById("home_score")
let homeScore = 0
homeStoreEl.textContent = homeScore



let awayStoreEl =document.getElementById("away_score")
let awayScore = 0
awayStoreEl.textContent = awayScore



function home_plus_one(){
     homeScore += 1;
    homeStoreEl.textContent = homeScore
}

function home_plus_two(){
    homeScore += 2;
    homeStoreEl.textContent = homeScore
}
function home_plus_three(){
     homeScore += 3;
     homeStoreEl.textContent = homeScore
    }
function away_plus_one(){
     awayScore += 1;
     awayStoreEl.textContent = awayScore
    }

function away_plus_two(){
    awayScore += 2;
    awayStoreEl.textContent = awayScore
}
function away_plus_three(){
    awayScore += 3;
    awayStoreEl.textContent = awayScore
}