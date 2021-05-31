choice = (id ) => {
    let result;
    let compChoice = comp();
    if (compChoice == id) {
        result = "Draw!";
    }

    else{
        obj = {
            "rock-scissors" : 1,
            "scissors-paper" : 1,
            "paper-rock":1
        }

        if (obj[id + '-' + compChoice]) {
            result = "You win!";
        }
        else{
            result = "You lost!";
        }
    }

    removeImgs(id,compChoice,result);
}

comp = () => {
    let array  = ["rock","paper","scissors"];
    let compCh = Math.floor(Math.random() * 3);
    return array[compCh];
}


removeImgs = (user,comp,result) => {

    let imgSrcs = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let userCh = document.createElement("div"); 
    let msg = document.createElement("div"); 
    let compCh = document.createElement("div");

    userCh.innerHTML = "<img src="+imgSrcs[user]+ ">"
    msg.innerHTML = "<h2>"+result+"</h2>";
    compCh.innerHTML = "<img src="+imgSrcs[comp]+ ">"

    document.getElementById("parent").appendChild(userCh);
    document.getElementById("parent").appendChild(msg);
    document.getElementById("parent").appendChild(compCh);


}
