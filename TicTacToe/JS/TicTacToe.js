// this variable keep track of whose turn it is
let activePlayer = 'X';

//Array stores an array of moves. (Determines wins)
let selectedSqaures = [];

//This function is for placing an x or o in square
function placeXOrO(squareNumber) {
    //this condition ensure square hasnt been selected

    // the .some() method is used to check elements of array to see if clicked on 
    if (!selectedSqaures.some (element => element.includes(squareNumber))) {
        //retrives the html element that was clicked on
        let select = document.getElementById(squareNumber);

        //Checks who turn it is
        if(activePlayer ==='X'){
            select.style.backgroundImage = 'url("images/x.png")';
        }

        else {
            select.style.backgroundImage = 'url("images/o.png")';
        }


        //squareNumber and active player are concatenated together and added to array
        selectedSqaures.push(squareNumber + activePlayer);

        //Checks for any win conditions
        checkWinConditions();

        //For changing active player

        if (activePlayer === 'X'){
            activePlayer = 'O';
        }
        else {
            activePlayer = 'X';
        }

        //Functions playes placement sound.
        audio('./media/place.mp3');

        //Checks if its the computers turn
        if(activePlayer === 'O') {
            //disables clicking for computers
            disableClick();

            //set functiont to wait 1 second 
            setTimeout(function() { computersTurn(); }, 1000);
        }

        return true;

    }

    function checkWinConditions() {

        if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}

        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}

        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}

        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}

        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}

        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}

        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}

        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}

        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}

        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}

        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}

        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}

        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}

        else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}

        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}

        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}

        //condition checks for ties below

        else if (selectedSqaures.length >= 9) {
            // plays tie sound

            audio('./media/tie.mp3');

            setTimeout(function () { resetGame(); }, 500);
        }

        function arrayIncludes (squareA, squareB, squareC) {
            //variables will be used to check for 3 in a row

            const a = selectedSqaures.includes(squareA);
            const b = selectedSqaures.includes(squareB);
            const c = selectedSqaures.includes(squareC);

            if (a === true && b === true && c === true) {return true; }
        }

    }

    //This function makes our body element temporarily unclickable. 

    function disableClick() {
        //this make our body unclickable.
        body.style.pointerEvents = 'none';

        setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);

    }

    //this function takes a string parameter of the path you set eariler for placement sound

    function audio(audioURL) {

        //We Create a new audio object and we pass the path as parameter.

        let audio = new Audio(audioURL);

        //play method plays audio

        audio.play();
    }


    // this function utilizes html canvas to draw win lines
    function drawWinLine(coordX1, coordY1, coordX2, coordY2){

        const canvas = document.getElementById('win-lines');

        const c = canvas.getContext('2d');


        let x1 = coordX1,
            y1 = coordY1,
            x2 = coordX2,
            y2 = coordY2,
            x = x1,
            y = y1;


        //this intereacts withe canvas.
        function animateLineDrawing() {
            //creates a loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);

            //this method clears content from last loop
            c.clearRect(0, 0, 608, 608);

            //starts new patch
            c.beginPath();

            c.moveTo(x1, y1);

            c.lineTo(x, y);

            c.lineWidth = 10;

            c.strokeStyle = "rgba(70, 255, 33, .8)";

            c.stroke();

            //condition checks if reached the endpoints

            if (x1 <= x2 && y1 <= y2) {
                // adds 10 to the prev end x endpoint
                if(x < x2) {x +=10;}

                if(y < y2) {y += 10;}

                if( x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }

            if (x1 <= x2 && y1 >= y2) {
                
                if(x < x2) {x +=10;}

                if(y > y2) {y -= 10;}

                if( x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }


        }

        function clear() {

            const animationLoop = requestAnimationFrame(clear);

            c.clearRect(0,0, 608, 608);

            cancelAnimationFrame(animationLoop);
        }

        disableClick();

        audio('./media/winGame.mp3');

        animateLineDrawing();

        setTimeout(function () {clear(); resetGame(); }, 1000);

    }

    //functionr resets game in event of a tie or win
    function resetGame() {

        for(let i = 0; i < 9; i++) {
            
            let sqaure = document.getElementById(String(i));

            sqaure.style.backgroundImage = '';
        }

        selectedSqaures = [];
    }



    //This function results in computer choosing in random sqaure
    function computersTurn() {

        //this boolean is needed for while loop
        let success = false;

        // this variable stores a random number 0-8
        let pickASquare;

        //this condition allows our while loop to keep trying if a quare is selected already

        while(!success) {
            // a random number between 0 and 8 is selected 

            pickASquare = String(Math.floor(Math.random() * 9));

            if(placeXOrO(pickASquare)) {

                placeXOrO(pickASquare);

                success = true;
            };
        }
    }

}
