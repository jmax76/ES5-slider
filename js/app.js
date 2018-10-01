const img_con = document.getElementById('img-con'); 
const next = document.getElementById('next');
const prev = document.getElementById('prev');

 const images = ['slide2.jpg', 'slide3.jpg','slide1.jpg'];

 let i = images.length;



function plus(){
    i = (i<images.length) ?(i= i+1):(i=1);
    img_con.innerHTML = "<img class='img' src=img/"+images[i-1]+">";
}
next.addEventListener('click', plus);

function less(){
    i = (i<images.length) ?(i= i+1):(i=1);
    img_con.innerHTML = "<img class='img' src=img/"+images[i-1]+">";
}
prev.addEventListener('click', less);
  