var data1, data2, data3;

//var box1, box2, box3;

var margArrayta = [];
var muleArray = [];
var liitArray = [];
var shotArray = [];
var waterArray = [];

var boxN = 0;
var boxA = 0;

var margA = 1.5;
var margN = 0.5;

var muleA = 2;
var muleN = 10;

var liitA = 2;
var liitN = 0;

var shotA = 1.5;
var shotN = 0;

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
data = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');

data2 = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009');

data3 = loadJSON('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17204');
}
function setup() {
  createCanvas(1200,700);
  background(160);

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


}

function draw() {

  textSize(16);

//fill(0);
  //rect(20,20,200,200);

  rect(100,240,20,20);
  rect(140,240,20,20);
  rect(180,240,20,20);
  rect(220,240,20,20);
  rect(260,240,20,20);


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

//rect(20,20,50,margArrayta)

//text(spM1[1], 100,100);


}

function mousePressed (){

// boxA = (20*margA);
// boxN = (20*margN);

// 100, 120, 240, 260

if (mouseX >100 && mouseX < 120 && mouseY > 240 && mouseY <260 ){

  boxA += (5*margA);
  boxN += (5*margN);
};
if (mouseX >140 && mouseX < 160 && mouseY > 240 && mouseY <260 ){

  boxA += (5*muleA);
  boxN += (5*muleN);
};
if (mouseX >180 && mouseX < 200 && mouseY > 240 && mouseY <260 ){

  boxA += (5*liitA);
  boxN += (5*liitN);
};
if (mouseX >220 && mouseX < 240 && mouseY > 240 && mouseY <260 ){

  boxA += (5*liitA);
  boxN += (5*liitN);
};
if (mouseX >260 && mouseX < 280 && mouseY > 240 && mouseY <260 ){

  boxA += (5*waterA);
  boxN += (5*waterN);
};


  // fill('red');
  // rect(40,40,100,(20*margA));
  // fill('green');
  // rect(40, 40+(20*margA), 100, (20*margN));
}
