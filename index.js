


//api


async function mmm(){
    let data = await fetch("https://fakestoreapi.com/products")
    let data1 =await data.json()
    console.log(data1)
    for(let i=0 ;i<= data1.length;i++ ){
let div = document.createElement("div")
let img = document.createElement("img")
 img.setAttribute("src", data1[i].image)
let p= document.createElement("p")
let p1= document.createElement("p")
p.textContent=data1[i].title
p1.textContent= "price:"+data1[i].price

div.append(img)
div.append(p)
div.append(p1)
cont.append(div)
    }
}

let cont = document.querySelector(".cont")

 
mmm()



let navbottom =document.querySelector(".nav-section-botom")

let l1 = document.querySelector(".l1");
let d1 = document.querySelector(".d1");
let d4_2=document.querySelector(".d4_2");
let d4_3=document.querySelector(".d4_3");
let div1=document.querySelectorAll(".d4 div");
let d4_1=document.querySelector(".d4_1");
let d4_4=document.querySelector(".d4_4");
let d4_5=document.querySelector(".d4_5");
let  body =document.querySelector("body")
let d4_1_close=document.querySelector(".d4_1 div");
let d4_2_close=document.querySelector(".d4_2 div");
let d4_3_close=document.querySelector(".d4_3 div");
let d4_4_close=document.querySelector(".d4_4 div");
let d4_5_close=document.querySelector(".d4_5 div");
let l2 = document.querySelector(".l2");
let d2 = document.querySelector(".d2");
let l3 = document.querySelector(".l3");
let d3 = document.querySelector(".d3");
let l4 = document.querySelector(".l4");
let d4 = document.querySelector(".d4");
//  nav bottom    drob menu l1

l1.onmouseover = function(){
    d1.classList.add("activ");
    
}    
l2.onmouseover = function(){
    d2.classList.add("activ");
    
}    
l3.onmouseover = function(){
    d3.classList.add("activ");
    
}    
l4.onmouseover = function(){
    d4.classList.add("activ");
    
}    
div1[0].onclick = function(){
    d4_1.classList.toggle("activ1"); 
    d4.classList.remove("activ");
}
d4_1_close.onclick = function(){
    d4_1.classList.remove("activ1"); 
    d4.classList.add("activ");
}
d4_2_close.onclick = function(){
    d4_2.classList.remove("activ1"); 
    d4.classList.add("activ");
}
d4_3_close.onclick = function(){
    d4_3.classList.remove("activ1"); 
    d4.classList.add("activ");
}
d4_4_close.onclick = function(){
    d4_4.classList.remove("activ1"); 
    d4.classList.add("activ");
}
d4_5_close.onclick = function(){
    d4_5.classList.remove("activ1"); 
    d4.classList.add("activ");
}

div1[1].onclick = function(){
    d4_2.classList.toggle("activ1"); 
    d4.classList.remove("activ");
}
div1[2].onclick = function(){
    d4_3.classList.toggle("activ1"); 
    d4.classList.remove("activ");
}
div1[3].onclick = function(){
    d4_4.classList.toggle("activ1"); 
    d4.classList.remove("activ");
}

div1[4].onclick = function(){
    d4_5.classList.toggle("activ1"); 
    d4.classList.remove("activ");
}



navbottom.onmouseout = function(){
    
    d1.classList.remove("activ");
    d2.classList.remove("activ");
    d3.classList.remove("activ");
    d4.classList.remove("activ");
    
}





