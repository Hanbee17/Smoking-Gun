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
  firstClick.locate(100, 600);
  popUpClick.locate(-325, -530);
  secondClick.locate(-325, -530);
}

function secondButton() {
  firstClick.locate(-400, -500);
  secondClick.locate(325, 530);
  popUpClick.locate(-400, -500);
}
function popUpButton() {
  firstClick.locate(-400, -500);
  secondClick.locate(-400, -500);
  popUpClick.locate(325, 530);
}

function mainButton() {
  secondClick.locate(-400, -500);
  popUpClick.locate(-400, -500);

  //duvet
  clickClue1.locate(280, 330);
  //calander
  clickClue2.locate(60, 200);
  //body
  clickClue3.locate(500, 350);
  //blood
  clickClue4.locate(700, 350);
  //phone
  clickClue5.locate(510, 530);
  //paper
  clickClue6.locate(220, 420);

if (clue5Count == 0) {
  manButton.locate(-500, -650);
} else if (clue5Count == 1) {
  manButton.locate(500, 650);
}

if (clueCount == 1) {
  boyButton.locate(100, 650);
} else if (clueCount == 2) {
  fatherButton.locate(300, 650);
}  else if (clueCount >= 4) {
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
  //firstClick.image = clickImg;``
  firstClick.resize(150, 50);
  firstClick.color = "#000000";
  firstClick.cornerRadius = 0;
  firstClick.strokeWeight = 3;
  firstClick.text = "Case 1";
  firstClick.textColor = "#FFFFFF";
  firstClick.textSize = 25;
  //firstClick.textFont = "sans-serif";
  firstClick.textScaled = true;
  firstClick.onRelease = function() {
    gameState = 'PopUp'
  }

  secondClick = new Clickable();
  //secondClick.image = clickImg;
  secondClick.locate(-400, -550);
  secondClick.resize(150, 50);
  secondClick.color = "#FFFFFF";
  secondClick.cornerRadius = 0;
  secondClick.text = "Let's Play";
  secondClick.textScaled = true;
  secondClick.onRelease = function() {
    gameState = 'main'
  }

  popUpClick = new Clickable();
  //popUpClick.image = clickImg;
  popUpClick.locate(-400, -550);
  popUpClick.resize(150, 50);
  popUpClick.color = "#FFFFFF";
  popUpClick.cornerRadius = 0;
  popUpClick.text = "Go Back to Play";
  popUpClick.textScaled = true;
  popUpClick.onRelease = function() {
    gameState = 'main'
  }

  //duvet
  clickClue1 = new Clickable();
  //clickClue1.image = clickImg;
  clickClue1.locate(-400, -500);
  clickClue1.resize(50, 50);
  clickClue1.text = "  ";
  clickClue1.color = "#00000000";
  clickClue1.strokeWeight = 3;
  clickClue1.onRelease = function() {
    gameState = 'clue1'
    clueCount ++
  }

  //calander
  clickClue2 = new Clickable();
  //clickClue2.image = clickImg;
  clickClue2.locate(-400, -500);
  clickClue2.resize(100, 120);
  clickClue2.text = "   ";
  clickClue2.color = "#00000000";
  clickClue2.strokeWeight = 3;
  clickClue2.onPress = function() {
    gameState = 'clue2'
    clueCount ++
  }

  //body
  clickClue3 = new Clickable();
  //clickClue3.image = clickImg;
  clickClue3.locate(-400, -500);
  clickClue3.resize(150, 150);
  clickClue3.text = "   ";
  clickClue3.color = "#00000000";
  clickClue3.strokeWeight = 3;
  clickClue3.onPress = function() {
    gameState = 'clue3'
    clueCount ++
  }

  //blood
  clickClue4 = new Clickable();
  //clickClue4.image = clickImg;
  clickClue4.locate(-400, -500);
  clickClue4.resize(40, 150);
  clickClue4.text = "   ";
  clickClue4.color = "#00000000";
  clickClue4.strokeWeight = 3;
  clickClue4.onPress = function() {
    gameState = 'clue4'
    clueCount ++
  }

  //phone
  clickClue5 = new Clickable();
  //clickClue5.image = clickImg;
  clickClue5.locate(-400, -500);
  clickClue5.resize(30, 40);
  clickClue5.text = "   ";
  clickClue5.color = "#00000000";
  clickClue5.strokeWeight = 3;
  clickClue5.onPress = function() {
    gameState = 'clue5'
    clue5Count = 1;
  }

  //paper
  clickClue6 = new Clickable();
  //clickClue6.image = clickImg;
  clickClue6.locate(-400, -500);
  clickClue6.resize(40, 40);
  clickClue6.text = "   ";
  clickClue6.color = "#00000000";
  clickClue6.strokeWeight = 3;
  clickClue6.onPress = function() {
    gameState = 'clue6'
    clueCount ++
  }

//Boy Button
  boyButton = new Clickable();
  boyButton.image = mySuspect1;
  boyButton.fitImage = true;
  boyButton.imageScale = 1.2;
  boyButton.locate(-400, -500);
  boyButton.resize(150, 200);
  boyButton.strokeWeight = 3;
  boyButton.text = "   ";
  boyButton.onPress = function() {
    gameState = 'foundBoy'
  }

//Father Button
fatherButton = new Clickable();
fatherButton.image = mySuspect2;
fatherButton.fitImage = true;
fatherButton.imageScale = 1.2;
fatherButton.locate(-400, -500);
fatherButton.resize(150, 200);
fatherButton.strokeWeight = 3;
fatherButton.text = "   ";
fatherButton.onPress = function() {
  gameState = 'foundFather'
}

//Man Button
manButton = new Clickable();
manButton.image = mySuspect2;
manButton.fitImage = true;
manButton.imageScale = 1.2;
manButton.locate(-400, -500);
manButton.resize(150, 200);
manButton.strokeWeight = 3;
manButton.text = "   ";
manButton.onPress = function() {
  gameState = 'foundMan'
}

//Guess the Suspect Button
  clickGuess = new Clickable();
  //clickGuess.image = clickImg;
  clickGuess.locate(-400, -500);
  clickGuess.resize(150, 50);
  clickGuess.text = "Let's Guess the Suspect!";
  popUpClick.textScaled = true;
  //clickGuess.color = "#00000000";
  clickGuess.strokeWeight = 3;
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
  suspectButton1.strokeWeight = 3;
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
  suspectButton2.strokeWeight = 3;
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
  suspectButton3.strokeWeight = 3;
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
