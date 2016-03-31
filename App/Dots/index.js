var w = window.innerWidth;
var h = window.innerHeight;


var canvas = document.getElementById('canvas');
canvas.width = w;// * scale;
canvas.height = h;// * scale;

var quantity = 50;
var allCircles = [];
var displayedCircles = [];
var bar;
var counter = 0;


var ctx = canvas.getContext("2d",{ antialias:true, antialiasSamples:4, alpha: false});


var score = 0;



function onTouchStart(e){}

function onTouchMove(e){
    bar.update(e.changedTouches[0].pageX);
}

function onTouchEnd(e){}

function setup(){
    
    
    bar = new Bar(ctx);
    
    
    for(var i=0;i<quantity;i++){
        var myCircle = new Circle(ctx);
        myCircle.ID = i;
        myCircle.y = -175;
        myCircle.x = Math.random()*w;
        myCircle.vy = Math.random()*4;
        myCircle.r = Math.random()*20+1;
        allCircles.push(myCircle);
    }
    
    
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchmove', onTouchMove);
    
    draw();
    
    
}

//scoreboard
function drawScore() {
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("Score: "+score, 10, 25);
}


//collision detection
function collisionDetection(myCircle) {
    if(myCircle.y + myCircle.r >= bar.y && (myCircle.x + myCircle.r >= bar.x && myCircle.x - myCircle.r <= bar.x + bar.width) && myCircle.color == bar.color && !myCircle.isTouched) {
        myCircle.isTouched = true;
        score++;
        var reds = ["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.7)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"];
        bar.colorIndex = Math.floor(Math.random()*4);
        bar.color = reds[bar.colorIndex];
        //size varies points
        
    }
    
    
    
    //  wrong match subtracting score
    if(myCircle.y + myCircle.r >= bar.y && (myCircle.x + myCircle.r >= bar.x && myCircle.x - myCircle.r <= bar.x + bar.width) && myCircle.color != bar.color && !myCircle.isTouched) {
        myCircle.isTouched = true;
        score-=1;
        var reds = ["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.7)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"];
        bar.colorIndex = Math.floor(Math.random()*4);
        bar.color = reds[bar.colorIndex];
        //size varies points
        if(score>=10){
            myCircle.vy = Math.random()*7;
        }
    }
    
    
}
//end of collision detection

function draw(){
    
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,w,h);
    
    
    
    bar.display();
    
    
    counter++;
    if(counter%50==0){
        counter = 0;
        var shifted = allCircles.shift();
        shifted.y = -175;
        shifted.x = Math.random()*w;
        shifted.isTouched = false;
        displayedCircles[shifted.ID] = shifted;
    }
    for(var i in displayedCircles){
        if(!displayedCircles[i].isTouched) displayedCircles[i].display();
        displayedCircles[i].y += displayedCircles[i].vy;
        collisionDetection(displayedCircles[i]);
        if( displayedCircles[i].y > h+ displayedCircles[i].r){
            allCircles.push(displayedCircles[i]);
            delete displayedCircles[i];
        }
    }
    
    
    requestAnimationFrame(draw);
    drawScore();
    
}



setup();
