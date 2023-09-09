var symbolSelected = null;
var daigonal1 = new Array(3);
var daigonal2 = new Array(3);
var totalFrequency = 9;
var isTie = -1;
var player1 = null;
var player2 = null;

var gameBoard = 
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
window.onload = function()
{
    document.getElementById("game").style.display = "none";
    // let btn = document.getElementById("play");
    // btn.addEventListener("click", displayGame());
}


function displayGame()
{
    document.getElementById("game").style.display = "";
    document.getElementById("login").style.display = "none";
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    console.log(player1);
    console.log(player2);
    document.getElementById("player-turn").innerText = player1;
    //appending board
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++) {
            let box = document.createElement("div");
            box.id = i.toString() + '-' + j.toString();
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

        if (this.innerText != "")
            return;
        
        if (symbolSelected == "X")
        {
            this.innerText = symbolSelected;
            gameBoard[r][c] = symbolSelected;
            totalFrequency -= 1;
            this.classList.add("change-backgroud");
            document.getElementById("O-button").disabled = false;
            document.getElementById("X-button").disabled = true;
            document.getElementById("player-turn").innerText = player2;
            symbolSelected = null;
        }
        else
        {
            this.innerText = symbolSelected;
            gameBoard[r][c] = symbolSelected;
            totalFrequency -= 1;
            this.classList.add("change-backgroud");
            document.getElementById("X-button").disabled = false;
            document.getElementById("O-button").disabled = true;
            document.getElementById("player-turn").innerHTML = player1;
            symbolSelected = null;
        }
    }
    checkFrequencyDaigonal();
    checkFrequencyRowsandColumns();
    console.log(totalFrequency);
    console.log(gameBoard);
    if (totalFrequency == 0 && isTie == -1)
    {
        document.getElementById("congratulationsHeader").innerText = "Its a tie ";
        document.getElementById("congratulationsBody").innerText = "Nobody won";
        $("#congratulationsModal").modal('show');
    }
}

function checkFrequencyDaigonal()
{
    //check 1st daigonal
    let r = 0;
    let c = 0;
    let xCount1 = 0;
    let oCount1 = 0;
    while (r < 3 && c < 3)
    {
        if (gameBoard[r][c] == "X")
        {
            xCount1 += 1;
        }
        if (gameBoard[r][c] == "O")
        {
            oCount1 += 1;
        }
        r++;
        c++;
    }
    if (xCount1 == 3) {
        console.log("Player 1 is the winner");
        document.getElementById("player").innerText = player1;
        $("#congratulationsModal").modal('show');
        isTie = 0;
    }
    if (oCount1 == 3) {
        console.log("Player 2 is the winner");
        document.getElementById("player").innerText = player2;
        $("#congratulationsModal").modal('show');
        isTie = 0;
    }

    //check for 2nd daigonal
    r = 0;
    c = 2;
    let xCount2 = 0;
    let oCount2 = 0;
    while (r < 3 && c >= 0)
    {
        if (gameBoard[r][c] == "X")
        {
            xCount2 += 1;
        }
        if (gameBoard[r][c] == "O")
        {
            oCount2 += 1;
        }
        r++;
        c--;
    }
    if (xCount2 == 3) {
        console.log("Player 1 is the winner");
        document.getElementById("player").innerText = player1;
        $("#congratulationsModal").modal('show');
        isTie = 0;
    }
    if (oCount2 == 3) {
        console.log("Player 2 is the winner");
        document.getElementById("player").innerText = player2;
        $("#congratulationsModal").modal('show');
        isTie = 0;
    }
    
}

function checkFrequencyRowsandColumns()
{
    //frequency at row
    for (let i = 0; i < 3; i++) {
        let xCount1 = 0;
        let oCount1 = 0;
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] == "X") {
                xCount1 += 1;
            }
            if (gameBoard[i][j] == "O")
            {
                oCount1 += 1;
            }
        }

        if (xCount1 == 3) {
            console.log("Player 1 is the winner");
            document.getElementById("player").innerText = player1;
            $("#congratulationsModal").modal('show');
            isTie = 0;
        }
        if (oCount1 == 3) {
            console.log("Player 2 is the winner");
            document.getElementById("player").innerText = player2;
            $("#congratulationsModal").modal('show');
            isTie = 0;
        }
    }

    //frequency at col
    for (let i = 0; i < 3; i++) {
        let xCount2 = 0;
        let oCount2 = 0;
        for (let j = 0; j < 3; j++) {
            if (gameBoard[j][i] == "X") {
                xCount2 += 1;
            }
            if (gameBoard[j][i] == "O")
            {
                oCount2 += 1;
            }
        }

        if (xCount2 == 3) {
            console.log("Player 1 is the winner");
            document.getElementById("player").innerText = player1;
            $("#congratulationsModal").modal('show');
            isTie = 0;
            
        }
        if (oCount2 == 3) {
            console.log("Player 2 is the winner");
            document.getElementById("player").innerText = player2;
            $("#congratulationsModal").modal('show');   
            isTie = 0;         
        }        
    }
}


