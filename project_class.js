const name = document.querySelector("#obj_name");
var project_name = "";

class project{

  
  constructor(Lat, Lng, name="", index=0){
    
    this.lat = Lat;
    this.lng = Lng;
    this.name = name;
    this.index = index;
    this.ani = 0;
    
    this.b = createButton("");
    this.b.innerHTML = this.name;
    
    this.b.style("background-color","rgb(100,100,100)");
    this.b.style("border", "1px solid rgb(255,255,255)");
    this.b.style("border-radius", "8px");
    
    
  }
  
  
  update(){


  }  
  
  display(){
    
    stroke(0);
    strokeWeight(0.2);
    fill(183,255,242,150);

    var pos = myMap.latLngToPixel(this.lat, this.lng); 

    //ellipse(pos.x, pos.y, 20, 20);
    
    
    
    
    this.b.size(myMap.zoom()*1.5,myMap.zoom()*1.5);
    this.b.position(pos.x, pos.y);
    
    this.b.mouseOver(OverButton);
    this.b.mouseOut(OutButton);
    this.b.mouseClicked(ProjectButton);
    
    this.b.style("opacity", this.ani);
    
    
    if(canvas_pos == 5 ) this.ani = lerp(this.ani,1,0.02);
    else this.ani = lerp(this.ani,0,0.2);
    
    
    stroke(0, 255*this.ani);
    fill(0, 255*this.ani);
    textSize(10);
    text(this.name,pos.x+25, pos.y+10);

  }
  
}


function ProjectButton() {
  if(!return_project) project_name = this.innerHTML;
  canvas_pos = 4;
  
}


function OverButton() {
  this.style("background-color","rgb(135,217,195)");
  name.innerHTML = this.innerHTML;
  
  
}

function OutButton() {
  this.style("background-color","rgb(100,100,100)");
  name.innerHTML = "..........";
 
}
