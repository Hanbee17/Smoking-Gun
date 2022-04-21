//var canvas;
var firstClick;
var popUpClick;
var clickClue1;
var clickClue2;
var clickClue3;
var clickClue4;
var clickClue5;
var clickClue6;

var clickGuess;
var suspectButton1;
var suspectButton2;
var suspectButton3;
var gobackbutton;
var gobacktomainButton;

var clickImg;
var frontImage;
var mainBackground;

let myBgMusic1;
// let myBgMusic2;
// let myBgMusic3;

let gameState = 'first';

let clueCount = 0;

function preload() {
  clickImg = loadImage('./logo.png');
  frontImage = loadImage('./assets/1.png');
  mainBackground = loadImage('./assets/2.png');
  myClue1 = loadImage('./assets/clue1.png');
  myClue2 = loadImage('./assets/clue2.png');
  myClue3 = loadImage('./assets/clue3.png');
  myClue4 = loadImage('./assets/clue4.png');
  myClue5 = loadImage('./assets/clue5.png');
  myClue6 = loadImage('./assets/clue6.png');
  mySuspect1 = loadImage('./assets/suspect1.png');
  mySuspect2 = loadImage('./assets/suspect2.png');
  mySuspect3 = loadImage('./assets/suspect3.png');

  //Art of Slience by Uniq
  myBgMusic1 = loadSound('./assets/bg1.mp3');
  // myBgMusic2 = loadSound('./assets/bg2.png');
  // myBgMusic3 = loadSound('./assets/bg3.png');

  // for (i = 0; i <= 5; i++) {
  //   myClue[i] = loadImage('./assets/clue+[i]+.png');
  // }
}

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  background(0);
  InitialButton();
  titleScreen();
}

function keyPressed() {
  if (keyCode == 32) {
   Music();
  } else if (keyCode === 13) {
    PauseMusic();
  }
}

function Music() {
  // if (myBgMusic1.isPlaying() == false) {
  // RanBgm = int(random(myBgMusic1.length));
  // myBgMusic1 = myBgMusic1[RanBgm];
  myBgMusic1.play();
}

function PauseMusic() {
  myBgMusic1.pause();
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
    case 'clue5':
      cluePopUp5();
      break;
    case 'clue6':
      cluePopUp6();
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
  clickClue6.draw();
  clickClue5.draw();
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
  popUpClick.locate(-325, -530);
}

function popUpButton() {
  firstClick.locate(-400, -500);
  popUpClick.locate(325, 530);
}

function mainButton() {
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

if (clueCount > 4) {
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
  firstClick.color = "#00000000";
  firstClick.cornerRadius = 0;
  firstClick.strokeWeight = 0;
  firstClick.text = "Case 1";
  firstClick.textColor = "#FFFFFF";
  firstClick.textSize = 25;
  //firstClick.textFont = "sans-serif";
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
  clickClue1.strokeWeight = 0;
  clickClue1.onRelease = function() {
    gameState = 'clue1'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  //calander
  clickClue2 = new Clickable();
  //clickClue2.image = clickImg;
  clickClue2.locate(-400, -500);
  clickClue2.resize(100, 120);
  clickClue2.text = "   ";
  clickClue2.color = "#00000000";
  clickClue2.strokeWeight = 0;
  clickClue2.onPress = function() {
    gameState = 'clue2'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  //body
  clickClue3 = new Clickable();
  //clickClue3.image = clickImg;
  clickClue3.locate(-400, -500);
  clickClue3.resize(150, 150);
  clickClue3.text = "   ";
  clickClue3.color = "#00000000";
  clickClue3.strokeWeight = 0;
  clickClue3.onPress = function() {
    gameState = 'clue3'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  //blood
  clickClue4 = new Clickable();
  //clickClue4.image = clickImg;
  clickClue4.locate(-400, -500);
  clickClue4.resize(40, 150);
  clickClue4.text = "   ";
  clickClue4.color = "#00000000";
  clickClue4.strokeWeight = 0;
  clickClue4.onPress = function() {
    gameState = 'clue4'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  //phone
  clickClue5 = new Clickable();
  //clickClue5.image = clickImg;
  clickClue5.locate(-400, -500);
  clickClue5.resize(30, 40);
  clickClue5.text = "   ";
  clickClue5.color = "#00000000";
  clickClue5.strokeWeight = 0;
  clickClue5.onPress = function() {
    gameState = 'clue5'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  //paper
  clickClue6 = new Clickable();
  //clickClue6.image = clickImg;
  clickClue6.locate(-400, -500);
  clickClue6.resize(40, 40);
  clickClue6.text = "   ";
  clickClue6.color = "#00000000";
  clickClue6.strokeWeight = 0;
  clickClue6.onPress = function() {
    gameState = 'clue6'
    clickClue6.locate(-400, -500);
    clickClue5.locate(-400, -500);
    clickClue4.locate(-400, -500);
    clickClue3.locate(-400, -500);
    clickClue2.locate(-400, -500);
    clickClue1.locate(-400, -500);
    clueCount ++
  }

  clickGuess = new Clickable();
  //clickGuess.image = clickImg;
  clickGuess.locate(-400, -500);
  clickGuess.resize(150, 50);
  clickGuess.text = "Let's Guess the Suspect!";
  popUpClick.textScaled = true;
  //clickGuess.color = "#00000000";
  clickGuess.strokeWeight = 0;
  clickGuess.onPress = function() {
    gameState = 'suspectScreen'
    clickGuess.locate(-400, -500);
    //clickClue4.locate(-400, -500);
    // clickClue3.locate(-400, -500);
    // clickClue3.locate(-400, -500);
    // clickClue2.locate(-400, -500);
    // clickClue1.locate(-400, -500);
  }

  //Boy
  suspectButton1 = new Clickable();
  suspectButton1.image = mySuspect1;
  suspectButton1.fitImage = true;
  suspectButton1.imageScale = 1.2;
  suspectButton1.locate(-400, -500);
  suspectButton1.resize(150, 200);
  suspectButton1.strokeWeight = 0;
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
  suspectButton2.strokeWeight = 0;
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
  suspectButton3.strokeWeight = 0;
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
  background(0);
  image(mainBackground, 0,175, 800, 450);
  // textAlign(CENTER);
  // textSize(25);
  //text('Hey! This will be the main page!', width * 0.5, height * 0.4);
  mainButton();
}

//Duvet Clue
function cluePopUp1() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 1. Congrats!!', width * 0.5, height * 0.35);
  image(myClue1, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Calander Clue
function cluePopUp2() {
  push();
  rectMode(CENTER);
  fill(50, 60, 70);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 2. Congrats!!', width * 0.5, height * 0.35);
  image(myClue2, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Body Clue
function cluePopUp3() {
  push();
  rectMode(CENTER);
  fill(25, 40, 30);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 3. Congrats!!', width * 0.5, height * 0.35);
  image(myClue3, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Blood Clue
function cluePopUp4() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 4. Congrats!!', width * 0.5, height * 0.35);
  image(myClue4, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Phone Clue
function cluePopUp5() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 5. Congrats!!', width * 0.5, height * 0.35);
  image(myClue5, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Paper Clue
function cluePopUp6() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 6. Congrats!!', width * 0.5, height * 0.35);
  image(myClue6, 300, 350, 150, 100);
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
  image(clickImg, 300, 350, 150, 100);
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
  image(clickImg, 300, 350, 150, 100);
  pop();
  gobacktoMainPageButton();
}
