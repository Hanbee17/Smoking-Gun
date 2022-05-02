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
  mySoundOn = loadImage('./assets/sound1.png');
  mySoundOff = loadImage('./assets/sound2.png');

  myBgMusic = loadSound('./assets/bg1.mp3');
}

function setup() {
  createCanvas(800, 800);
  background(0);
  InitialButton();
  titleScreen();
}

//Music_work
function keyPressed() {
  if (keyCode == 32) {
    Music();
    soundOn.locate(20, 20);
    soundOff.locate(-20, -20);
  } else if (keyCode === 13) {
    PauseMusic();
    soundOn.locate(-20, -20);
    soundOff.locate(20, 20);
  }
}

function Music() {
  if (myBgMusic.isPlaying() == false) {
    myBgMusic.play();
    //myBgMusic.loop();
  }
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
  soundOn.draw();
  soundOff.draw();

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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(20);
  textFont('Verdana');
  fill(206, 212, 218);
  text('The first case is', 400, 210);
  fill(255);
  text('“Dead body cohabitation case”', 400, 240);
  fill(206, 212, 218);
  text('One day in September 2009,', 400, 270);
  text('when the father returned home from', 400, 300);
  text('5 days of a business trip,', 400, 330);
  text('what he found was a very strange stench and', 400, 360);
  text('the appearance of his son eating his meal.', 400, 390);
  text('According to the father, the intial reporter', 400, 420);
  text('what he found was a very strange stench and', 400, 450);
  text('the son was eating next to a decomposed body.', 400, 480);
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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #1', 400, 330);
  text('There is blood on a duvet...', 400, 360);
  text('Why is it folded?', 400, 390);
  text('Was the suspect 1 tring to hide the evidence?', 400, 420);
  text('Test results showed that', 400, 450);
  text('the blood belonged to the victim.', 400, 480);
  imageMode(CENTER);
  image(myClue1, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Calander Clue
//make connection to clue 6(paper) and make the guess button pop up
function cluePopUp2() {
  push();
  rectMode(CENTER);
  fill(33, 37, 41);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #3', 400, 290);
  text('According to the autopsy report,', 400, 320);
  text('it is estimated that the body has been out 3-4 days,', 400, 350);
  text('as bloating has been progressed.', 400, 380);
  text('The victim was stabbed to death', 400, 410);
  text('in the left chest, abdomen and left arm,', 400, 440);
  text('and the weapon is presumed to be a fruit knife.', 400, 470);
  text('The knife was never found.', 400, 500);
  text('Since the body was not wearing shoes, it is likely', 400, 530);
  text('that he entered the house on his free will.', 400, 560);
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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #4', 400, 310);
  text('There are no signs of fighting or violence.', 400, 340);
  text('Judging from the appearance of the blood', 400, 370);
  text('scattering rubbed against the wall,', 400, 400);
  text('it is highly possible that', 400, 430);
  text('the victim was attacked from the right', 400, 460);
  text('while sitting with his back against the wall.', 400, 490);
  text('', 400, 520);
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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #5', 400, 310);
  text('The cell phone was in the hand of the victim,', 400, 340);
  text('but as there were no other fingerprints,', 400, 370);
  text('it is presumed that the victim and', 400, 400);
  text('cell phone were not moved after death.', 400, 430);
  text('It can also be seen that the victim was using', 400, 460);
  text('the phone right before the attack.', 400, 490);
  text('', 400, 520);
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
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(206, 212, 218);
  text('Clue #6', 400, 310);
  text('It seems to be a torn part of the calendar. ', 400, 340);
  text('On the paper,', 400, 370);
  text('"a promissory note" is hand-written,', 400, 400);
  text('and signature from the son is ', 400, 430);
  text('also written on it.', 400, 460);
  text('', 400, 490);
  text('', 400, 520);
  text('', 400, 550);
  imageMode(CENTER);
  image(myClue6, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//Boy Description
function boyPopup() {
  push();
  rectMode(CENTER);
  fill(73, 80, 87);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(233, 236, 239);
  text('Suspect #1', 400, 300);
  text('The son is 15 yesrs old.', 400, 330);
  text('He is mostly iving alone, waiting for his father.', 400, 360);
  text('He was living with the body for 5 days.', 400, 390);
  text('He is a prime suspect,', 400, 420);
  text('but he has an intellectual disability.', 400, 450);
  text('He does not seem to know exactly what happened.', 400, 480);
  text('Also, few bruises were found on his body.', 400, 510);
  text('', 400, 540);
  imageMode(CENTER);
  image(mySuspect1, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//father Description
function fatherPopup() {
  push();
  rectMode(CENTER);
  fill(73, 80, 87);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(233, 236, 239);
  text('Suspect #2', 400, 300);
  text('The father is a freight forwarder, so he was out of ', 400, 330);
  text('town and away from home for a few days.', 400, 360);
  text('He is the intial reporter, but a strong suspect,', 400, 390);
  text('as the victim died on the same day', 400, 420);
  text('the father left home for work.', 400, 450);
  text('But why he let his son live with the corpse?', 400, 480);
  text('And why would he report it?', 400, 510);
  imageMode(CENTER);
  image(mySuspect2, 400, 230, 140, 140);
  pop();
  popUpButton();
}

//man Description
function manPopup() {
  push();
  rectMode(CENTER);
  fill(73, 80, 87);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(17);
  textFont('Verdana');
  fill(233, 236, 239);
  text('Suspect #3', 400, 300);
  text('The man was unemployed, homeless and an alcoholic.', 400, 330);
  text('He was seen walking together with the victim', 400, 360);
  text('in the neighborhood on the day of the incident.', 400, 390);
  text('He denied that and the next day', 400, 420);
  text('he left a suicide note and disappeared.', 400, 450);
  text('However, the handwriting of the suicide note was', 400, 480);
  text('the same as the handwriting on the calendar piece.', 400, 510);
  text('It is also presumed that the father and', 400, 540);
  text('the man knew each other and had a debt relationship.', 400, 570);
  text('', 400, 590);
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
  text('Click the most suspicious murderer.', 400, 200);
  lastPageButton();
}

//Wrong Suspect Popup
function wrongSuspectPopup() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textSize(23);
  textFont('Verdana');
  fill(233, 236, 239);
  text('This suspect is not a murderer.', 400, 310);
  text('You should go back and investigate more.', 400, 350);
  pop();
  wrongPopupButton();
}

//Right Suspect Popup
function endScreen() {
  push();
  rectMode(CENTER);
  fill(173, 181, 189);
  rect(400, 400, 550, 550);
  textAlign(CENTER);
  textFont('Verdana');
  textSize(23);
  fill(255);
  text('This suspect is a murderer.', 400, 200);
  textSize(16);
  fill(233, 236, 239);
  text('This is based on the true story.', 400, 250);
  text("The murderer went to the father's house with the victim", 400, 280);
  text('to get the money back from the father.', 400, 310);
  text('However, the son was the only one there, so he quesitoned', 400, 340);
  text('the son about the father, but the son could not answer.', 400, 370);
  text('The murderer assulted the son and made the "promissory note"', 400, 400);
  text('and forced the son signed for it. The victim grumbled', 400, 430);
  text('that they wasted their time and it triggered he', 400, 460);
  text('to stab the victim with the knife that he was going to use', 400, 490);
  text('to threat the father and he ran away and threw the knife away.', 400, 520);
  pop();
  gobacktoMainPageButton();
}
