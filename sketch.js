var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    console.log(database);

    var ballref = database.ref('ball/position');
    ballref.on("value",readpos,nonread);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y)
{
   database.ref('ball/position').set({
       x:pos.x + x,
       y :pos.y + y 
   })

}

function readpos(data)
{
  pos = data.val();
  console.log(pos.y);
  ball.x = pos.x;
  ball.y = pos.y;
}

function nonread()
{
  console.log("error occurred");
}