const allCards= document.querySelectorAll(".card");

let firstCard=null;
let secondCard=null; 
let canClick = true;
let score = 0;

allCards.forEach(function(card) {
    card.addEventListener("click",handleCardClicked);
});

//handle clicking on a card
function handleCardClicked(){
  if (!canClick) return;

    //prevent card double click
    if (this.classList.contains("flip")) return;
    this.classList.add("flip");
    if(!firstCard) firstCard= this;
    else if (!secondCard) secondCard=this;
     let img1 = firstCard ? firstCard.firstElementChild.src : null;
     let img2 = secondCard? secondCard.firstElementChild.src : null;



      // handle matching condition 
      if(img1 === img2){
        firstCard = null;
        secondCard = null;
        score++;
        if(score === 6) handleGameOver();

      }


      // handle non-matching condition
      else if(img1 && img2){
        canClick = false;
        setTimeout(function(){
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        firstCard = null;
        secondCard = null;
        canClick = true;
        },1000)
      }

}

// Game over
function handleGameOver(){
  setTimeout(function(){
    let retVal = confirm("Congrtualtions! You Win! Wanna Play Again?")
    if (retVal=== true){
      location.reload();
    }

  },1000)
}


//Shuffle Cards
allCards.forEach(function(card){
  let randomPosition = Math.floor(Math.random()*12);
  card.style.order = randomPosition
})