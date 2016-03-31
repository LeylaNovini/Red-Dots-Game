var reds = ["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.8)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"];


var Bar = function(ctx) {
    this.ctx = ctx;
    this.height = 10;
    this.width = 70;
    this.x;
    this.y = window.innerHeight - this.height;
//    this.color = "rgba(255,0,0,"+(parseInt(Math.random()*100)+0.5)+"";
    this.colorIndex = Math.floor(Math.random()*4);
    this.color = reds[this.colorIndex];
}

Bar.prototype = {
display:function(){
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.fillRect(this.x, this.y,  this.width , this.height);
    this.ctx.closePath();
},
    
update:function(val){
    this.x = val;
}
}

//    this.alpha = 0.7 + Math.random();
//    this.color = "rgba(255,0,0,"+this.alpha+")";