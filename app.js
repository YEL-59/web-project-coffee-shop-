var scores, roundScore, activePlayer,gamePlaying ;
init();

function nextPlayer(){
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
};


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice;
    randomDice =Math.floor(Math.random()*6) + 1;
    btnDOM=document.querySelector('.dice');
    
    btnDOM.style.display='block';
    btnDOM.src='img/dice-' + randomDice + '.png';

    if(randomDice !== 1){
        roundScore += randomDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
}
    

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer] >=100){
        document.querySelector('#name-' +activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying= false;
    }else{
        nextPlayer();
    }
    }
    


});
document.querySelector('.btn-new').addEventListener('click', init);




function init(){
    scores=[0,0];
roundScore=0;
activePlayer=0;

gamePlaying= true;

document.querySelector('.dice').style.display='none';   

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent=' 0';
document.querySelector('#name-0').textContent='player-1';
document.querySelector('#name-1').textContent='player-2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


};  
