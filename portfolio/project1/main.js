	// write by Taofei Chen, Date: 11/12/2016.
var computerNumber = Math.floor( Math.random( ) * 20) + 1;				// give computer a random number
var i=0;																//This is for how many times the fuction have run.
var j;																	//This is for how many chances the player have.

	//fuction game() is the game part to check whether player's guessing number is correct, and give some tips. If the number is correct, then end game. player win.
function game(){
	var userNumber = document.getElementById("inputNumber").value;
	if (userNumber == computerNumber){																					//when userNumber = computerNumber
		alert("Congratulations! You Win!");																				//player win.
		window.location.href= "ThankyouPage.html";																		//after clicking 'ok' in alert, jump to thank-you page.
	}
	else if (userNumber < computerNumber){																				//when userNumber < computerNumber
		document.getElementById("notice").innerHTML = "You fail! The number is less than the computer's number.";		// give the tips text to player。
		notice.style.color = "red";																						// show the output tips text red color.
	}
	else{																												//when userNumber > computerNumber
		document.getElementById("notice").innerHTML = "You fail! The number is greater than the computer's number.";	// give the tips text to player.
		notice.style.color = "red";																						// show the output tips text red color.
	}
};

	//function times() is part to count how many chance player have, if player wastes all 5 chances, then end game. computer win.
function times(){
	if (i<4){																					//notice only have 4 times
		i++;																					//everytimes running this fuction, i=i+1.
		j=5-i;																					//j is for how many chances the player still have.
		game();
		if (j<=1){																				//when the player just have 1 or less chance.
			document.getElementById("chances").innerHTML ="You still have "+j+" chance.";
			chances.style.color = "yellow";														//show the output notice text yellow color.
		}
		else{																					//when the player have more than 1 chance.
			document.getElementById("chances").innerHTML ="You still have "+j+" chances.";
			chances.style.color = "blue";														//show the output notice text blue color.
		}
	}
	else{																						//player fail all 5 times.
		alert("Sorry, You Lose!");																//player lose
		window.location.href= "ThankyouPage.html";												//after clicking 'ok' in alert, jump to thank-you page.
	}
};
