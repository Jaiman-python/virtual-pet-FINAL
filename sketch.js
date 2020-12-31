//Create variables here
var dog_img, happyDog_img, dog, happyDog, database, foodS, foodStock, x, feed, addFood;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");

  }

function setup() {
  createCanvas(1000, 700);
  database = firebase.database();


  dog_img.size = (5);
  dog = createSprite(800,250,5,5);
  dog.addImage(dog_img);
  dog.scale = 0.45;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  feed = createButton("Feed the dog");
  feed.position(760, 70);
  addFood = createButton("Buy more food");
  addFood.position(860, 70);

  feed.mousePressed(feedDog);
  addFood.mousePressed(addFoods);

  foodObject = new Food();
}


function draw() {  
  background(46, 139, 87)

  foodObject.display();

  drawSprites();
  //add styles here
  fill("black");
  textSize(20);
  text("You have " + foodS + " remaining.", 700, 50);
}

function feedDog(){
  var currentStock = foodObject.getStock();
  foodObject.updateStock(currentStock-1);
  dog.addImage(happyDog_img);
  database.ref('/').update({
    Food:foodObject.getStock()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}




function readStock(data){
  foodS=data.val();
  foodObject.updateStock(foodS);
}

