var image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1 =  Math.floor(Math.random()*6) ;
var randomNumber2 =  Math.floor(Math.random()*6) ;
 var imageLeft = image[randomNumber1];
 var imageRight = image[randomNumber2];

 document.getElementsByClassName("img2")[0].setAttribute("src", imageLeft );
  document.getElementsByClassName("img1")[0].setAttribute("src", imageRight );

   if( randomNumber1 > randomNumber2 ){
     document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins"
   }else if (randomNumber1 < randomNumber2){
     document.querySelector("h1").innerHTML = "PLAYER 2 WINS </br> 🚩"
   }else if(randomNumber1 === randomNumber2){
     document.querySelector("h1").innerHTML = "Draw"
   }
