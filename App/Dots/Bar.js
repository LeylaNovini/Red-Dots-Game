var reds = ["rgba(255, 0, 0, 1)", "rgba(255,0,0,0.7)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.3)"];


var Bar = function(ctx) {
    this.ctx = ctx;
    this.height = 30;
    this.width = 70;
    this.x;
    this.y = window.innerHeight - this.height;
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