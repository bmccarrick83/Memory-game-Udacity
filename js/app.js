/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// The function init () enables the game to begin
function init() {
 
    // The shuffle function shuffles the objects array
-    var allCards = shuffle(objects);
+    let allCards = shuffle(objects);
    $deck.empty();

// The game starts with no matching cards and zero moves 
match = 0;
moves = 0;
$moves.text('0');

// A for loop creates 16  <li> tags with the class of card for every <i> tag
     // A class of fa fa- and a name of each object from the objects=[] array
     for (let i = 0; i < allCards.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'))
    }
    addCardListener();

    // Enables the timer to reset to 0 when the game is restarted
    resetTimer(nowTime);
    second = 0;
    $timer.text(`${second}`)
    initTime();
}
    

// Adds a score from 1 to 3 stars depending on the amount of moves done
function rating(moves) {
     var rating = 3;
     let rating = 3;
    if (moves > stars3 && moves < stars2) {
        $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > stars2 && moves < star1) {
        $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > star1) {
        $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
        rating = 1;
    }
    return { score: rating };
}
// Add boostrap modal alert window showing time, moves, score it took to finish the game, toggles when all pairs are matched.
function gameOver(moves, score) {
    $('#winnerText').text(`In ${second} seconds, you did a total of ${moves} moves with a score of ${score}. Well done!`);
    $('#winnerModal').modal('toggle');
}
// Clicking on the button located on the top right of the game, enables the cards too be reset
$restart.bind('click', function (confirmed) {
    if (confirmed) {
        $rating.removeClass('fa-star-o').addClass('fa-star');
        init();
    }
});

// This function allows each card to be validated that is an equal match to another card that is clicked on to stay open.
 // If cards do not match, both cards are flipped back over.
    var addCardListener = function () {
    let addCardListener = function () {
     
         // With the following, the card that is clicked on is flipped
         $deck.find('.card').bind('click', function () {
           var $this = $(this);
           let $this = $(this);
     
             if ($this.hasClass('show') || $this.hasClass('match')) { return true; }
     
          var card = $this.context.innerHTML;
          let card = $this.context.innerHTML;
             $this.addClass('open show');
             allOpen.push(card);
// Compares cards if they matched
if (allOpen.length > 1) {
    if (card === allOpen[0]) {
        $deck.find('.open').addClass('match');
        setTimeout(function () {
            $deck.find('open').removeClass('open show');
        }, wait);
        match++;

        // If cards are not matched, there is a delay of 630ms, and the cards will turn back cover up.
    } else {
        $deck.find('.open').addClass('notmatch');
        setTimeout(function () {
            $deck.find('.open').removeClass('open show');
        }, wait / 1.5);
    }

    // The allOpen array specifies all added cards facing up
    allOpen = [];

    // Increments the number of moves by one only when two cards are matched or not matched
    moves++;

    // The number of moves is added to the rating() function that will determine the star score
    rating(moves);

    // The number of moves are added to the modal HTML alert
    $moves.html(moves);
}

// The game is finished once all cards have been matched, with a short delay
if (totalCard === match) {
    rating(moves);
           var score = rating(moves).score;
           let score = rating(moves).score;
    setTimeout(function () {
        gameOver(moves, score);
    }, 500);


       // $restart.bind('click', function (confirmed) {

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
