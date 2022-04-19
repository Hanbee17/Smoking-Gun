//var canvas;
var firstClick;
var popUpClick;
var clickClue1;
var clickClue2;
var clickClue3;
var clickClue4;
var clickGuess;
var suspectButton1;
var suspectButton2;
var suspectButton3;
var gobackbutton;
var gobacktomainButton;

var clickImg;
var frontImage;
var mainBackground;

let gameState = 'first';

function preload() {
  clickImg = loadImage('./logo.png');
  frontImage = loadImage('./assets/1.png');
  mainBackground = loadImage('./assets/2.png');
}

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  background(0);
  InitialButton();
  titleScreen();
}

function draw() {
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
    case 'PopUp':
      PopUpScreen();
      break;
    case 'main':
      mainScreen();
      break;
    case 'clue1':
      cluePopUp1();
      break;
    case 'clue2':
      cluePopUp2();
      break;
    case 'clue3':
      cluePopUp3();
      break;
    case 'clue4':
      cluePopUp4();
      break;
    case 'suspectScreen':
      guessScreen();
      break;
    case 'wrongsuspect':
      wrongSuspectPopup();
      break;
    case 'rightsuspect':
      endScreen();

  }
  suspectButton3.draw();
  suspectButton2.draw();
  suspectButton1.draw();
  clickGuess.draw();
  clickClue4.draw();
  clickClue3.draw();
  clickClue2.draw();
  clickClue1.draw();
  popUpClick.draw();
  firstClick.draw();
  gobackbutton.draw();
  gobacktomainButton.draw();
}

function startButton() {
  firstClick.locate(100, 600);
}

function popUpButton() {
  firstClick.locate(-400, -500);
  popUpClick.locate(325, 530);
}

function mainButton() {
  popUpClick.locate(-400, -500);
  clickClue1.locate(200, 200);
  clickClue2.locate(600, 200);
  clickClue3.locate(600, 600);
  clickClue4.locate(200, 650);

  clickGuess.locate(600, 50);

//   if (gameState == 'clue1') {
//   clickGuess.locate(600, 50);
// } else {
//   clickGuess.locate(-600, -500);
// }
}

function lastPageButton() {
  clickGuess.locate(-400, -500);
  clickClue4.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue3.locate(-400, -500);
  clickClue2.locate(-400, -500);
  clickClue1.locate(-400, -500);

  suspectButton3.locate(550, 400);
  suspectButton2.locate(350, 400);
  suspectButton1.locate(150, 400);
}

function wrongPopupButton() {
  clickGuess.locate(-400, -500);
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
  //firstClick.locate(200, 600);
  firstClick.resize(150, 50);
  firstClick.color = "#FFFFFF";
  firstClick.cornerRadius = 0;
  firstClick.text = "Start";
  firstClick.textScaled = true;
  firstClick.onRelease = function() {
    gameState = 'PopUp'
  }

  popUpClick = new Clickable();
  //popUpClick.image = clickImg;
  popUpClick.locate(-400, -550);
  popUpClick.resize(150, 50);
  popUpClick.color = "#FFFFFF";
  popUpClick.cornerRadius = 0;
  popUpClick.text = "Got It";
  popUpClick.textScaled = true;
  popUpClick.onRelease = function() {
    gameState = 'main'
  }

  clickClue1 = new Clickable();
  clickClue1.image = clickImg;
  clickClue1.locate(-400, -500);
  clickClue1.resize(150, 50);
  clickClue1.text = "  ";
  clickClue1.onRelease = function() {
    gameState = 'clue1'
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  clickClue2 = new Clickable();
  clickClue2.image = clickImg;
  clickClue2.locate(-400, -500);
  clickClue2.resize(150, 50);
  clickClue2.text = "   ";
  clickClue2.onPress = function() {
    gameState = 'clue2'
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  clickClue3 = new Clickable();
  clickClue3.image = clickImg;
  clickClue3.locate(-400, -500);
  clickClue3.resize(150, 50);
  clickClue3.text = "   ";
  clickClue3.onPress = function() {
    gameState = 'clue3'
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  clickClue4 = new Clickable();
  clickClue4.image = clickImg;
  clickClue4.locate(-400, -500);
  clickClue4.resize(150, 50);
  clickClue4.text = "   ";
  clickClue4.onPress = function() {
    gameState = 'clue4'
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
  }

  clickGuess = new Clickable();
  clickGuess.image = clickImg;
  clickGuess.locate(-400, -500);
  clickGuess.resize(150, 50);
  clickGuess.text = "   ";
  clickGuess.onPress = function() {
    gameState = 'suspectScreen'
    clickGuess.locate(-400, -500);
    //clickClue4.locate(-400, -500);
    // clickClue3.locate(-400, -500);
    // clickClue3.locate(-400, -500);
    // clickClue2.locate(-400, -500);
    // clickClue1.locate(-400, -500);
  }

  suspectButton1 = new Clickable();
  suspectButton1.image = clickImg;
  suspectButton1.locate(-400, -500);
  suspectButton1.resize(150, 50);
  suspectButton1.text = "   ";
  suspectButton1.onPress = function() {
    gameState = 'wrongsuspect'
    suspectButton1.locate(-500, -400);
  }

  suspectButton2 = new Clickable();
  suspectButton2.image = clickImg;
  suspectButton2.locate(-400, -500);
  suspectButton2.resize(150, 50);
  suspectButton2.text = "   ";
  suspectButton2.onPress = function() {
    gameState = 'wrongsuspect'
    suspectButton1.locate(-500, -400);
  }

  suspectButton3 = new Clickable();
  suspectButton3.image = clickImg;
  suspectButton3.locate(-400, -500);
  suspectButton3.resize(150, 50);
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

//This is the very first screen the user will see.
function titleScreen() {
  image(frontImage, 0,0, 800,800);
  textSize(75);
  textAlign(CENTER);
  //text('The Smoking Gun', width * 0.5, height * 0.33);
  //textSize(25);
  //text('Hi, This is the very first page, Welcome!', width * 0.5, height * 0.4);
  startButton();
}

//This is Trigger Warning Pop Up
function PopUpScreen() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(45);
  fill(214, 40, 40);
  text('TRIGGER WARNING', width * 0.5, height * 0.35);
  textSize(30);
  fill(255);
  text('The following game contains', width * 0.5, height * 0.45);
  text('material that may be harmful or', width * 0.5, height * 0.5);
  text('traumatizing to some audiences.', width * 0.5, height * 0.55);
  pop();
  popUpButton();
}

//This is the main page where a user can play the game.
function mainScreen() {
  background(200, 30, 30);
  textAlign(CENTER);
  textSize(25);
  text('Hey! This will be the main page!', width * 0.5, height * 0.4);
  mainButton();
}

function cluePopUp1() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 1. Congrats!!', width * 0.5, height * 0.35);
  pop();
  popUpButton();
}

function cluePopUp2() {
  push();
  rectMode(CENTER);
  fill(50, 60, 70);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 2. Congrats!!', width * 0.5, height * 0.35);
  pop();
  popUpButton();
}

function cluePopUp3() {
  push();
  rectMode(CENTER);
  fill(25, 40, 30);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 3. Congrats!!', width * 0.5, height * 0.35);
  image(clickImg, 300, 350, 150, 100)
  pop();
  popUpButton();
}

function cluePopUp4() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 4. Congrats!!', width * 0.5, height * 0.35);
  image(clickImg, 300, 350, 150, 100)
  pop();
  popUpButton();
}

function guessScreen() {
  background(245, 230, 30);
  textAlign(CENTER);
  textSize(25);
  text('Hey! This will be the guessing page!', width * 0.5, height * 0.3);
  lastPageButton();
}

function wrongSuspectPopup() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text('Hey, You guessed the wrong Suspect. Try Again!!', width * 0.5, height * 0.35);
  image(clickImg, 300, 350, 150, 100)
  pop();
  wrongPopupButton();
}

function endScreen() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text('Hey, You got it! Congrats!', width * 0.5, height * 0.35);
  image(clickImg, 300, 350, 150, 100)
  pop();
  gobacktoMainPageButton();
}
