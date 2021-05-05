//I used this code to help start me off: 
//Simple Text Adventure Example by hosken
//https://editor.p5js.org/hosken/sketches/m1j3x42xF

let start, botleft, botright, left, right, foundswitch, topleft, topright, topmid, obj, topmid2, topleft2, topright2, left2, right2, botleft2, botright2, goodend, badend;

let startimg, botleftimg, botrightimg, leftimg, rightimg, foundswitchimg, topleftimg, toprightimg, topmidimg, objimg, topmid2img, topleft2img, topright2img, left2img, right2img, botleft2img, botright2img, goodendimg, badendimg;

let current;

function preload(){
  startimg = loadImage('FinalProject_Start.png');
  botleftimg = loadImage('FinalProject_LowerLeft.png');
  botrightimg = loadImage('FinalProject_LowerRight.png');
  leftimg = loadImage('ProjectFinal_Left.png');
  rightimg = loadImage('ProjectFinal_Right.png');
  foundswitchimg = loadImage('FinalProject_FoundSwitch.png');
  topleftimg = loadImage('FinalProject_TopLeft.png');
  toprightimg = loadImage('FinalProject_TopRight.png');
  topmidimg = loadImage('FinalProject_TopMid.png');
  objimg = loadImage('FinalProject_Obj.png');
  topmid2img = loadImage('FinalProject_TopMid2.png');
  topleft2img = loadImage('FinalProject_TopLeft2.png');
  topright2img = loadImage('FinalProject_TopRight2.png');
  left2img = loadImage('ProjectFinal_Left2.png');
  right2img = loadImage('ProjectFinal_Right2.png');
  botleft2img = loadImage('FinalProject_BotLeft2.png');
  botright2img = loadImage('FinalProject_BotRight2.png');
  goodendimg = loadImage('FinalProject_GoodEnd.png');
  badendimg = loadImage('FinalProject_BadEnd.png');
}

function setup() {
  createCanvas(400, 400);
  createStory();
  
  current = start;
  console.log(current);
}

function draw() {
  background(220);
  
  image(current.picture,0,0,width,height);
  
  fill(0,0,0);
  
  text(current.text, 50, 50, 300);

  text(current.option1, 50, 200, 125);

  text(current.option2, 200, 200, 125);
}

function keyPressed(){
  if (key == 'a') {
    if (current.target1 != null) {
      current = current.target1;
    }
  }
  if (key == 'b') {
    if (current.target1 != null) {
      current = current.target2;
    }
  }
}

class StorySection{
  constructor(_picture,_text,_option1,_target1,_option2,_target2){
    this.picture = _picture;
    this.text = _text;
    this.option1 = _option1;
    this.option2 = _option2;
    this.target1 = _target1;
    this.target2 = _target2;
    
  }
}

function createStory(){
  badend = new StorySection(
    badendimg,
    "The alarm got tripped, and you were captured. Do you...?",
    "(a) Want to restart?",
    start,
    "(b) Want to quit?",
    clear
  )
  
  goodend = new StorySection(
    goodendimg,
    "You have escaped!",
    "(a) Want another go?",
    start,
    "(b) Want to quit?",
    null
  )
 
  botright2 = new StorySection(
    botright2img,
    "Really only one way to go.",
    "(a) Onward.",
    goodend,
    "",
    null
  )
  
  botleft2 = new StorySection(
    botleft2img,
    "Really only one way to go.",
    "(a) Onward.",
    goodend,
    "",
    null
  )
  
  right2 = new StorySection(
    right2img,
    "You made it past the lasergate and are in the storage area. Really only one way to go.",
    "(a) Go forward.",
    botright2,
    "",
    null   
  )
  
  left2 = new StorySection(
    left2img,
    "You're in the breakroom, and the guards are attentive. How they haven't caught you already is impressive. Do you...?",
    "(a) Stick to the shadows?",
    botleft2,
    "(b) Just book it?",
    botleft2 
  )
  
  topright2 = new StorySection(
    topright2img,
    "You entered the room, and the lasergate is flashing on and off. Do you...?",
    "(a) Time it and run through?",
    right2,
    "(b) Go the other direction?",
    topleft2
  )
  
  topleft2 = new StorySection(
    topleft2img,
    "You entered the room, and you can hear the guards getting up from their break. Do you...?",
    "(a) Enter the room?",
    left2,
    "(b) Go the other direction?",
    topright2
  )
  
  topmid2 = new StorySection(
    topmid2img,
    "You have the data, but after leaving the room, the alarm is tripped. Do you...?",
    "(a) Turn left?",
    topleft2,
    "(b) Turn right?",
    topright2
  )
  
  obj = new StorySection(
    objimg,
    "You enter into the central chamber and copy the data onto a flashdrive.",
    "(a) Walk back into the previous hallway.",
    topmid2,
    "",
    null
  )
  
  topmid = new StorySection(
    topmidimg,
    "You found the entrance to the central chamber.",
    "(a) Enter.",
    obj,
    "",
    null
  )
  
  topright = new StorySection(
    toprightimg,
    "You made it past the gate. There's really only one way forward now.",
    "(a) Turn left.",
    topmid,
    "",
    null 
  )
  
  topleft = new StorySection(
    topleftimg,
    "You made it past the guards. There's really only one way forward now.",
    "(a) Turn right.",
    topmid,
    "",
    null
  )
  
  foundswitch = new StorySection(
    foundswitchimg,
    "After some searching, you found a switch hidden underneath a panel. You flip it, and the lasergate goes down.",
    "(a) You go forward, past the gate.",
    topright,
    "",
    null
  )
  
  right = new StorySection(
    rightimg,
    "You seem to be in an storage area, with a lasergate on the opposite door. Do you...?",
    "(a) Look around for the switch?",
    foundswitch,
    "(b) Try and limbo through the lasergate.",
    badend
  )
  
  left = new StorySection(
    leftimg,
    "You are in a breakroom, along with three guards. You managed to sneak in, but one of the guards walked to look out into the hallway you just came from. Do you...?",
    "(a) Try and take them out quietly?",
    badend,
    "(b) Stick to the shadows and sneak past?",
    topleft
  )
  
  botright = new StorySection(
    botrightimg,
    "You here a strange buzzing from the room in front of you. Do you...?",
    "(a) Proceed forward.",
    right,
    "(b) Go backwards.",
    start
  )
  
  botleft = new StorySection(
    botleftimg,
    "You hear some faint talking from the room in front of you. Do you...?",
    "(a) Proceed forward.",
    left,
    "(b) Go backwards.",
    start
  )
  
  start = new StorySection(
    startimg,
    "You need to secure the data from inside the central chamber, without setting off the alarms. Do you...?",
    "(a) Go left.",
    botleft,
    "(b) Go right.",
    botright
  )
  
  botright.target2 = start;
  botleft.target2 = start;
  goodend.target1 = start;
  badend.target1 = start;
  topleft2.target2 = topright2;
  topright2.target2 = topleft2;
}