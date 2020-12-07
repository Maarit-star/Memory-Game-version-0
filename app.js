// SELECTORS 
const shuffleButton = document.getElementById("shuffleButton");
let inputAttempts = document.getElementById("inputAttempts");
let inputScores = document.getElementById("inputScores");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");

const revSide1 = document.getElementById("reverseSide1");
const revSide2 = document.getElementById("reverseSide2");
const revSide3 = document.getElementById("reverseSide3");
const revSide4 = document.getElementById("reverseSide4");
const revSide5 = document.getElementById("reverseSide5");
const revSide6 = document.getElementById("reverseSide6");
const revSide7 = document.getElementById("reverseSide7");
const revSide8 = document.getElementById("reverseSide8");
const revSide9 = document.getElementById("reverseSide9");
const revSide10 = document.getElementById("reverseSide10");


// FEW VARIABLES FOR TO THE BEGINNING
let count = 0;
let scores = 0;
let failedAttempts = 0;

let alpaca = 0;
let jellyfish = 0;
let redpanda = 0;
let chameleon = 0;
let penguins = 0;


// EVENT LISTENERS
shuffleButton.addEventListener('click', shuffle);
revSide1.addEventListener('click', toggle);
revSide2.addEventListener('click', toggle2);
revSide3.addEventListener('click', toggle3);
revSide4.addEventListener('click', toggle4);
revSide5.addEventListener('click', toggle5);
revSide6.addEventListener('click', toggle6);
revSide7.addEventListener('click', toggle7);
revSide8.addEventListener('click', toggle8);
revSide9.addEventListener('click', toggle9);
revSide10.addEventListener('click', toggle10);


// FUNCTIONS

function shuffle() {
    let gallery = document.getElementById("gallery");
    let elementsArray = Array.prototype.slice.call(gallery.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
        gallery.removeChild(element);
    })
    shuffleArray(elementsArray);

    elementsArray.forEach(function(element){
        gallery.appendChild(element);
    })
}

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// functions for callback functions
function notPair() {
    alert("Not a pair, sorry!");
}
function pair() {
    alert("It's a pair!");
}

 // callback functions to hide images if pair is not a match
 // and also to reset the counters
 function addImageHidden() {
    img1.classList.add("imageHidden");
    img1.classList.remove("imageVisible");
    alpaca = 0;
    count = 0;
    img2.classList.add("imageHidden");
    img2.classList.remove("imageVisible");
    jellyfish = 0;
    count = 0;
    img3.classList.add("imageHidden");
    img3.classList.remove("imageVisible");
    redpanda = 0;
    count = 0;
    img4.classList.add("imageHidden");
    img4.classList.remove("imageVisible");
    chameleon = 0;
    count = 0;
    img5.classList.add("imageHidden");
    img5.classList.remove("imageVisible");
    penguins = 0;
    count = 0;
    img6.classList.add("imageHidden");
    img6.classList.remove("imageVisible");
    alpaca = 0;
    count = 0;
    img7.classList.add("imageHidden");
    img7.classList.remove("imageVisible");
    jellyfish = 0;
    count = 0;
    img8.classList.add("imageHidden");
    img8.classList.remove("imageVisible");
    redpanda = 0;
    count = 0;
    img9.classList.add("imageHidden");
    img9.classList.remove("imageVisible");
    chameleon = 0;
    count = 0;
    img10.classList.add("imageHidden");
    img10.classList.remove("imageVisible");
    penguins = 0;
    count = 0;
 }

   function toggle() {
    count++;
    alpaca++; 

    // testausta varten 
    /*console.log(count + " count");
    console.log(alpaca + " alpaca");*/

    img1.classList.add("imageVisible");
    img1.classList.remove("imageHidden");

    if(count==2 || count==4 || count==6 || count==8 || count==10){
        if(alpaca==2){
        setTimeout(pair,100);
        scores++;
        inputScores.value = scores;
        }else{
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1000);
        failedAttempts++;
        inputAttempts.value = failedAttempts;
        }
        }
      } 
      
    function toggle2() {
    count++;
    jellyfish++;
    if(img2.className==="imageHidden"){
        img2.classList.add("imageVisible");
        img2.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(jellyfish==2){
        setTimeout(pair,100);
        scores++;
        inputScores.value = scores;
      }
      if(jellyfish!=2){
        setTimeout(notPair,100);
        setTimeout(addImageHidden, 1500);
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
}
 function toggle3() {
    count++;
    redpanda++;
    console.log(redpanda + " redpanda");
    if(img3.className==="imageHidden"){
        img3.classList.add("imageVisible");
        img3.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(redpanda==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(redpanda!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
  function toggle4() {
    count++;
    chameleon++;
    console.log(chameleon + " chameleon");
    if(img4.className==="imageHidden"){
        img4.classList.add("imageVisible");
        img4.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(chameleon==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(chameleon!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
   function toggle5() {
    count++;
    penguins++;
    console.log(penguins + " penguins");
    if(img5.className==="imageHidden"){
        img5.classList.add("imageVisible");
        img5.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count== 8 || count==10){
      if(penguins==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(penguins!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
    function toggle6() {
    count++;
    alpaca++;
    console.log(alpaca + " alpaca");
    if(img6.className==="imageHidden"){
        img6.classList.add("imageVisible");
        img6.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(alpaca==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }if(alpaca!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
    function toggle7() {
    count++;
    jellyfish++;
    console.log(jellyfish + " jellyfish");
    if(img7.className==="imageHidden"){
        img7.classList.add("imageVisible");
        img7.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(jellyfish==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(jellyfish!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
     function toggle8() {
    count++;
    redpanda++;
    console.log(redpanda + " redpanda");
    if(img8.className==="imageHidden"){
        img8.classList.add("imageVisible");
        img8.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(redpanda==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(redpanda!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
    function toggle9() {
    count++;
    chameleon++;
    console.log(chameleon + " chameleon");
    if(img9.className==="imageHidden"){
        img9.classList.add("imageVisible");
        img9.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(chameleon==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(chameleon!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }
     function toggle10() {
    count++;
    penguins++;
    console.log(penguins + " penguins");
    if(img10.className==="imageHidden"){
        img10.classList.add("imageVisible");
        img10.classList.remove("imageHidden");
    }
    if(count==2 || count==4 || count==6 || count==8 || count==10){
      if(penguins==2){
        setTimeout(pair, 100);
        scores++;
        inputScores.value = scores;
      }
      if(penguins!=2){
        setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1500); 
        failedAttempts++;
        inputAttempts.value = failedAttempts;  
      }
    }
  }