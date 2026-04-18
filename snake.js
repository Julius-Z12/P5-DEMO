const cellSize = 25;

const snakeHead = {
    image: null,
    positionX: 1,
    positionY: 1,
    sizeX: 1,
    sizeY: 1


}
function drawHead(){
    image(
        snakeHead.image
        snakeHead.sizeX
        snakeHead.positionX
        snakeHead.positionY
        snakeHead.sizeY
        
        
        )
}




function drawGrid() {
    for (var x = 0; x < canvasX; x = x + cellSize) {
        line(x, 0, x, canvasY);

    }

    for (var y = 0; y < canvasY; y = y + cellSize) {
        line(0, y, canvasX, y);



    }
}

function drawSnake() {
    drawGrid();

}

function setupSnake () { 
    snakeHead.image = loadImage('assets/')

}

