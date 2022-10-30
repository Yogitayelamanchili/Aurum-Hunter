var allWalls=[]
var allChests=[]
var numberOfChests=0
function preload(){
chestImage=loadImage("images/2.png") 
}

function setup() {  
  createCanvas(950, 470);

  ball=createSprite(40,235,50,50)

  
  walls=[
    {x:10,y:20,w:1700,h:40},
    {x:10,y:450,w:1700,h:40},
    {x:10,y:450,w:40,h:900},
    {x:600,y:50,w:250,h:40},
    {x:600,y:90,w:150,h:40},
    {x:600,y:130,w:80,h:40},
    {x:700,y:300,w:250,h:40},
    {x:800,y:370,w:50,h:120},
    {x:300,y:300,w:250,h:40},
    {x:200,y:370,w:50,h:120},
    {x:1000,y:20,w:2000,h:40},
    {x:1000,y:450,w:2000,h:40},
    {x:900,y:450,w:40,h:700},
    {x:1100,y:165,w:200,h:250},
    {x:1250,y:420,w:50,h:25},
    {x:1300,y:395,w:50,h:25},
    {x:1350,y:370,w:50,h:25},
    {x:1500,y:370,w:50,h:25},
    {x:1550,y:395,w:50,h:25},
    {x:1600,y:420,w:50,h:25},
    {x:1760,y:150,w:250,h:40},
    {x:1900,y:105,w:40,h:130},
    {x:1950,y:350,w:100,h:250},

  ]


  for(var i in walls){
    var wall=createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h)
    allWalls.push(wall)
  }

  
  console.log(allWalls)

  var chests=[
    {x:300,y:380,collected:false},
    {x:800,y:90,collected:false},
    {x:700,y:380,collected:false},
    {x:1380,y:130,collected:false},
    {x:1430,y:400,collected:false},
    {x:1800,y:80,collected:false},
  ]
  for(var i in chests){
    var chest=createSprite(chests[i].x,chests[i].y,50,50)
    chest.addImage(chestImage)
    chest.scale=0.1
    allChests.push(chests)
  }
}
function draw() {
  background("black")
  drawSprites()

  fill("green")
  textSize(20)
  text("Number of chests="+numberOfChests,30,30)

  for(var i in allWalls){
    ball.collide(allWalls[i])
  }

  for(var j in allChests){ 
    if(ball.collide(allChests[j])){ 
      allChests[j].visible = false
      allChests[j].destroy()
      numberOfChests +=1 
    }
  }

  if(keyDown("right")){
    ball.x+=5

  }
  if(keyDown("left")){
   ball.x-=5 

  }
  if(keyDown("down")){
    ball.y+=5

  }
  if(keyDown("up")){
    ball.y-=5

  }
  
}