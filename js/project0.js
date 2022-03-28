const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentPlayer = 0;

let gameOver = false;

// const oInput = 'O';

// const xInput = 'X';

let oTurn;

let boardState = ['', '', '', '', '', '', '', '', ''];

$(".cell").on('click', function() {
    if ($(this).text() !== "") { // guardian statement 
        return 
    }
    $(this).text(playerTurn(this));  
    let currentPosition = $(this).attr('id')[4];
    boardState[currentPosition] = playerTurn();
    currentPlayer++;
    console.log(winner())
    console.log(boardStateFull())
});

$(".restart").on('click', function() {
    window.location.reload();
});

const playerTurn = function (clickCell) {
    const $clickCell = $(clickCell)
    if (currentPlayer % 2 === 0) {
        $clickCell.addClass('x')
        return 'x'
    } else {
        $clickCell.addClass('circle')
        return 'o'
    }  
};

const boardStateFull = function () {
    for (let i=0; i < boardState.length; i++) {
        if (!boardState[i]) { //revisit
            return false
        }
    }
    return true
};

const winner = function () {
    for (let i=0; i < lines.length; i++) {
        const line = lines[i];
        if (boardState[line[0]] === boardState[line[1]] && boardState[line[1]] === boardState[line[2]]) {
            if (boardState[line[0]] != '') {
                $(".results").text('You Win! (also, just to reiterate, thank you Loden!)')
                return 'you win!'
            }
        } else {
            if (boardStateFull()) {
                $(".results").text("Inexplicably you weren't able to win a game of tic tac toe. Please click the restart button to begin again.")
                return "Game is drawn, please refresh page because I haven't worked out the restart button!"
            }
        }
    }   
};

