let uiWindow = createRect(600,200,300,300);

const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const ingamestate_start=0;
const ingamestate_roll=1
const ingamestate_end=0;

let boardPositionSize= 50;
let pawnPosition= [];
let boardPositions=[];
let playerAmountButtons = [];

let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h
    };
    return rectangle;
}
 function clearCanvas()
 {
    g.fillStyle = "lightgray";
    g.fillRect(0,0, canvas.width, canvas.height);

 }

 function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}
function createBoardPositions() {
    let x = 0;
    let y = canvas.height -boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for (let i = 0; i < path.length; i++) {
        if (path[i] == 1) {
           
            x += boardPositionSize; 
        } else if (path[i] == 3) {
          
            x -= boardPositionSize; 
        } else if (path[i] == 0) {
            
            y -= boardPositionSize; 
        }
        boardPositions.push(createRect(x, y, boardPositionSize, boardPositionSize));
    }
}
 function initGame()
 {
    createBoardPositions
 }
 let button = createRect(uiWindow.x + 5 + (i * (50 + 10)), uiWindow.y + 50, 50, 50);

 // Voeg bovenaan in je bestand de volgende variabelen toe:
 {let gamestate_start = 0;
 let gamestate_ingame = 1;
 let gamestate_gameover = 2;
 let gameState = gamestate_start;}

// Voeg de drawGameStart, drawIngame en drawGameOver functies toe:

function drawGameStart() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Click the amount of players to start", 50, 50);

    // Teken de buttons
    for (let i = 0; i < playerAmountButtons.length; i++) {
        ctx.fillStyle = "blue"; // Pas de kleur aan indien nodig
        ctx.fillRect(playerAmountButtons[i].x, playerAmountButtons[i].y, playerAmountButtons[i].width, playerAmountButtons[i].height);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(playerAmountButtons[i].playerAmount, playerAmountButtons[i].x + 20, playerAmountButtons[i].y + 30);
    }
}

function drawIngame() {
    // Teken het bord of andere elementen voor de 'ingame' state
    // Deze code zal hier worden geplaatst wanneer je het implementeert
}

function drawGameOver() {
    // Teken het game-over scherm of andere elementen voor de 'gameover' state
    // Deze code zal hier worden geplaatst wanneer je het implementeert
}

// Pas de draw functie aan:

function draw() {
    if (gameState === gamestate_start) {
        drawGameStart();
    } else if (gameState === gamestate_ingame) {
        drawIngame();
    } else if (gameState === gamestate_gameover) {
        drawGameOver();
    }
}

// Voeg de volgende regels toe onder de initGame-functie:

// Stel de playerAmount in voor elke button
for (let i = 0; i < playerAmountButtons.length; i++) {
    playerAmountButtons[i].playerAmount = i + 1;
}

// Voeg de volgende regels toe om de draw-functie aan te roepen:
initGame(); // Roep initGame aan om de buttons en andere initialisaties uit te voeren
draw(); // Roep draw aan om het juiste scherm te tekenen

 