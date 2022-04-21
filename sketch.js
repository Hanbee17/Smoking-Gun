let textDes = 'On Septmeber, 2009....'

var frontImage;
var mainBackground;

let myBgMusic;

let gameState = 'first';

let clueCount = 0;
let clue5Count = 0;

//Load Assets
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
  myBgMusic = loadSound('./assets/bg1.mp3');
}

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  background(0);
  InitialButton();
  titleScreen();
}

//Music_work last
function keyPressed() {
  if (keyCode == 32) {
    Music();
  } else if (keyCode === 13) {
    PauseMusic();
  }
}

function Music() {
  // if (myBgMusic.isPlaying() == false) {
  // RanBgm = int(random(myBgMusic.length));
  // myBgMusic = myBgMusic[RanBgm];
  myBgMusic.play();
}

function PauseMusic() {
  myBgMusic.pause();
}

function draw() {
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
    case 'PopUp':
      DescriptionPopUpScreen();
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
    case 'foundBoy':
      boyPopup();
      break;
    case 'foundFather':
      fatherPopup();
      break;
    case 'foundMan':
      ManPopup();
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

  boyButton.draw();
  fatherButton.draw();
  manButton.draw();

  clickClue6.draw();
  clickClue5.draw();
  clickClue4.draw();
  clickClue3.draw();
  clickClue2.draw();
  clickClue1.draw();

  popUpClick.draw();
  firstClick.draw();
  secondClick.draw();

  gobackbutton.draw();
  gobacktomainButton.draw();
}

//This is the very first screen the user will see.
function titleScreen() {
  image(frontImage, 0, 0, 800, 800);
  textSize(75);
  textAlign(CENTER);
  startButton();
}

//This is Description Pop Up
function DescriptionPopUpScreen() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(45);
  fill(214, 40, 40);
  //text('TRIGGER WARNING', width * 0.5, height * 0.35);
  textSize(25);
  fill(255);
  text(textDes, 400, 300, 300, 200);
  // text('material that may be harmful or', width * 0.5, height * 0.5);
  // text('traumatizing to some audiences.', width * 0.5, height * 0.55);
  pop();
  secondButton();
}

//This is the main page where a user can play the game.
function mainScreen() {
  background(0);
  image(mainBackground, 0, 175, 800, 450);
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

//Boy Description
function boyPopup() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the suspect 1. Congrats!!', width * 0.5, height * 0.35);
  image(mySuspect1, 300, 350, 150, 100);
  pop();
  popUpButton();
}

function fatherPopup() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the suspect 2. Congrats!!', width * 0.5, height * 0.35);
  image(mySuspect2, 300, 350, 150, 100);
  pop();
  popUpButton();
}

function manPopup() {
  push();
  rectMode(CENTER);
  fill(80, 210, 90);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the suspect 3. Congrats!!', width * 0.5, height * 0.35);
  image(mySuspect3, 300, 350, 150, 100);
  pop();
  popUpButton();
}

//Guess Suspect Screen
function guessScreen() {
  background(245, 230, 30);
  textAlign(CENTER);
  textSize(25);
  text('Hey! This will be the guessing page!', width * 0.5, height * 0.3);
  lastPageButton();
}

//Wrong Suspect Popup
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

//Right Suspect Popup
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
