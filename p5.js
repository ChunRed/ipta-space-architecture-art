let can;
let b_return;
let b_left;
let b_right;
let menu_o = 0;
let button_o = 0;
let obj_o = 0;
let pro_o = 0;
let member1;
let member2;
let member3;
let member5;
let member6;
let member7;
let member8;
let member9;
let member10;
let member11;
let member12;
let member13;
let member14;
let member15;
let member16;

 
var page_pos = 0;
var ipta_pos = 0;
var member_f = true;

var projects=[20];

//-------------------------------------------------mappa.js
let Key = 'pk.eyJ1IjoiY2h1bmh1YW5nIiwiYSI6ImNsMmZzaHlrMzA4eDAzam81ZW9nZjdpcDEifQ.dVHjgsWy2t7KwVI_ZRlKMw';

// Options for map
let options = {
  lat: 24.806094,
  lng: 120.971213,
  zoom: 16,
  studio: true, 
  style: 'mapbox://styles/chunhuang/cl9pwtod8000615mafcau2057',  
};

const mappa = new Mappa('Mapbox', Key);
let myMap;



function setup() {
  can = createCanvas(window.innerWidth, window.innerHeight);
  can.style("position", "absolute");
  //can.style("background-color","rgb(255,255,255)");
  can.style("top", "0%");
  can.style("left", "0%");
  can.style("z-index", "0");
  can.style("opacity", "1");
  // can.style("border", "1px solid");
  // can.style("border-radius", "8px");

  b_return = document.getElementById("button4");
  b_return.style.top = 90 + "%";
  
  b_right = document.getElementById("button5");
  b_right.style.top = 90 + "%";
  
  b_left = document.getElementById("button6");
  b_left.style.top = 90 + "%";
  
  page_pos = width;
  ipta_pos = width;
  
  //-------------------------------------------------mappa.js
  myMap = mappa.tileMap(options); 
  myMap.overlay(can);
  
  //-------------------------------------------------project_class setup.js
  MapDot_setup();
  
} 


//loop function
function draw() {
  background(255,255);
  clear();
  Member();
  button();
  MapDot();  
  IPTA();
}


//control menu button -> Member / IPTA / INRO
function button() {
  switch (canvas_pos) {
      
    case 1:
      menu_o = lerp(menu_o, 1, 0.2);
      button_o = lerp(button_o, 1, 0.2);
      obj_o = lerp(obj_o, 0, 0.2);
      pro_o = lerp(pro_o, 0, 0.2);
      break;

    case 2:
      menu_o = lerp(menu_o, 1, 0.2);
      button_o = lerp(button_o, 0, 0.2);
      obj_o = lerp(obj_o, 0, 0.2);
      pro_o = lerp(pro_o, 0, 0.2);
      break;

    case 3:
      menu_o = lerp(menu_o, 1, 0.2);
      button_o = lerp(button_o, 0, 0.2);
      obj_o = lerp(obj_o, 0, 0.2);
      pro_o = lerp(pro_o, 0, 0.2);
      break;
    
    case 4:
      pro_o = lerp(pro_o, 1, 0.2);
      break;

    case 5:
      menu_o = lerp(menu_o, 0, 0.2);
      button_o = lerp(button_o, 0, 0.2);
      obj_o = lerp(obj_o, 1, 0.2);
      pro_o = lerp(pro_o, 0, 0.2);
      break;

    default:
      menu_o = lerp(menu_o, 0, 0.2);
      button_o = lerp(button_o, 0, 0.2);
      obj_o = lerp(obj_o, 1, 0.2);
      pro_o = lerp(pro_o, 0, 0.2);
      break;
  }
  //can.style("opacity",menu_o);
  
  b_return.style.opacity = menu_o;
  b_right.style.opacity = button_o;
  b_left.style.opacity = button_o;
  object_name.style.opacity = obj_o;
  pro_return.style.opacity = pro_o;
  name.style.opacity = 1-pro_o;
  // if(menu_o > 0.1) can.style("z-index", "1");
  // else can.style("z-index", "-1");
}


function preload() {
  member1 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member2 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/Fd-dTMbaUAACcW4.jfif?v=1666530487835');
  member3 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/%E9%BB%83%E7%B4%80%E8%99%B9.jpg?v=1666530658482');
  member4 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/%E9%84%AD%E5%AD%90%E8%8A%B8.JPG?v=1666615222143');
  member5 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/%E6%B1%AA%E7%89%A7%E5%BE%B7.PNG?v=1666615356756');
  member6 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/%E6%9E%97%E5%AD%90%E5%A6%8D.png?v=1666806052478');
  member7 = loadImage('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/%E8%B3%B4%E7%8E%9F%E9%9C%93.jpg?v=1666806058389');
  member8 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member9 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member10 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member11 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member12 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member13 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member14 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member15 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  member16 = loadImage('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
  
}


function windowResized(){
  resizeCanvas(windowWidth/5*4, window.innerHeight/5*4);
  //resizeCanvas(0,0);
}
 

//control Member button
function Member(){
  
  if(canvas_pos == 5 || canvas_pos == 2 || canvas_pos == 3 || canvas_pos == 4) {
    page_pos = lerp(page_pos, width*5, 0.05);
    member_f = true;
  }
 
  if (canvas_pos == 1 && member_f) {
    page_pos = lerp(page_pos, 0, 0.05);
    member_f = false;
  }
  
  if(width > height){
    
    
    
    var img_size = width/8;
    var margin_width = width/10;
    var matgin_height = height/3;
    
    noStroke();
    fill(255,180);
    rect(page_pos, matgin_height-30, margin_width*17 + img_size*16, img_size*1.5);
    
    image(member1, margin_width + page_pos, matgin_height, img_size, img_size);
    image(member2, margin_width*2 + page_pos + img_size, matgin_height, img_size, img_size);
    image(member3, margin_width*3 + page_pos + img_size*2, matgin_height, img_size, img_size);
    image(member4, margin_width*4 + page_pos + img_size*3, matgin_height, img_size, img_size);
    
    image(member5, margin_width*5 + page_pos + img_size*4, matgin_height, img_size, img_size);
    image(member6, margin_width*6 + page_pos + img_size*5, matgin_height, img_size, img_size);
    image(member7, margin_width*7 + page_pos + img_size*6, matgin_height, img_size, img_size);
    image(member8, margin_width*8 + page_pos + img_size*7, matgin_height, img_size, img_size);
    
    image(member9, margin_width*9 + page_pos + img_size*8, matgin_height, img_size, img_size);
    image(member10, margin_width*10 + page_pos + img_size*9, matgin_height, img_size, img_size);
    image(member11, margin_width*11 + page_pos + img_size*10, matgin_height, img_size, img_size);
    image(member12, margin_width*12 + page_pos + img_size*11, matgin_height, img_size, img_size);
    
    image(member13, margin_width*13 + page_pos + img_size*12, matgin_height, img_size, img_size);
    image(member14, margin_width*14 + page_pos + img_size*13, matgin_height, img_size, img_size);
    image(member15, margin_width*15 + page_pos + img_size*14, matgin_height, img_size, img_size);
    image(member16, margin_width*16 + page_pos + img_size*15, matgin_height, img_size, img_size);
    
    noStroke();
    fill(50);
    textSize(14); 
    fill(100);
    
    text("姚仲涵 | oooo-ooooo, ooo", margin_width + page_pos,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*2 + page_pos + img_size,  matgin_height*1.2 + img_size);
    text("黃紀虹 | Chi-Hung, Huang", margin_width*3 + page_pos + img_size*2,  matgin_height*1.2 + img_size);
    text("鄭子芸 | Zih-yun, Jheng", margin_width*4 + page_pos + img_size*3,  matgin_height*1.2 + img_size);
    
    text("汪牧德 | oooo-ooooo, ooo", margin_width*5 + page_pos + img_size*4,  matgin_height*1.2 + img_size);
    text("林子妍 | oooo-ooooo, ooo", margin_width*6 + page_pos + img_size*5,  matgin_height*1.2 + img_size);
    text("賴玟霓 | oooo-ooooo, ooo", margin_width*7 + page_pos + img_size*6,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*8 + page_pos + img_size*7,  matgin_height*1.2 + img_size);
    
    text("林俊遑 | Chun-huang, Lin", margin_width*9 + page_pos + img_size*8,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*10 + page_pos + img_size*9,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*11 + page_pos + img_size*10,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*12 + page_pos + img_size*11,  matgin_height*1.2 + img_size);
    
    text("林俊遑 | Chun-huang, Lin", margin_width*13 + page_pos + img_size*12,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*14 + page_pos + img_size*13,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*15 + page_pos + img_size*14,  matgin_height*1.2 + img_size);
    text("林俊遑 | Chun-huang, Lin", margin_width*16 + page_pos + img_size*15,  matgin_height*1.2 + img_size);
    
    switch(page){
      case 0:
        page_pos = lerp(page_pos, 0, 0.05);
        break;

      case 1:
        page_pos = lerp(page_pos, -width/10*9, 0.05);
        break;

      case 2:
        page_pos = lerp(page_pos, -width/10*9*2, 0.05);
        break;

      case 3:
        page_pos = lerp(page_pos, -width/10*9*3, 0.05);
        break;
    }
  }
  
  else{
    
    
    
    var img_size = width/5;
    var margin_width = width/25;
    var matgin_height = height/6;
    
    noStroke();
    fill(255,180);
    rect(page_pos, matgin_height*2-30, margin_width*17 + img_size*16, img_size*4);
    
    
    image(member1, margin_width + page_pos, matgin_height*2, img_size, img_size);
    image(member2, margin_width*2 + page_pos + img_size, matgin_height*2, img_size, img_size);
    image(member3, margin_width*3 + page_pos + img_size*2, matgin_height*2, img_size, img_size);
    image(member4, margin_width*4 + page_pos + img_size*3, matgin_height*2, img_size, img_size);
    
    image(member5, margin_width + page_pos, matgin_height*3.5, img_size, img_size);
    image(member6, margin_width*2 + page_pos + img_size, matgin_height*3.5, img_size, img_size);
    image(member7, margin_width*3 + page_pos + img_size*2, matgin_height*3.5, img_size, img_size);
    image(member8, margin_width*4 + page_pos + img_size*3, matgin_height*3.5, img_size, img_size);
    
    image(member9, margin_width*5 + page_pos + img_size*4, matgin_height*2, img_size, img_size);
    image(member10, margin_width*6 + page_pos + img_size*5, matgin_height*2, img_size, img_size);
    image(member11, margin_width*7 + page_pos + img_size*6, matgin_height*2, img_size, img_size);
    image(member12, margin_width*8 + page_pos + img_size*7, matgin_height*2, img_size, img_size);
    
    image(member13, margin_width*5 + page_pos + img_size*4, matgin_height*3.5, img_size, img_size);
    image(member14, margin_width*6 + page_pos + img_size*5, matgin_height*3.5, img_size, img_size);
    image(member15, margin_width*7 + page_pos + img_size*6, matgin_height*3.5, img_size, img_size);
    image(member16, margin_width*8 + page_pos + img_size*7, matgin_height*3.5, img_size, img_size);
    
    noStroke();
    fill(50);
    textSize(11);
    fill(100);
    
    
    text("林俊遑\nChun-huang, Lin", margin_width + page_pos,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*2 + page_pos + img_size,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*3 + page_pos + img_size*2,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*4 + page_pos + img_size*3,  matgin_height*2+20 + img_size);
    
    text("林俊遑\nChun-huang, Lin", margin_width + page_pos,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*2 + page_pos + img_size,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*3 + page_pos + img_size*2,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*4 + page_pos + img_size*3,  matgin_height*3.5+20 + img_size);
    
    text("林俊遑\nChun-huang, Lin", margin_width*5 + page_pos + img_size*4,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*6 + page_pos + img_size*5,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*7 + page_pos + img_size*6,  matgin_height*2+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*8 + page_pos + img_size*7,  matgin_height*2+20 + img_size);
    
    text("林俊遑\nChun-huang, Lin", margin_width*5 + page_pos + img_size*4,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*6 + page_pos + img_size*5,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*7 + page_pos + img_size*6,  matgin_height*3.5+20 + img_size);
    text("林俊遑\nChun-huang, Lin", margin_width*8 + page_pos + img_size*7,  matgin_height*3.5+20 + img_size);
    
    switch(page){
      case 0:
        page_pos = lerp(page_pos, 0, 0.05);
        break;

      case 1:
        page_pos = lerp(page_pos, -width/25*24, 0.05);
        break;

      case 2:
        page_pos = lerp(page_pos, 0, 0.05);
        break;

      case 3:
        page_pos = lerp(page_pos, -width/25*24, 0.05);
        break;
    }
  }
}


//control IPTA button
function IPTA(){
  
  var img_size = width/8;
  var margin_width = width/10;
  var matgin_height = height/3;
  
  var text_w = width/3;
  var text_h = height/3;
  var text_algin = 40;
  
  noStroke();
  fill(255,180);
  rect(ipta_pos, matgin_height-30, margin_width*17 + img_size*16, img_size*1.5);

  textSize(20);
  fill(50);
  text("國立清華大學 IPTA", text_w + ipta_pos, text_h);
  text("藝術學院學士班 :　", text_w + ipta_pos, text_h+text_algin);
  text("IPTA FB : ", text_w + ipta_pos, text_h+text_algin*2);
  text("IPTA IG : ", text_w + ipta_pos, text_h+text_algin*3);
  
  if(canvas_pos == 2){
    ipta_pos = lerp(ipta_pos, 0, 0.05);
  }
  else {
    ipta_pos = lerp(ipta_pos, width, 0.05);
  }
  
} 


function MapDot_setup(){
  
  // for(let i=0;i<20;i++){
  //   projects[i]=new project(random(24.810932,24.801785), random(120.967231,120.975822));
  //   //projects[i]=new project();
  // }
  projects[0]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project1");
  projects[1]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project2");//俊遑
  projects[2]=new project(24.806485, 120.971086,"修飾好風光");//紀虹
  projects[3]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project4");//子芸
  projects[4]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project5");//牧德
  projects[5]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project6");//子妍
  projects[6]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project7");//玟霓
  projects[7]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project8");
  projects[8]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project9");
  projects[9]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project10");
  projects[10]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project11");
  projects[11]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project12");
  projects[12]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project13");
  projects[13]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project14");
  projects[14]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project15");
  projects[15]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project16");
  projects[16]=new project(random(24.810932,24.801785), random(120.967231,120.975822),"project17");
}



function MapDot(){

  
  for(let i=0;i<projects.length;i++){
      projects[i].display();
    }
  
  
  if(project_name != ""){
    
    fill(255,150);
    rect(width/6, 150, width/6*4, height/6*4);
    
  }
  
  if(return_project){
    project_name = "";
    return_project = false;
  }
  
}


//control INTRO button
function INTRO(){
  
}
