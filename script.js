var symbolSelected = null;


var gameBoard = 
["---",
"---",
"---"];

window.onload = function()
{
    displayGame();
}

function displayGame()
{
    //appending board
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++) {
            let box = document.createElement("div");
            box.id = i.toString() + '-' + j.toString();
            
            //box.innerText = gameBoard[i][j];
            box.classList.add("each-box");
            if (i != 2)
            {
                box.classList.add("box-bottom-border");
            }
            
            if (j != 2)
            {
                box.classList.add("box-right-border");
            } 
            box.addEventListener("click", appendSymbol);
            document.getElementById("game-board").appendChild(box);    
            console.log(box.id);        
        }
    }
    
}

function selectXSymbol()
{   
    symbolSelected = document.getElementById("X-button").innerHTML;
    console.log(symbolSelected);
}

function selectOSymbol()
{
    symbolSelected = document.getElementById("O-button").innerHTML;
    console.log(symbolSelected);
}

function appendSymbol()
{
    if (symbolSelected != null)
    {
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
               
        if (symbolSelected == "X")
        {
            this.innerText = symbolSelected;
            this.classList.add("change-backgroud");
            document.getElementById("O-button").disabled = false;
            document.getElementById("X-button").disabled = true;
            document.getElementById("winner-board").innerHTML = "Player 2";
            symbolSelected = null;
        }
        else
        {
            this.innerText = symbolSelected;
            this.classList.add("change-backgroud");
            document.getElementById("X-button").disabled = false;
            document.getElementById("O-button").disabled = true;
            document.getElementById("winner-board").innerHTML = "Player 1";
            symbolSelected = null;
        }
    }
}