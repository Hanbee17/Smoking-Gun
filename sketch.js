var frontImage;
var mainBackground;

let myBgMusic;

let gameState = 'first';

let clue1Count = 0;
let clue2Count = 0;
let clue3Count = 0;
//let clue4Count = 0;
let clue5Count = 0;
let clue6Count = 0;

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
  if (myBgMusic.isPlaying() == false) {
    //RanBgm = int(random(myBgMusic.length));
    //myBgMusic = myBgMusic[RanBgm];
    myBgMusic.play();
  }
  myBgMusic.loop();
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
      manPopup();
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
  startButton();
}

//This is Description Pop Up
function DescriptionPopUpScreen() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('The first case is', 400, 300, 300, 200);
  text('“corporal cohabitation case”.', 400, 325, 300, 200);
  text('One day in September 2009,', 400, 350, 300, 200);
  text('when the father returned home from 5 days of a business trip,', 400, 375, 300, 200);
  text('what he found was a very strange stench and the appearance of his son eating his meal. According to the father, the intial reporter, the son was eating next to a decomposed body.', 400, 449, 300, 200);
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
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #1', 400, 330);
  text('There is blood on a duvet...', 400, 360);
  text('Why is it folded?', 400, 390);
  text('Was the suspect 1 tring to hide the evidence?', 400, 420);
  text('Test results showed that', 400, 450);
  text('the blood belonged to the victim.', 400, 480);
  imageMode(CENTER);
  image(myClue1, 400, 230, 192, 192);
  pop();
  popUpButton();
}

//Calander Clue
//make connection to clue 6(paper) and make the guess button pop up
function cluePopUp2() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #2', 400, 330);
  text('This calander is torn apart...', 400, 360);
  text('Where would be the broken peice of paper?', 400, 390);
  text('', 400, 420);
  imageMode(CENTER);
  image(myClue2, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Body Clue
function cluePopUp3() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #3', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(myClue3, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Blood Clue
function cluePopUp4() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #4', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(myClue4, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Phone Clue
function cluePopUp5() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #5', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(myClue5, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Paper Clue
function cluePopUp6() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #6', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(myClue6, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Boy Description
function boyPopup() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(52, 58, 64);
  text('Suspect #1', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(mySuspect1, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//father Description
function fatherPopup() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(52, 58, 64);
  text('Suspect #2', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(mySuspect2, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//man Description
function manPopup() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(52, 58, 64);
  text('Suspect #3', 400, 310);
  text('This body is really decomposed..', 400, 340);
  text('According to the autopsy report,', 400, 370);
  text('it is estimated that the body is 3-4 days old,', 400, 400);
  text('and bloating has been progressed.', 400, 430);
  text('The victim was stabbed to death', 400, 460);
  text('in the left chest, abdomen and left arm,', 400, 490);
  text('and the weapon is presumed to be excessive.', 400, 520);
  imageMode(CENTER);
  image(mySuspect3, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Guess Suspect Screen
function guessScreen() {
  background(33, 37, 41);
  textAlign(CENTER);
  textSize(25);
  textFont('Verdana');
  fill(255);
  text('Click the most suspicious murderer.', 400, 100);
  lastPageButton();
}

//Wrong Suspect Popup
function wrongSuspectPopup() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(52, 58, 64);
  text('This suspect is not a murderer.', 400, 310);
  pop();
  wrongPopupButton();
}

//Right Suspect Popup
function endScreen() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 500, 500);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(52, 58, 64);
  text('Congratulation!', 400, 280);
  text('This suspect is a murderer.', 400, 310);
  pop();
  gobacktoMainPageButton();
}
