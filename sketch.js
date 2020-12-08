/*function import() {
import sent from './Users/audreawah/Documents/GitHub/HappyToday/nonsense.js';
};
*/
let angle = 0;
let hoodie
let shirt
let shorts
let clothing;
let incoherent
let clothingIndex;
let fillColorIndex;
let textColorIndex;

let nonsenseDisplay;
let bg;
let img;
let jelly;

const clothingBackground = [
  [246, 241, 183],
  [247, 207, 207],
  [182, 236, 213],
  [243, 94, 175],
  [237, 0, 150],
  [138, 106, 217],
  [99, 203, 212],
  [151, 228, 234],
  [243, 138, 168],
  [244, 40, 187],
  [8, 30, 139],
  [69, 235, 211],
  [228, 236, 99],
  [239, 35, 84],
  [100, 203, 234],
  [242, 161, 176],
  [236, 200, 90],
  [199, 218, 248],
]

const textColor = [
  [246, 241, 183],
  [247, 207, 207],
  [182, 236, 213],
  [243, 94, 175],
  [237, 0, 150],
  [138, 106, 217],
  [99, 203, 212],
  [151, 228, 234],
  [243, 138, 168],
  [244, 40, 187],
  [8, 30, 139],
  [69, 235, 211],
  [228, 236, 99],
  [239, 35, 84],
  [100, 203, 234],
  [242, 161, 176],
  [236, 200, 90],
  [199, 218, 248],
    ]


function preload() {
shirt = loadModel('objects/tshirt xy flip.obj');
hoodie = loadModel('objects/hoodie merge xy flip.obj');
shorts = loadModel('objects/shorts i think its the last edit ill need to do xy flip.obj');
jelly = loadModel('objects/happy today text.obj')

clothing = [loadModel('objects/tshirt xy flip.obj'), loadModel('objects/hoodie merge xy flip.obj'), loadModel('objects/shorts i think its the last edit ill need to do xy flip.obj')];

//img = loadImage('objects/Happy Today BG.gif');
//img.style('z-index', '-1');
// c1 = []
};

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  clothingIndex = Math.floor(Math.random() * (3));
  fillColorIndex = Math.floor(Math.random() * (clothingBackground.length));
  textColorIndex = Math.floor(Math.random() * (textColor.length));
  //noCursor();
  // perspective(PI / 3.0, width / height, 0.1, 800);

  incoherent = createGraphics(200, 200);
  incoherent.background(textColor[textColorIndex][0], textColor[textColorIndex][1], textColor[textColorIndex][2]);
  incoherent.fill(clothingBackground[fillColorIndex][0], clothingBackground[fillColorIndex][1], clothingBackground[fillColorIndex][2]);
  incoherent.angleMode(DEGREES);
  //incoherent.rotate(180);
  incoherent.textAlign(CENTER);
  incoherent.textSize(20);

  nonsenseDisplay = createGraphics(250, 50);
  nonsenseDisplay.textSize(10);
  nonsenseDisplay.textAlign(CENTER);
  nonsenseDisplay.background(textColor[textColorIndex][0], textColor[textColorIndex][1], textColor[textColorIndex][2]);
  nonsenseDisplay.fill(clothingBackground[fillColorIndex][0], clothingBackground[fillColorIndex][1], clothingBackground[fillColorIndex][2]);
  nonsenseDisplay.text(nonsense(), 125, 25);

  // incoherent.text('happy asdfasdfadsfasdf', 50, 150);
  incoherent.text(nonsense(), 50, 150);

  bg = loadImage('objects/Happy Today BG.gif');



};
/*
function clothingBackground() {
  const background = [
    (246, 241, 183),
    (247, 207, 207),
    (182, 236, 213),
    (243, 94, 175),
    (237, 0, 150),
    (138, 106, 217),
    (99, 203, 212),
    (151, 228, 234),
    (243, 138, 168),
    (244, 40, 187),
    (8, 30, 139),
    (69, 235, 211),
    (228, 236, 99),
    (239, 35, 84),
    (100, 203, 234),
    (242, 161, 176),
    (236, 200, 90),
    (199, 218, 248),
  ]


  const ranBackground = Math.floor(Math.random() * background.length);
  let clothingBackground = ranBackground;
  return clothingBackground;
};

  function clothingTextColor(){

  const textColor = [
    (246, 241, 183),
    (247, 207, 207),
    (182, 236, 213),
    (243, 94, 175),
    (237, 0, 150),
    (138, 106, 217),
    (99, 203, 212),
    (151, 228, 234),
    (243, 138, 168),
    (244, 40, 187),
    (8, 30, 139),
    (69, 235, 211),
    (228, 236, 99),
    (239, 35, 84),
    (100, 203, 234),
    (242, 161, 176),
    (236, 200, 90),
    (199, 218, 248),
      ]

  const ranTextColor = Math.floor(Math.random() * textColor.length;
  let clothingTextColor = ranTextColor;
  return clothingTextColor;
};
*/

function draw() {


  orbitControl(5, 2, 2);



  // sides lights
  //pointLight(255, 255, 255, -300, 50, 100);
  //pointLight(255, 255, 255, 300, 50, 100);

  //front light
  //pointLight(255, 255, 255, 0, 0, 500);

  pointLight(255, 255, 255, 0, 100, 500);

  //back light

  pointLight(255, 255, 255, 0, -100, -500);

  //top light

  pointLight(255, 255, 255, 0, -600, 500);

  //background(bg);
  //rectMode(CENTER);
  noStroke();
  //fill(0, 0, 255);
  //normalMaterial();
  scale(2);
  model(jelly);
  image(bg, -200, -200);
  image(nonsenseDisplay, -125, -200);
  scale(.005 * windowWidth);

  rotateY(angle * 1.2);
  //image(nonsenseDisplay, -100, -210);
  //rotateZ(angle * 0.1);

  texture(incoherent);
  //plane(50,50);
  model(clothing[clothingIndex]);






  // model(hoodie);


  //model(shorts);


  angle += 0.01;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


/*

/Users/audreawah/
cd Documents/GitHub/HappyToday
python -m SimpleHTTPServer 8000

*/
