// Your code goes here

    // for (var i = 0 ; i < array.length; i++) {
    //   
    //  }

//mouseenter    

const titleHover = document.querySelector('h1');

titleHover.addEventListener('mouseenter', function(event) {
    event.target.style.color='blue';

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
;

// wheel

const busImg = document.querySelector('img');

function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 1.5;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.1, scale), 1.5);
  
    // Apply scale 
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

busImg.addEventListener('wheel', zoom);

//drag & drop

const dragWelcome = document.querySelector('h2');

dragWelcome.addEventListener('drag', function(event) {
    console.log("Don't Drag Me!");
});


//click
signUpBtns = document.querySelector('.btn');

signUpBtns.addEventListener('click', function(event) {
    console.log("Sucessfully Signed Up!");
});

//dblclick
signUpBtns.addEventListener('dblclick', function(event) {
    event.target.style.color='red';

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
;

//mouseover
const newNav = document.getElementsByTagName('a');

// const newNavTest = Array.from(newNav);

if (newNav) {
    for (var i=0; i <newNav.length; i++) {
        newNav[i].addEventListener('mouseover', function(event) {
            event.target.style.color='blue';

            setTimeout(function() {
                event.target.style.color = "";
              }, 500);
            }, false);
        }};



const otherImgs = document.getElementsByClassName('img-content');

if (otherImgs) {
    for (var i=0; i <otherImgs.length; i++) {
        otherImgs[i].addEventListener('mouseover', function(event) {
            event.target.style.color='blue';

            setTimeout(function() {
                event.target.style.color = "";
              }, 500);
            }, false);
        }};