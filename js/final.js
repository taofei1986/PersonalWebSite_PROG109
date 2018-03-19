var  portfolioImage=document.getElementsByClassName("portfolioImage");
var imagenormal=["image/Number-Guess-Game.gif","image/rock-paper-scissors.gif","image/Form.gif","image/firstWeb.gif","image/flick.gif"];
var imageRoll=["image/Number-Guess-Game1.gif","image/rock-paper-scissors1.gif","image/Form1.gif","image/firstWeb1.gif","image/flick1.gif"];
var imageUrl=["portfolio/project1/GuessNumberGame.html","portfolio/project2/Rock-Paper-ScissorsGame.html","portfolio/Assignment4/orderform.html","portfolio/Assignment3/index.html","https://www.flickr.com/photos/toffeestudio/"];

var imageClick=function(){
  var i = this.serialNumber;
  window.open(imageUrl[i]);
}
//  Mouse over image
var imageMouseover=function(){
  var i = this.serialNumber;
  this.src=imageRoll[i];
  this.style.cursor = "pointer";
}
//  Mouse off image
var imageMouseout=function(){
  var i = this.serialNumber;
  this.src=imagenormal[i];
}

for (var i=0; i<portfolioImage.length; i++) {
	var Actions = portfolioImage[i];
// set up event handler associations for the image node.
// Each image will be targeted by 3 events: click, mouseover, and mouseout
	Actions.addEventListener("click", imageClick, false);       
	Actions.addEventListener("mouseover", imageMouseover, false);    // image will now respond to mouse over events
	Actions.addEventListener("mouseout", imageMouseout, false);    // image will now respond to mouse out events
// add new property to image node to store the serial number
	Actions.serialNumber = i; 
}    