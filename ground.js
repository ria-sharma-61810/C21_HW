class ground{
    constructor(x,y,w,h){
        let options ={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        
        strokeWeight(3)
        stroke("magenta");
        fill("cyan");
        rect(this.x,this.y,this.w,this.h)
    }
}