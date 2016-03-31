var reds = ["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.8)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"];

var Circle = function(ctx){
    this.ctx = ctx;
    this.x;
    this.y;
    this.vx;
    this.vy;
    this.gravity = 0.05;
    
    this.colorIndex = Math.floor(Math.random()*4);
    this.color = reds[this.colorIndex];//"rgba(255,0,0,"+(parseInt(Math.random()*100)+0.5)+"";
//    this.color = fourColors();
//    or
//    this.color = "["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.7)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"]";
    this.ID;
    this.isTouched = false;
}

Circle.prototype = {
    
display:function(){
    this.ctx.fillStyle = this.color;
    

//fourColors:function(){
//    var reds = "["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.8)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"]";
//    
//    for (var j=0, j>reds.length, j++) {
//    int c = j % 4;
//        this.ctx.fillStyle = this.color[c];
//    }
//}
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    this.ctx.closePath();
    this.ctx.fill();
},
move:function(){
    
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    
    if(this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0){this.init();
    }
    
},
init:function(){
    this.x = window.innerWidth/2;
    this.y = window.innerHeight;
    this.vx = 2
    this.vy = -2
    this.r = 1
}
    
}


//   this.color = "red";
//   this.colorb = "rgba(255,0,0,0.8)";
//   this.colorc = "rgba(255,0,0,0.5)";
//   this.colord = "rgba(255,0,0,0.3)";