var firstPlayer = true ;
var xPosition = [];
var oPosition = []; 
var progress = 0;

document.querySelectorAll('.area').forEach( (e)=>{
    e.addEventListener("click", () => {
        if (e.innerHTML == ""){
            if (firstPlayer) {
                e.innerHTML = "<span> X </span>" ;
                xPosition.push(e.classList[1]);
            }
            else{
                e.innerHTML = "<span> O </span>";
                oPosition.push(e.classList[1]);
            }
            progress +=1;
            finishgame();
            firstPlayer = !firstPlayer;
        }
        

        
    })
})

const restartGame = () =>{
   
        xPosition = [];
        oPosition = [];
        progress = 0;
        firstPlayer =  true;
        document.querySelectorAll(".area").forEach(  (e) => {
            e.innerHTML = "";
        })
    
}

const finishgame  = () => {
    let currentPlayer =  firstPlayer ? xPosition : oPosition ;
    
    if  (currentPlayer.indexOf("one") >=0  & currentPlayer.indexOf("four") >=0  & currentPlayer.indexOf("seven") >=0   ||
    currentPlayer.indexOf("two") >=0  & currentPlayer.indexOf("five") >=0  & currentPlayer.indexOf("eight") >=0 ||
    currentPlayer.indexOf("three") >=0  & currentPlayer.indexOf("six") >=0  & currentPlayer.indexOf("nine") >=0  ||
    currentPlayer.indexOf("one") >=0  & currentPlayer.indexOf("two") >=0  & currentPlayer.indexOf("three") >=0  ||
    currentPlayer.indexOf("four") >=0  & currentPlayer.indexOf("five") >=0  & currentPlayer.indexOf("six") >=0  ||
    currentPlayer.indexOf("seven") >=0  & currentPlayer.indexOf("eight") >=0  & currentPlayer.indexOf("nine") >=0  ||
    currentPlayer.indexOf("one") >=0  & currentPlayer.indexOf("five") >=0  & currentPlayer.indexOf("nine") >=0  ||
    currentPlayer.indexOf("three") >=0  & currentPlayer.indexOf("five") >=0  & currentPlayer.indexOf("seven") >=0 
    ){
        let infoDiv = document.createElement("div");
        let winner = firstPlayer ? "x" : "0";
        infoDiv.innerHTML =  " <h2 class='text-center' >  Winner : " + winner +"  </h2>";
        infoDiv.classList.add("info");
        document.querySelector(".gameMenu").appendChild(infoDiv);
        setTimeout(restartGame,1100);
    }else {
        if (progress==9){
            let infoDiv = document.createElement("div");
            infoDiv.innerHTML =  " <h2 class='text-center' >  Draw  </h2>";
            infoDiv.classList.add("info");
            document.querySelector(".gameMenu").appendChild(infoDiv);
            setTimeout(restartGame,1100);
        }
    }
    
    
}