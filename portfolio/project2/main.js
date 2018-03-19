//write by Taofei Chen 11/28/2016
var startbutton=document.getElementById("startgame");//declare PlayGame button.
var replaybutton=document.getElementById("replay");//declare Replay button.
// declare image source arrays: human images, computer images, human rollover images, computer rollover images.
var humanRollover=["imag/Paper1black.jpg","imag/Rock1black.jpg","imag/Scissors1black.jpg"];
var humanImages=["imag/Paper1.jpg","imag/Rock1.jpg","imag/Scissors1.jpg"];
var computerRollover=["imag/Paper2black.jpg","imag/Rock2black.jpg","imag/Scissors2black.jpg"];
var computerImages=["imag/Paper2.jpg","imag/Rock2.jpg","imag/Scissors2.jpg"];
//declare welcome display,game display,end display.
var welcomebox=document.getElementById("welcomegame");
var gamebox=document.getElementById("game");
var endbox=document.getElementById("end");
//the first contains all the human images, the second contains all the computer images.
var humanList=document.getElementsByClassName("humanimage");
var computerList = document.getElementsByClassName("computerimage");
//declare computerNumber as computer selects,humanNumber as human selects.
var computerNumber=0;
var humanNumber=0;
//declare tie, human win, computer win.
var tie=0;
var humanWin=0;
var computerWin=0;
//declare round.
var round=0;
//every round game result for output.
var resultRound=document.getElementById("resultRound");
var humanchoose=document.getElementById("humanchoose");
var computerchoose=document.getElementById("computerchoose");
var roundwin=document.getElementById("roundwin");
var gameresult=document.getElementById("results");
//output human selects by words.
var humanChoice=function(){
  if(humanNumber==0){
    humanchoose.innerHTML="Human selects: Paper.";
  }
  else if(humanNumber==1){
    humanchoose.innerHTML="Human selects: Rock.";
  }
  else{
    humanchoose.innerHTML="Human selects: Scissors.";
  }
}
//output computer selects by words.
var computerChoice=function(){
  if(computerNumber==0){
    computerchoose.innerHTML="Computer selects: Paper.";
  }
  else if(computerNumber==1){
    computerchoose.innerHTML="Computer selects: Rock.";
  }
  else{
    computerchoose.innerHTML="Computer selects: Scissors.";
  }
}
//change to end display.
var DisplayEnd=function(){
  welcomebox.style.display = "none";
  gamebox.style.display = "none";
  endbox.style.display = "block";
}
//game part.
var game=function(){
  if(round<10){                                                                                 //10 round end this part.
    round++;
    computerList[computerNumber].src=computerImages[computerNumber];                            //reset computer images bact to default.
    computerNumber=Math.floor( Math.random() * 3 );                                             //set a random number(0-2) as computer selects result.
    computerList[computerNumber].src=computerRollover[computerNumber];                          //changes computer selected image.
    humanChoice();                                                                              //output human selects
    computerChoice();                                                                           //output computer selects by words.
    if(humanNumber==computerNumber){                      //tie condition.
      tie++;
      roundwin.innerHTML="This round is tie.";
    }
    else if(humanNumber+1==computerNumber){               //human win condition.
      humanWin++;
      roundwin.innerHTML="This round is Human win.";
    }
    else if(humanNumber-2==computerNumber){               //human win condition.
      humanWin++;
      roundwin.innerHTML="This round is Human win.";
    }
    else{                                                 //Computer win condition.
      computerWin++;
      roundwin.innerHTML="This round is Computer win.";
    }
    resultRound.innerHTML="Results of Round "+round;
    gameresult.innerHTML= "Human: "+humanWin+" "+" Computer: "+computerWin+" "+" Tie: "+tie;
  }
  else{                   //after 10 round change to end display.
    DisplayEnd();
    document.getElementById("finalresults").innerHTML="You win: "+humanWin+"<br/>Computer win: "+computerWin+"<br/>Tie: "+tie;    //show the final result.
    if (computerWin<humanWin){            //show output when human win.
      document.getElementById("ending").innerHTML="You Win!";
      document.getElementById("ending").style.color="green";
      resultImage.src="imag/happy.jpg";
    }
    else if (computerWin>humanWin){       //show output when computer win.
      document.getElementById("ending").innerHTML="Computer Win!";
      document.getElementById("ending").style.color="red";
      resultImage.src="imag/sad.jpg";
    }
    else{                                 //show output when tie.
      document.getElementById("ending").innerHTML="Ended in a tie!";
      document.getElementById("ending").style.color="#2f48ce";
      resultImage.src="imag/peace.jpg";
    }
  }
}
//Event handler for clicking on the human image. This is where all the game logic happens.

var humanClick=function(){
  var i = this.serialNumber;
  humanNumber=i;
  game();
}
//  Mouse over human image
var humanMouseover=function(){
  var i = this.serialNumber;
  this.src=humanRollover[i];
}
//  Mouse off human image
var humanMouseout=function(){
  var i = this.serialNumber;
  this.src=humanImages[i];
}

//After click "PlayGame", display changes to game-display.
var DisplayGame = function() {
  welcomebox.style.display = "none";
  gamebox.style.display = "block";
  endbox.style.display = "none";
}
//a short pause 3s change to the game display.
var DisplayGame3s=function(){
  setTimeout(function(){startbutton.value="3 seconds"},0);
  setTimeout(function(){startbutton.value="2 seconds"},1000);
  setTimeout(function(){startbutton.value="1 second"},2000);
  setTimeout(DisplayGame,3000);
}

startbutton.addEventListener("click",DisplayGame3s,false);
//PlayGame button changes when you mouse over or mouse out.
var startbuttonselect=function() {
  startbutton.style.color="#ffffff";
  startbutton.style.backgroundColor="#000000";
  startbutton.style.cursor = "pointer";
}
var startbuttonout=function(){
  startbutton.style.backgroundColor="#dddddd";
  startbutton.style.color="#000000";
  }
startbutton.addEventListener("mouseover",startbuttonselect,false);
startbutton.addEventListener("mouseout",startbuttonout,false);
//Replay button changes when you mouse over or mouse out.
var replaybuttonselect=function() {
  replaybutton.style.color="#ffffff";
  replaybutton.style.backgroundColor="#000000";
  replaybutton.style.cursor = "pointer";
}
var replaybuttonout=function(){
  replaybutton.style.backgroundColor="#dddddd";
  replaybutton.style.color="#000000";
  }
replaybutton.addEventListener("mouseover",replaybuttonselect,false);
replaybutton.addEventListener("mouseout",replaybuttonout,false);
replaybutton.addEventListener("click",function()
{
  location.href="Rock-Paper-ScissorsGame.html";
},false);
//  Loop through nodelist of human image nodes and assign event handlers to each one
//  Once this is done, game playing logic all happens inside of the clickHandler function
for (var i=0; i<humanList.length; i++) {
	var humanActions = humanList[i];
// set up event handler associations for the image node.
// Each image will be targeted by 3 events: click, mouseover, and mouseout
	humanActions.addEventListener("click", humanClick, false);       // image will now respond to click events
	humanActions.addEventListener("mouseover", humanMouseover, false);    // image will now respond to mouse over events
	humanActions.addEventListener("mouseout", humanMouseout, false);    // image will now respond to mouse out events
// add new property to image node to store the serial number
	humanActions.serialNumber = i; 
}    