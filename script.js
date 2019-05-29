class Paddle
{

constructor(center_x,center_y,cx1,cx2,cy)
{
this.cent = { x: this.center_x ,
                    y: this.center_y};
this.c_x1 = this.cx1;
this.c_x2 = this.cx2;
this.c_y = this.cy;
}





draw(ctx)
{
ctx.clearRect(0,0,1496,722);
ctx.fillStyle = '#f00' ;
ctx.beginPath();
ctx.arc(this.c_x1,this.c_y,0,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = '#00f' ;
ctx.beginPath();
ctx.arc(this.c_x2,this.c_y,0,0,2*Math.PI);
ctx.fill();

ctx.fillStyle = '#fff' ;
ctx.beginPath();
ctx.arc(this.cent.x,this.cent.y,70,0,2*Math.PI);
ctx.stroke();
}



update(deltaTime,w)
{
if(!deltaTime) return 0;

this.c_x1=this.c_x1+70*Math.cos(w);

}


}















var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext('2d');

const GAME_WIDTH = 1496;
const GAME_HEIGHT = 722;
const CX=673;
const CY=622;
const deg_jump = 0.004;
ctx.clearRect(0,0,1496,722);

this.width = 150;
this.height = 50;
this.center = {
                        x : GAME_WIDTH/2 - this.width/2 , 
                        y : GAME_HEIGHT - this.height - 50
                      };


ctx.translate(CX,CY);
cX1=CX+70;
cX2=CX-70;
cY=CY;
let paddle = new Paddle(CX,CY,cX1,cX2,cY);


paddle.draw(ctx);

let lastTime = 0;
function gameloop(timestamp)
{
let deltaTime = timestamp - lastTime;
lastTime = timestamp;
ctx.clearRect(0,0,1496,722);
paddle.draw(ctx);
paddle.update(deltaTime,deg_jump);
requestAnimationFrame(gameloop);
}
gameloop();

