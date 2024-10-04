let boxes=document.querySelectorAll('.box');
let body=document.querySelector('body');

boxes.forEach(function (box) {           // for each loop select all the boxes in loop

    box.addEventListener('click', function(e){

     if(e.target.id==='box1'){
         return  body.style.backgroundColor='grey';
     }
     if(e.target.id==='box2'){
         return  body.style.backgroundColor='blue';
     }
     if(e.target.id==='box3'){
         return  body.style.backgroundColor='brown';
     }
     if(e.target.id==='box4'){
         return  body.style.backgroundColor='yellow';
     }
      
    })
 

    
  })
  
