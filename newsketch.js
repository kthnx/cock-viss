var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12;

var page;

var data1, data2, data3;

var marg, mule, liit, shot, water;

//var box1, box2, box3;

var male, female;
var maleW, femaleW;

var margArrayta = [];
var muleArray = [];
var liitArray = [];
var shotArray = [];
var waterArray = [];

var boxN = 0;
var boxA = 0;

// var margA = 1.5;
// var margN = 0.5;
//
// var muleA = 2;
// var muleN = 10;
//
// var liitA = 2;
// var liitN = 0;
//
// var shotA = 1.5;
// var shotN = 0;
//
var waterA = 0;
var waterN = 8;

//var margArraytaFull, mule



//spawn drink array and menu
//menu contains 4 drinks, shot, marg, mule, and water.

// shot; 1.5oz alc (1.5oz total)
//double shot; 3oz alc (3oz total)
//marg; 1.5oz alc, .5 alc, 1oz non (4oz total)
//mule; 1.5 alc, 8oz non (9.5oz total)
//water; 8oz non (8oz total)

//when select drink, call the drink from menu[drink] and
//create a entry in punch bowl
//draw rect with values from punch bowl


function preload() {



  p1 = loadImage('assets/1.png');
  p2 = loadImage('assets/2.png');
  p3 = loadImage('assets/3.png');
  p4 = loadImage('assets/4.png');
  p5 = loadImage('assets/5.png');
  p6 = loadImage('assets/6.png');
  p7 = loadImage('assets/7.png');
  p8 = loadImage('assets/8.png');
  p9 = loadImage('assets/9.png');
  p10 = loadImage('assets/10.png');
  p11 = loadImage('assets/11.png');
  p12 = loadImage('assets/12.png');

  marg = loadImage('assets/marg.png');
  mule = loadImage('assets/mule.png');
  liit = loadImage('assets/liit.png');
  shot = loadImage('assets/shot.png');
  water = loadImage('assets/water.png');
data = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');

data2 = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009');

data3 = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17204');
}
function setup() {
  createCanvas(300,600);
  background('#15184B');

  sp1 = split(data.drinks[0].strMeasure1, ' ');
  sp2 = split(data.drinks[0].strMeasure2, ' ');
  sp3 = split(data.drinks[0].strMeasure3, ' ');

  spM1 = split(data2.drinks[0].strMeasure1, ' ');
  spM2 = split(data2.drinks[0].strMeasure2, ' ');
  spM3 = split(data2.drinks[0].strMeasure3, ' ');

  spT1 = split(data3.drinks[0].strMeasure1, ' ');
  spT2 = split(data3.drinks[0].strMeasure2, ' ');
  spT3 = split(data3.drinks[0].strMeasure3, ' ');
  spT3 = split(data3.drinks[0].strMeasure4, ' ');







  shotArray = [{
    alcoholName: 'spirit',
    amountA: 1.5,
    amount: 1.5
  }];

  waterArray = [{
    alcoholName: 'water',
    amountA: 0,
    amountN: 8,
    amount: 8
  }];

margArrayta =[
  {
     alcoholName: data.drinks[0].strIngredient1,
     amountA: float(sp1[0]) + eval(sp1[1]),
     amount: float(sp1[0])+eval(sp1[1])
  },
  {
     alcoholName: data.drinks[0].strIngredient2,
     amountA: eval(sp2[0]),
     amount: float(sp2[0])
  },
  {
     alcoholName: data.drinks[0].strIngredient3,
     amountN: float(sp3[0]),
     amount: float(sp3[0])
  }
];

muleArray = [
  {
     alcoholName: data2.drinks[0].strIngredient1,
     amountA: float(spM1[0]),
     amount: float(spM1[0])
  },
  {
     alcoholName: data2.drinks[0].strIngredient2,
     amountN: float(spM2[0]),
     amount: float(spM2[0])
  },
  {
     alcoholName: data2.drinks[0].strIngredient3,
     amountN: float(spM3[0]),
     amount: float(spM3[0])
  }
];

liitArray= [
  {
     alcoholName: data3.drinks[0].strIngredient1,
     amountA: eval(spT1[0]),
     amount: float(spT1[0])
  },
  {
     alcoholName: data3.drinks[0].strIngredient2,
     amountA: eval(spT2[0]),
     amount: float(spT2[0])
  },
  {
     alcoholName: data3.drinks[0].strIngredient3,
     amountA: eval(spT3[0]),
     amount: float(spT3[0])
  },
  {
     alcoholName: data3.drinks[0].strIngredient4,
     amountA: eval(spT3[0]),
     amount: float(spT3[0])
  }
];

// image(marg, 140,100, 100,100);
// image(mule, 140,180, 100,100);
// image(liit, 140,260, 100,100);
// image(shot, 140,340, 100,100);
// image(water, 140,420,100,100);

 maleW = 79378.7 * 0.68;
 femaleW = 79378.7 * 0.55;

page = 0;
}

function draw() {




noStroke();
  textSize(16);

  if (page == 0) {
    image(p1, 0,0, 300, 600);
  } else if (page == 1) {
    image(p2, 0,0, 300, 600);
  } else if (page == 2) {
    image(p3, 0,0, 300, 600);
  } else if (page == 3) {
    image(p4, 0,0, 300, 600);
  } else if (page == 4) {
    image(p5, 0,0, 300, 600);
  } else if (page == 5) {
    image(p6, 0,0, 300, 600);
  } else if (page == 6) {
    image(p7, 0,0, 300, 600);
  } else if (page == 7) {
    image(p8, 0,0, 300, 600);
  } else if (page == 8) {
    image(p9, 0,0, 300, 600);
  } else if (page == 9) {
    image(p10, 0,0, 300, 600);
  } else if (page == 10) {
    image(p11, 0,0, 300, 600);
  }

  else {
    background('#15184B');
    image(marg, 140,100, 100,100);
    image(mule, 140,180, 100,100);
    image(liit, 140,260, 100,100);
    image(shot, 140,340, 100,100);
    image(water, 140,420,100,100);

fill(0);
rect(160,20,140,50);
rect(160, 80, 20, 20);
fill(255);
male = ((boxA * (0.5 * (boxA / (boxA + boxN))) * 0.789) / maleW ) *100 ;
female = ((boxA * (0.5 * (boxA / (boxA + boxN))) * 0.789) / femaleW ) *100;
  text(male, 160, 40);
  text(female, 160, 60);

  if (male > 0.008){
    fill(255);
    text('!', 150,40);
  } else if (male < 0.008){
    fill('#15184B')
    text('!', 150,40);
  };
  if (female > 0.008){
    fill(255);
    text('!', 150,60);
  } else if (female < 0.008){
    fill('#15184B')
    text('!', 150,60);
  };

fill('#15184B');
  rect(209,20,91,50);

    //text(waterArray[0].amountN, 300, 300);

//fill(0);
  //rect(20,20,200,200);

  // rect(100,240,20,20);
  // rect(140,240,20,20);
  // rect(180,240,20,20);
  // rect(220,240,20,20);
  // rect(260,240,20,20);


  // text(data.drinks[0].strIngredient1, 50, 50);
  // text(data.drinks[0].strMeasure1, 150, 50);
  // sp1 = split(data.drinks[0].strMeasure1, ' ');
  // text("Splitted string is: " + sp1[0], 50, 130);
  // text("Splitted string is: " + sp1[1], 50, 160);
  // text("Splitted string is: " + sp1[2], 50, 190);

  // text(data.drinks[0].strIngredient2, 50, 75);
  // text(data.drinks[0].strMeasure2, 150, 75);
  // sp2 = split(data.drinks[0].strMeasure2, ' ');
  // text("Splitted string is: " + sp2[0], 50, 230);
  // text("Splitted string is: " + sp2[1], 50, 260);
  // text("Splitted string is: " + sp2[2], 50, 290);

  // text(data.drinks[0].strIngredient3, 50, 100);
  // text(data.drinks[0].strMeasure3, 150, 100);
  // sp3 = split(data.drinks[0].strMeasure3, ' ');
  // text("Splitted string is: " + sp3[0], 50, 330);
  // text("Splitted string is: " + sp3[1], 50, 360);
  // text("Splitted string is: " + sp3[2], 50, 390);

 //
 //  text(int(sp1[0]), 50, 500);
 //  text(eval(sp1[1]), 50, 520);
 //  text(int(sp1[2]), 50, 540);
 //
 //  box1 = int(sp1[0]);
 //  box2 = eval(sp1[1]);
 //  box3 = box1 + box2;
 //
 // text(box1, 50, 600);
 //  text(box2, 50, 620);
 //  text(box3, 50, 640);

  // fill(160);
  // rect(150, 400, 210, 55*box3);
  // fill(0);
  // rect(150, 400, 100, 50*box1);
  // fill(255);
  // rect(250, 400, 100, 50*box2);

  // text(margArrayta[0].amountA, 100,300);
  // text(margArrayta[0].amount, 100,320);
  //
  // text(margArrayta[1].amountA, 140,300);
  // text(margArrayta[1].amount, 140,320);
  //
  // text(margArrayta[2].amountN, 180,300);
  // text(margArrayta[2].amount, 180,320);
  //
  // text(muleArray[0].amountA, 100,400);
  // text(muleArray[0].amount, 100,420);
  //
  // text(muleArray[1].amountN, 140,400);
  // text(muleArray[1].amount, 140,420);
  //
  // text(muleArray[2].amountN, 180,400);
  // text(muleArray[2].amount, 180,420);

// for(var i = 0; i < margArrayta.length; i++) {
//   if(margArrayta[i].amountA){
//     fill('red');
//     rect(300,100*i,100,(margArrayta[i].amountA)*50);
//     fill(0);
//     text(margArrayta[i].alcoholName, 320, (100*i)+20);
//     // var addA = margArrayta[i].amountA;
//     // boxA = boxA + addA;
//   } else if (margArrayta[i].amountN){
//     fill('green');
//     rect(300,100*i,100,(margArrayta[i].amountN)*50);
//     fill(0);
//     text(margArrayta[i].alcoholName, 320, (100*i)+20);
//     //boxN +=margArrayta[i].amountN;
//   }
// }

// for(var i = 0; i < muleArray.length; i++) {
//   if(muleArray[i].amountA){
//     fill('red');
//     rect(400,100*i,100,(muleArray[i].amountA)*50)
//     fill(0);
//     text(muleArray[i].alcoholName, 420, (100*i)+20);
//   } else if (muleArray[i].amountN){
//     fill('green');
//     rect(400,100*i,100,(muleArray[i].amountN)*50);
//     fill(0);
//     text(muleArray[i].alcoholName, 420, (100*i)+20);
//   }
// }

// for(var i = 0; i < liitArray.length; i++) {
//   if(liitArray[i].amountA){
//     fill('red');
//     rect(500,100*i,100,(liitArray[i].amountA)*50);
//     fill(0);
//     text(liitArray[i].alcoholName, 520, (100*i)+20);
//   } else if (liitArray[i].amountN){
//     fill('green');
//     rect(500,100*i,100,(liitArray[i].amountN)*50);
//     fill(0);
//     text(liitArray[i].alcoholName, 520, (100*i)+20);
//   }
// }

// for(var i = 0; i < shotArray.length; i++) {
//   if(shotArray[i].amountA){
//     fill('red');
//     rect(600,100*i,100,(shotArray[i].amountA)*50);
//     fill(0);
//     text(shotArray[i].alcoholName, 620, (100*i)+20);
//   } else if (shotArray[i].amountN){
//     fill('green');
//     rect(600,100*i,100,(shotArray[i].amountN)*50);
//     fill(0);
//     text(shotArray[i].alcoholName, 620, (100*i)+20);
//   }
// }

// for(var i = 0; i < waterArray.length; i++) {
//   if(waterArray[i].amountA){
//     fill('red');
//     rect(700,100*i,100,(waterArray[i].amountA)*50);
//     fill(0);
//     text(waterArray[i].alcoholName, 720, (100*i)+20);
//   } else if (waterArray[i].amountN){
//     fill('green');
//     rect(700,100*i,100,(waterArray[i].amountN)*50);
//     fill(0);
//     text(waterArray[i].alcoholName, 720, (100*i)+20);
//   }
// }

fill('red');
rect(40,40,100, boxA);
fill('green');
rect(40, 40+ (boxA), 100, boxN);
}

//rect(20,20,50,margArrayta)

//text(spM1[1], 100,100);

//text(page,10,10);







}

function mousePressed (){

  if (page < 11){
  page++;} else
   {

  // if (page < 11){
  //   page++;
  // } else if (page > 11) {

// boxA = (20*margA);
// boxN = (20*margN);

// 100, 120, 240, 260

if (mouseX >140 && mouseX < 220 && mouseY > 120 && mouseY <180 ){

  for (var i =0; i < margArrayta.length; i++) {
    if(margArrayta[i].amountA){
    boxA+=5*(margArrayta[i].amountA);} else
    if (margArrayta[i].amountN){
    boxN+=5*(margArrayta[i].amountN);
    }
}
  // boxA += (5*margA);
  // boxN += (5*margN);
} else
if (mouseX >140 && mouseX < 220 && mouseY > 200 && mouseY <270 ){

  for (var i =0; i < muleArray.length; i++) {
    if(muleArray[i].amountA){
    boxA+=5*(muleArray[i].amountA);} else
    if (muleArray[i].amountN){
    boxN+=5*(muleArray[i].amountN);
    }
}

  // boxA += (5*muleA);
  // boxN += (5*muleN);
} else
if (mouseX >140 && mouseX < 220 && mouseY > 280 && mouseY <350 ){

  for (var i =0; i < liitArray.length; i++) {
    if(liitArray[i].amountA){
    boxA+=5*(liitArray[i].amountA);} else
    if (liitArray[i].amountN){
    boxN+=5*(liitArray[i].amountN);
    }
}


  // boxA += (5*liitA);
  // boxN += (5*liitN);
}
else
if (mouseX >140 && mouseX < 220 && mouseY > 360 && mouseY <430 ){

  for (var i =0; i < shotArray.length; i++) {
    if(shotArray[i].amountA){
    boxA+=5*(shotArray[i].amountA);} else
    if (shotArray[i].amountN){
    boxN+=5*(shotArray[i].amountN);
    }
}

  // boxA += (5*liitA);
  // boxN += (5*liitN);
}
 else
if (mouseX >140 && mouseX < 220 && mouseY > 440 && mouseY <510 ){

  for (var i =0; i < waterArray.length; i++) {
    if(waterArray[i].amountA){
    boxA+=5*(waterArray[i].amountA);} else
    if (waterArray[i].amountN){
    boxN+=5*(waterArray[i].amountN);
    }
}
  //
  // boxA += (5*waterA);
  // boxN += (5*waterN);
} else if (mouseX>160 && mouseY<180 && mouseY>80 && mouseY <100){
  boxA=0;
  boxN=0;
};


  // fill('red');
  // rect(40,40,100,(20*margA));
  // fill('green');
  // rect(40, 40+(20*margA), 100, (20*margN));
}
}
// }
