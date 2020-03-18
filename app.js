
var scores, roundScore, activePlayer, dice;
init();
 
document.querySelector('.play').addEventListener('click', function(){
    document.querySelector('.box').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
});



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlayng){
    //1. Random number maker

        var dice =  Math.floor(Math.random() * 6) + 1;
    
    //2. Display a correct picture

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './pics/dice-' + dice + '.png';
       
        

    //3. Update the scores. IF rolled number wad NOT a 1

    if(dice !== 1) {
        roundScore += dice; //updates the roundScore
                            //display the new roundScore
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.text').style.display = 'none';
        
    } else {
        //Next player
        nextPlayer();
        document.querySelector('.text').style.display = 'block';

    }
};
});
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlayng){
    //add current score to global sccore
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if a player won
    if(scores[activePlayer] >=100) {
        document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlayng = false;
        document.querySelector('.text').style.display = 'none';
        
    } else {
    //Next player
        nextPlayer();
        document.querySelector('.text').style.display = 'block';
};
};
});


function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 :
    activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.text').style.display;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    

    
}
document.querySelector('.btn-new').addEventListener('click', init); 

function init() {
    scores= [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlayng = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}