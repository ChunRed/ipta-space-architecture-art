var canvas_pos = 5;
var page = 0;
var return_project = false;


const title = document.querySelector(".title");
const b_menber = document.querySelector(".button1");
const b_ipta   = document.querySelector(".button2");
const b_intro  = document.querySelector(".button3");
const return_button = document.querySelector("#button4");
const right_button = document.querySelector("#button5");
const left_button = document.querySelector("#button6");
const pro_return = document.querySelector("#project_return");


b_menber.addEventListener("click", function () {
        
        canvas_pos = 1;
 });
b_ipta.addEventListener("click", function () {
        
        canvas_pos = 2;
 });
b_intro.addEventListener("click", function () {
       
        canvas_pos = 3;
 });
return_button.addEventListener("click", function () {
        
        canvas_pos = 5;
        
 });

right_button.addEventListener("click", function () {
        if(page<3)page += 1;
        else page = 0;
 });

left_button.addEventListener("click", function () {
        //title.style.color = "red";
       if(page>0)page -= 1;
       else page = 3;
 });

pro_return.addEventListener("click", function () {
  return_project = true;
  canvas_pos = 5;
  
});
