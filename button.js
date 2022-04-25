var firstClick;
var secondClick;
var popUpClick;

var clickClue1;
var clickClue2;
var clickClue3;
var clickClue4;
var clickClue5;
var clickClue6;

var clickGuess;

var boyButton;
var fatherButton;
var manButton;
var suspectButton1;
var suspectButton2;
var suspectButton3;

var gobackbutton;
var gobacktomainButton;
var clickImg;

function startButton() {
  firstClick.locate(550, 550);
  popUpClick.locate(-325, -530);
  secondClick.locate(-325, -530);
}

function secondButton() {
  firstClick.locate(-400, -500);
  secondClick.locate(325, 550);
  popUpClick.locate(-400, -500);
}
function popUpButton() {
  firstClick.locate(-400, -500);
  secondClick.locate(-400, -500);
  popUpClick.locate(325, 550);
}

function mainButton() {
  secondClick.locate(-400, -500);
  popUpClick.locate(-400, -500);

  //duvet
  clickClue1.locate(220, 330);
  //calander
  clickClue2.locate(30, 200);
  //body
  clickClue3.locate(450, 350);
  //blood
  clickClue4.locate(680, 350);
  //phone
  clickClue5.locate(520, 528);
  //paper
  clickClue6.locate(230, 420);

if (clue1Count == 0) {
    boyButton.locate(-500, -650);
  } else if (clue1Count == 1) {
    boyButton.locate(100, 650);
  }

if (clue3Count == 0) {
    fatherButton.locate(-500, -650);
  } else if (clue3Count == 1) {
    fatherButton.locate(300, 650);
  }

if (clue5Count == 0) {
  manButton.locate(-500, -650);
} else if (clue5Count == 1) {
  manButton.locate(500, 650);
}

if (clue2Count == 0) {
  clickGuess.locate(-600, -500);
} else if (clue2Count == 1) {
  clickGuess.locate(600, 50);
}

}

function lastPageButton() {
  clickGuess.locate(-400, -500);
  clickClue6.locate(-400, -500);
  clickClue5.locate(-400, -500);
  clickClue4.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue2.locate(-400, -500);
  clickClue1.locate(-400, -500);

  suspectButton3.locate(550, 400);
  suspectButton2.locate(350, 400);
  suspectButton1.locate(150, 400);

  popUpClick.locate(330, 650);
}

function wrongPopupButton() {
  clickGuess.locate(-400, -500);
  clickClue6.locate(-400, -500);
  clickClue5.locate(-400, -500);
  clickClue4.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue2.locate(-400, -500);
  clickClue1.locate(-400, -500);
  suspectButton3.locate(-550, -400);
  suspectButton2.locate(-350, -400);
  suspectButton1.locate(-150, -400);

  gobackbutton.locate(325, 530);
}

function gobacktoMainPageButton() {
  gobacktomainButton.locate(325, 530);
}

function InitialButton() {
  firstClick = new Clickable();
  firstClick.resize(150, 50);
  firstClick.color = "#00000000";
  firstClick.strokeWeight = 0;
  firstClick.text = "CASE 1";
  firstClick.textColor = "#CED4DA";
  firstClick.textSize = 25;
  firstClick.textFont = "Verdana";
  firstClick.textScaled = true;
  firstClick.onRelease = function() {
    gameState = 'PopUp'
  }

  secondClick = new Clickable();
  secondClick.locate(-400, -550);
  secondClick.resize(150, 50);
  secondClick.color = "#00000000";
  secondClick.strokeWeight = 0;
  secondClick.text = "Start investigation";
  secondClick.textColor = "#F8F9FA";
  secondClick.textSize = 25;
  secondClick.textFont = "Verdana";
  secondClick.textScaled = true;
  secondClick.onRelease = function() {
    gameState = 'main'
  }

  popUpClick = new Clickable();
  popUpClick.locate(-400, -550);
  popUpClick.resize(150, 50);
  popUpClick.color = "#00000000";
  popUpClick.strokeWeight = 0;
  popUpClick.textColor = "#F8F9FA";
  popUpClick.textSize = 23;
  popUpClick.textFont = "Verdana";
  popUpClick.text = "Go Back to Investigate";
  popUpClick.textScaled = true;
  popUpClick.onRelease = function() {
    gameState = 'main'
  }

  //duvet
  clickClue1 = new Clickable();
  clickClue1.locate(-400, -500);
  clickClue1.resize(110, 50);
  clickClue1.text = "  ";
  clickClue1.color = "#00000000";
  clickClue1.strokeWeight = 00;
  clickClue1.onRelease = function() {
    gameState = 'clue1'
    clue1Count = 1;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  //calander
  clickClue2 = new Clickable();
  clickClue2.locate(-400, -500);
  clickClue2.resize(100, 130);
  clickClue2.text = "   ";
  clickClue2.color = "#00000000";
  clickClue2.strokeWeight = 00;
  clickClue2.onPress = function() {
    gameState = 'clue2'
    clue2Count = 1 ;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  //body
  clickClue3 = new Clickable();
  clickClue3.locate(-400, -500);
  clickClue3.resize(225, 175);
  clickClue3.text = "   ";
  clickClue3.color = "#00000000";
  clickClue3.strokeWeight = 00;
  clickClue3.onPress = function() {
    gameState = 'clue3'
    clue3Count = 1;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  //blood
  clickClue4 = new Clickable();
  clickClue4.locate(-400, -500);
  clickClue4.resize(70, 130);
  clickClue4.text = "   ";
  clickClue4.color = "#00000000";
  clickClue4.strokeWeight = 00;
  clickClue4.onPress = function() {
    gameState = 'clue4'
    //clue4Count = 1;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  //phone
  clickClue5 = new Clickable();
  clickClue5.locate(-400, -500);
  clickClue5.resize(45, 40);
  clickClue5.text = "   ";
  clickClue5.color = "#00000000";
  clickClue5.strokeWeight = 00;
  clickClue5.onPress = function() {
    gameState = 'clue5'
    clue5Count = 1;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  //paper
  clickClue6 = new Clickable();
  clickClue6.locate(-400, -500);
  clickClue6.resize(40, 40);
  clickClue6.text = "   ";
  clickClue6.color = "#00000000";
  clickClue6.strokeWeight = 00;
  clickClue6.onPress = function() {
    gameState = 'clue6'
    clue6Count = 1;
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

//Boy Button
  boyButton = new Clickable();
  boyButton.image = mySuspect1;
  boyButton.fitImage = true;
  boyButton.imageScale = 1.2;
  boyButton.locate(-400, -500);
  boyButton.resize(150, 200);
  boyButton.strokeWeight = 00;
  boyButton.text = "   ";
  boyButton.onPress = function() {
    gameState = 'foundBoy'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

//Father Button
fatherButton = new Clickable();
fatherButton.image = mySuspect2;
fatherButton.fitImage = true;
fatherButton.imageScale = 1.2;
fatherButton.locate(-400, -500);
fatherButton.resize(150, 200);
fatherButton.strokeWeight = 00;
fatherButton.text = "   ";
fatherButton.onPress = function() {
  gameState = 'foundFather'
  clickClue6.locate(-400, -500);
  clickClue5.locate(-400, -500);
  clickClue4.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue2.locate(-400, -500);
  clickClue1.locate(-400, -500);
}

//Man Button
manButton = new Clickable();
manButton.image = mySuspect2;
manButton.fitImage = true;
manButton.imageScale = 1.2;
manButton.locate(-400, -500);
manButton.resize(150, 200);
manButton.strokeWeight = 00;
manButton.text = "   ";
manButton.onPress = function() {
  gameState = 'foundMan'
  clickClue6.locate(-400, -500);
  clickClue5.locate(-400, -500);
  clickClue4.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue2.locate(-400, -500);
  clickClue1.locate(-400, -500);
}

//Guess the Suspect Button
  clickGuess = new Clickable();
  //clickGuess.image = clickImg;
  clickGuess.locate(-400, -500);
  clickGuess.resize(150, 50);
  clickGuess.text = "Let's Guess the Suspect!";
  popUpClick.textScaled = true;
  //clickGuess.color = "#00000000";
  clickGuess.strokeWeight = 00;
  clickGuess.onPress = function() {
    gameState = 'suspectScreen'
    clickGuess.locate(-400, -500);
  }

  //Boy
  suspectButton1 = new Clickable();
  suspectButton1.image = mySuspect1;
  suspectButton1.fitImage = true;
  suspectButton1.imageScale = 1.2;
  suspectButton1.locate(-400, -500);
  suspectButton1.resize(150, 200);
  suspectButton1.strokeWeight = 00;
  suspectButton1.text = "   ";
  suspectButton1.onPress = function() {
    gameState = 'wrongsuspect'
    suspectButton1.locate(-500, -400);
    suspectButton2.locate(-500, -400);
    suspectButton3.locate(-500, -400);
  }

  //Father
  suspectButton2 = new Clickable();
  suspectButton2.image = mySuspect2;
  suspectButton2.fitImage = true;
  suspectButton2.imageScale = 1.2;
  suspectButton2.locate(-400, -500);
  suspectButton2.resize(150, 200);
  suspectButton2.strokeWeight = 00;
  suspectButton2.text = "   ";
  suspectButton2.onPress = function() {
    gameState = 'wrongsuspect'
    suspectButton1.locate(-500, -400);
    suspectButton2.locate(-500, -400);
    suspectButton3.locate(-500, -400);
  }

  //Mister.B (= Murderer)
  suspectButton3 = new Clickable();
  suspectButton3.image = mySuspect3;
  suspectButton3.fitImage = true;
  suspectButton3.imageScale = 1.2;
  suspectButton3.locate(-400, -500);
  suspectButton3.resize(150, 200);
  suspectButton3.strokeWeight = 00;
  suspectButton3.text = "   ";
  suspectButton3.onPress = function() {
    gameState = 'rightsuspect'
    suspectButton1.locate(-500, -400);
    suspectButton2.locate(-500, -400);
    suspectButton3.locate(-500, -400);
  }

  gobackbutton = new Clickable();
  gobackbutton.image = clickImg;
  gobackbutton.locate(-400, -500);
  gobackbutton.resize(150, 50);
  gobackbutton.text = "   ";
  gobackbutton.onPress = function() {
    gameState = 'suspectScreen'
    gobackbutton.locate(-500, -400);
  }

  gobacktomainButton = new Clickable();
  gobacktomainButton.image = clickImg;
  gobacktomainButton.locate(-400, -500);
  gobacktomainButton.resize(150, 50);
  gobacktomainButton.text = "   ";
  gobacktomainButton.onPress = function() {
    gameState = 'title'
    gobacktomainButton.locate(-500, -400);
  }

}
