var canvas;
var click1;
var click2;
var clickClue1;
var click4;
var click5;
// var click6;
var clickImg;

let gameState = 'first';

function preload(){
  clickImg = loadImage('./logo.png');
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
  }
  // click6.draw();
  click5.draw();
  click4.draw();
  clickClue1.draw();
  click2.draw();
  click1.draw();
}

function startButton() {
}

function popUpButton() {
    click1.locate(-400,-500);
    click2.locate(325, 530);
}

function mainButton() {
    click2.locate(-400,-500);
    clickClue1.locate(200,200);
    click4.locate(600,200);
    click5.locate(600,600);
}

function InitialButton() {
    click1 = new Clickable();
    //click1.image = clickImg;
    click1.locate(300, 500);
    click1.resize(200, 100);
    click1.color = "#FFFFFF";
    click1.cornerRadius = 0;
    click1.text = "Start";
    click1.textScaled = true;
      click1.onRelease = function () {
        gameState = 'PopUp'
      }

    click2 = new Clickable();
    //click2.image = clickImg;
    click2.locate(-400, -550);
    click2.resize(150,50);
    click2.color = "#FFFFFF";
    click2.cornerRadius = 0;
    click2.text = "Got It";
    click2.textScaled = true;
      click2.onRelease = function () {
        gameState = 'main'
      }

    clickClue1 = new Clickable();
    clickClue1.image = clickImg;
    clickClue1.locate(-400, -500);
    clickClue1.resize(150,50);
    clickClue1.text = "  ";
      clickClue1.onRelease = function () {
        gameState = 'clue1'
        click5.locate(-400,-500);
        click4.locate(-400,-500);
        clickClue1.locate(-400,-500);
      }

    click4 = new Clickable();
    click4.image = clickImg;
    click4.locate(-400, -500);
    click4.resize(150,50);
    click4.text = "   ";
      click4.onPress = function () {
        gameState = 'clue2'
        click5.locate(-400,-500);
        click4.locate(-400,-500);
        clickClue1.locate(-400,-500);
      }

      click5 = new Clickable();
      click5.image = clickImg;
      click5.locate(-400, -500);
      click5.resize(150,50);
      click5.text = "   ";
        click5.onPress = function () {
          gameState = 'clue3'
          click5.locate(-400,-500);
          click4.locate(-400,-500);
          clickClue1.locate(-400,-500);
        }
}

//This is the very first screen the user will see.
function titleScreen () {
  background(100, 100, 240);
  textSize(75);
  textAlign(CENTER);
  text('The Title', width*0.5, height*0.33);
  textSize(25);
  text('Hi, This is the very first page, Welcome!', width*0.5, height*0.4);
  startButton();
}

//This is Trigger Warning Pop Up
function PopUpScreen() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400,400, 500,500);
  textAlign(CENTER);
  textSize(45);
  fill(214,40,40);
  text('TRIGGER WARNING', width*0.5, height*0.35);
  textSize(30);
  fill(255);
  text('The following game contains',width*0.5, height*0.45);
  text('material that may be harmful or',width*0.5, height*0.5);
  text('traumatizing to some audiences.',width*0.5, height*0.55);
  pop();
  popUpButton();
}

//This is the main page where a user can play the game.
function mainScreen() {
  background(200,30,30);
  textAlign(CENTER);
  textSize(25);
  text('Hey! This will be the main page!', width*0.5, height*0.4);
  mainButton();
}

function cluePopUp1() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(400,400, 500,500,20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 1. Congrats!!', width*0.5, height*0.35);
  pop();
  popUpButton();
}

function cluePopUp2() {
  push();
  rectMode(CENTER);
  fill(50,60,70);
  rect(400,400, 500,500,20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 2. Congrats!!', width*0.5, height*0.35);
  pop();
  popUpButton();
}

function cluePopUp3() {
  push();
  rectMode(CENTER);
  fill(25,40,30);
  rect(400, 400, 500, 500, 20);
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text('Hey, You found the Clue 3. Congrats!!', width*0.5, height*0.35);
  image(clickImg,300,350,150,100)
  pop();
  popUpButton();
}
