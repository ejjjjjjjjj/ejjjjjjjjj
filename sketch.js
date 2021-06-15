var cal = "54478c-2c699a-048ba8-0db39e-16db93-83e377-b9e769-efea5a-f1c453-f29e4c".split("-").map(a=>"#"+a)

var caa = "ff7b00-ff8800-ff9500-ffa200-ffaa00-ffb700-ffc300-ffd000-ffdd00-ffea00".split("-").map(a=>"#"+a)
function planet(x,y,r){
  push();
    translate(x,y)
    for(var i=0;i<100;i++){
      if(mouseIsPressed){
        let ca = caa[int(noise(frameCount/10,i)*cal.length*r)%cal.length]
      fill(ca);
      drawingContext.shadowColor = ca;
      drawingContext.shadowBlur = 20;
      let xx = noise(i*100,frameCount/r)*r*noise(i)
      let ang = noise(i,frameCount/r)*20*PI
      let rr = sqrt(noise(i,10,frameCount/50)*50)
      let xxx =
      ellipse(xx*cos(ang)/2,xx*sin(ang)/2,noise(0,rr)*10)
      
      ellipse(xx*cos(ang),xx*sin(ang),(noise(0,rr))*6)
      
    }
    else{
              let ca = cal[int(noise(frameCount/10,i)*cal.length*r)%cal.length]
      fill(ca);
      drawingContext.shadowColor = ca;
      drawingContext.shadowBlur = 20;
      let xx = noise(i*100,frameCount/r)*r*noise(i)
      let ang = noise(i,frameCount/r)*20*PI
      let rr = sqrt(noise(i,10,frameCount/50)*50)
      let xxx =
      ellipse(xx*cos(ang)/2,xx*sin(ang)/2,noise(0,rr)*10)
      
      ellipse(xx*cos(ang),xx*sin(ang),(noise(0,rr))*6)
    }
      }
      
      
      
  pop();
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  planet(width/2,height/2)
  noStroke();
}

function draw() {
  
  if (mouseIsPressed) {
        background(0,3);
        let rt=500
        planet(windowWidth/2,windowHeight/2,rt)
      }else{background(0,8);
           let rt=800
           planet(windowWidth/2,windowHeight/2,rt)
           
           }
  
  
  //planet(mouseX,mouseY,1000)
  
}


