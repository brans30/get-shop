//api
let productsaerch = ["mahmoud","ram"]

async function fetchData() {
  let cont = document.querySelector(".cont");

  // جرب دي الصح
//fetch("https://fakestoreapi.com/products")
fetch("https://dummyjson.com/products?limit=100")

 .then((data) => data.json())

    .then(({products}) => {
     
      products.forEach((pro) => {
       
       
        productsaerch.push(pro.title)
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        let p1 = document.createElement("p");
        p.textContent = pro.title;
        p1.textContent = "price:" + pro.price;
        img.src = pro.images[0];
        div.append(img);
        div.append(p);
        div.append(p1);
        cont.append(div);
        
      });
    });
}




window.addEventListener("load", () => {
  fetchData();

});


let sheetli = document.querySelectorAll(".m1");
let sheet = document.querySelectorAll(".sheet1");
let div = document.querySelectorAll(".sheet1 div");
let mmm = document.querySelectorAll(".section-right");
let map = document.querySelector(".map img");
let mapdawn=document.querySelector(".map-dawn");

sheetli.forEach(function (ele, index) {
  ele.onclick = function () {
    sheetli.forEach(function (ele) {});
    sheet[index].style.display = "flex";
  };
});

div.forEach(function (ele, index) {
  ele.onclick = function () {
    sheet[index].style.display = "none";
  };
});
sheet.forEach(function (ele, index) {
  ele.onmouseleave = function () {
    sheet[index].style.display = "none";
  };
});

let aftr = document.querySelectorAll(".aftr");
let sectionleft =document.querySelectorAll(".section-left")


mmm.forEach(function (ele,index) {

 
  ele.onclick = function () {
sectionleft.forEach(function(ele){
ele.style.display="none";

})
sectionleft[index].style.display= "flex";


    mmm.forEach(function (ele) {
      ele.classList.remove("active");

      aftr.forEach(function (gg) {
        gg.style.display = "none";
      });

    });

    this.classList.add("active");
    this.lastElementChild.style.display = "block";
  };
});

map.onclick=function(){
  mapdawn.classList.toggle("map-dawn-active")
  map.classList.toggle("img2")
}



let add =document.querySelectorAll(".add img")
let button = document.querySelector(".boto");
let dd = document.querySelector(".add")






let namp = 0;
  setInterval(function(){


     
    
   
slider()
namp++


},6000);


function slider(){
  if(namp===add.length){
  
    namp=0;
  }
  if(add[add.length-3].classList.contains("imgadd0")){
    add[add.length-1].classList.add("img123")
    add[add.length-1].classList.remove("imgadd0","imgadd1")
  }
  
  if(namp===add.length-1){
   
    add[add.length-1].classList.add("imgadd1")
    add[add.length-1].classList.remove("imgadd0")
    add[add.length-2].classList.add("img123")
    add[0].classList.add("imgadd0")
   add[add.length-2].classList.remove("imgadd0","imgadd1")

  }
 
if(add[namp].classList.contains("imgadd0")===true ){
    
  add[namp].classList.add("imgadd1")
    add[namp].nextElementSibling.classList.add("imgadd0")
}



add[namp].classList.remove("imgadd0")

if(add[namp+1]!==undefined){

if(add[namp+1].classList.contains("imgadd0")===true&& add[namp-1]!==undefined){
 

  add[namp-1].classList.add("img123")

  add[namp-1].classList.remove("imgadd0","imgadd1")
}
    }
   

}




//##################login#########


let contLogin=document.querySelector(".contenr-login")
let login=document.querySelector(".login")
let login0=document.querySelector(".login0")
let ext=document.querySelector(".ext")
login0.onclick = function(){
  contLogin.style.display = "block"
login.style.display =  "flex"
}
ext.onclick = function(){
  contLogin.style.display = "none"
login.style.display =  "none"
}
contLogin.onclick = function(){
  contLogin.style.display = "none"
login.style.display =  "none"
}






let searsh = document.querySelector(".in input")
let searshbottun=document.querySelector(".in button")


searsh.onfocus=function(){

}


searsh.onchange=function(){
 
}

searsh.onkeyup=function(){
if(searsh.value!==""){
  
  let fltierdata=productsaerch.filter(function(ele){
    return ele.startsWith(searsh.value)
    
  });
 
  fltierdata.forEach(function(ele){
let sarced =document.querySelector(".in-serch-dropmenu")

    let drobmenu= document.createElement("div")
    drobmenu.className="itmes"
    let dropmenua=document.createElement("a")


    dropmenua.textContent=ele
drobmenu.append(dropmenua)
    sarced.append(drobmenu)
  })
  console.log(fltierdata)
}
if(searsh.value===""){
  let sarced55 =document.querySelectorAll(".itmes")
  console.log(sarced55)
  sarced55.forEach(function(ele){
  ele.remove()
  })
  }

}




