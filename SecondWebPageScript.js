// this code is removing level after some time

let container44 = document.getElementById("container4");
let bombbutton = document.getElementById("bomb");
let bombrabbit = document.getElementById("buttonfireimg");
let t = 25;

let heading = document.getElementById("level");
setTimeout(()=> {heading.style.visibility = 'hidden'} ,1000)

let smalllevel = document.getElementById("smalllevel")
// logic for rabbits

//for button1 image
let rabbitid = document.getElementById("rabbitbutton");
let rabbit1img = document.createElement("img");

//for button2 image
let rabbitid2 = document.getElementById("rabbitbutton2");
let rabbit1img2 = document.createElement("img");
rabbitid2.appendChild(rabbit1img2);
rabbit1img2.id = 'rabimg2';
// rabbitid2.style.position = 'absolute';


//for button3 image
let rabbitid3 = document.getElementById("rabbitbutton3");
let rabbit1img3 = document.createElement("img");
rabbitid3.appendChild(rabbit1img3);
rabbit1img3.id = 'rabimg3';
// rabbitid3.style.position = 'absolute';

rabbit1img.src = "./bunnyy1.png";
rabbit1img.id = 'rabbit1imgcss';
rabbitid.appendChild(rabbit1img);
rabbitid.style.visibility = 'hidden';

//level 1 position variable
let position = -250 ;
let position1 = 0;
let position2 = 10;

//level 2 position variable
let position3 = 0;
let positionnn3 = 200;
let position4 = -22;
let positionnn4 = 40;
let position5 = -300;
let positionnn5 = 80;

//level 3rd position variables
let position6 = 40;
let positionnn6 = 60;
let positionthird6 = 80;
let position7 = -300;
let positionnn7 = -10;
let positionthird7 = 90;
let position8 = -240;
let positionnn8 = -50;
let positionthird8 = 40;

//level 4th

let posi = 40;
let posi6 = 60;
let posithird6 = 80;

let posi9 = -300;
let posi99 = -10;
let posithird9 = 100;

let posi10 = -240;
let posi100 = -40;
let posithird10 = 50;

let countimage = 0;
let countimage2 = 0 ;
let count = 0;
let level = 1;

// here access the bomb image and bombrabit button
//*********************************************** */
// let bombrabbit = document.getElementById("buttonfireimg");
// bombrabbit.src = "bunnyy2.png";

// let bombimg = document.getElementById("bombimg");
// bombimg.src = "bombgola2.jpg";
//********************************************** */

//score heading

let scoreid = document.getElementById("totalscore");

function scorechanges(){
    scoreid.innerHTML = 'Score:'+count;
    console.log("scores");
}


function visible(){
    rabbitid.style.position = 'absolute';
    position = position + 280 ;
    rabbitid.style.left = position + 'px';
    rabbitid.style.visibility = 'visible';
    console.log("position of first interval "+position);
    
}

function moveElement(){
    setTimeout(visible,600)
    rabbitid.style.visibility = 'hidden';

}
 // change image here___________________________________
function changeImage(){
    rabbit1img.src = "./bunnyy1.png";
    rabbit1img.style.visibility = 'visible';
    console.log("image change successfully");
    scorechanges();
}

if(level===1){
const image = rabbitid.querySelector('img');

image.addEventListener('click',function(){
    if(countimage == 0){
        rabbit1img.src = "./bunnyred1.png";
        setTimeout(changeImage,800);
        console.log("onclick called " + countimage );
    }
    count = count + 1;
});
}
//________________________________________________________


let interval1 = setInterval(moveElement, 1900);
let interval2;
let interval3;

setTimeout(function(){
    // clearInterval(interval1);
    console.log("interval 1 completed");
    rabbitid.style.visibility = 'hidden';
    
    console.log("interval 1 completed");
    // setTimeout(Interval2fun,500);
    clearInterval(interval1);
    setTimeout(functioncall(),700);
},7500);

// ********************************************************interval 2
function bombhidden(){
    bombrabbit.style.visibility = 'hidden';
    bombing.style.visibility = 'hidden';
    clearInterval(bombinter);

}

function bombinterval(){
    t = t +5;
    container44.style.top = t + '%';
}

function bombfall(){
    // let bombrabbit = document.getElementById("buttonfireimg");
    bombrabbit.src = "bunnyy2.png";
    
    // let container44 = document.getElementById("container4");
    // let bombbutton = document.getElementById("bomb");
    bombbutton.style.position = "absolute";

    let bombimg = document.getElementById("bombimg");
    bombimg.src = "bombgola3.png";
    console.log("bomb is here");
    let bombinter = setInterval(bombinterval,500);
    setTimeout(bombhidden,500);

}

function functioncall(){
    function visible1(){
        position1 = position1 + 280 ;
        rabbitid.style.left = position1 + 'px';
        rabbitid.style.visibility = 'visible';
        console.log("interval 2");
    }
    
    function moveElement1(){
        rabbit1img.src = "./bunnyy3.png";
        setTimeout(visible1,600);
        rabbitid.style.visibility = 'hidden';
    }
    

    interval2 = setInterval(moveElement1,2100);
    // setTimeout(bombfall,500);
    bombfall();

    setTimeout(function(){
        console.log("interval 2 completed");
        rabbitid.style.visibility = 'hidden';
        console.log("interval 2 completed");
        
        clearInterval(interval2);

        setTimeout(functioncall2,100);
    },7500);
}

//*****************************************************interval3

function functioncall2(){

    function visible2(){

        position2 = position2 + 200;
        rabbitid.style.left = position2 + 'px';
        rabbitid.style.visibility = 'visible';
    }

    function moveElement2(){
        rabbit1img.src = "./bunnyy2.png";
        setTimeout(visible2,1000);
        rabbitid.style.visibility = 'hidden';
    }

    interval3 = setInterval(moveElement2,2100);

    setTimeout(function(){
        rabbitid.style.visibility = 'hidden';
        console.log("interval 3 completed");
        
        clearInterval(interval3);

        setTimeout(functioncall3,100);

    },7500);
}

// Level 2 function call______________________________________

//image change for level 2____________________________________

function changeImage2(){
    rabbit1img2.src =  "./bunnyy3.png";
    rabbit1img.style.visibility = 'visible';
    console.log("image change successfully for level2");
    scorechanges();
}
const secondImage = rabbitid2.addEventListener("click", () => {
        rabbit1img2.src =  "./bunnyred3.png";
        setTimeout(changeImage2,400);
        console.log("onclick called countimage2 " + countimage );
        scorechanges();
    count = count + 1;
});


// function changeImage2(){
//     rabbit1img.src = "./bunnyy2.png";
//     rabbit1img2.src =  "./bunnyy3.png";
//     rabbit1img.style.visibility = 'visible';
//     console.log("image change successfully for level2");
//     scorechanges();
// }

// const allimages = rabbitid.querySelectorAll('img');

// if(level ===2){
// allimages.forEach((allimg)=>{
//     allimg.addEventListener("click", () => {
//         if(countimage2 == 0){
//             rabbit1img.src = "./bunnyred2.png";
//             rabbit1img2.src =  "./bunnyred3.png";
//             setTimeout(changeImage2,500);
//             console.log("onclick called " + countimage );
//         }
//         count = count + 1;
//     })
// })
// }
//________________________________________________________________
    
function functioncall3(){
    console.log("new level start");

    level = level + 1;

    let heading2 = document.getElementById("level2");

    smalllevel.innerHTML = "LEVEL:"+level ;

    heading.style.visibility = 'visible';
    heading.innerHTML = "LEVEL : "+level;

    setTimeout(()=> {
        console.log("setTimeout is running");
        heading.style.visibility = 'hidden';
    } ,3000)

    functioncall4();
}

function functioncall4(){

    function visible3(){
        position3 = position3 + 200;
        positionnn3 = positionnn3 + 200;

        rabbitid.style.left = position3 + 'px';
        rabbitid2.style.left = position3 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
    }

    function moveElement3(){
        rabbit1img.src = "./bunnyy2.png";
        rabbit1img2.src = "./bunnyy3.png"

        setTimeout(visible3,2000);

        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
    }

    let interval4 = setInterval(moveElement3,2800);

    setTimeout(function(){
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        console.log("interval 4 completed");        
        clearInterval(interval4);
        setTimeout(functioncall5,100);
    },7500);
}

function functioncall5(){

    function visible3(){
        position4 = position4 + 200;
        positionnn4 = positionnn4 + 200;

        rabbitid.style.left = position4 + 'px';
        rabbitid2.style.left = positionnn4 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
    }
    function moveElement4(){
        rabbit1img.src = "./bunnyy1.png";
        rabbit1img2.src = "./bunnyy5.png"
        setTimeout(visible3,1000);
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
    }

    let interval5 = setInterval(moveElement4,2000);

    setTimeout(function(){           
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        console.log("interval 5 completed");        
        clearInterval(interval5);
        setTimeout(functioncall6,100);
    },7500);
}

function functioncall6(){

    function visible4(){
        position5 = position5 + 200;
        positionnn5 = positionnn5 + 200;

        rabbitid.style.left = position4 + 'px';
        rabbitid2.style.left = positionnn4 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
    }

    function moveElement5(){
        rabbit1img.src = "./bunnyy3.png";
        rabbit1img2.src = "./bunnyy4.png";
        setTimeout(visible4,1000);
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
    }

    let interval6 = setInterval(moveElement5,2000);

    setTimeout(function(){           
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        console.log("interval 6 completed");        
        clearInterval(interval6);
        setTimeout(functioncall7,100);
    },7500);
}

// i did changes in queryselectorall   
//*********************************************************** */
// LEVEL 3______________________________________________________

//change image for level third

function changeImage3(){
    rabbit1img3.src =  "./bunnyy3.png";
    rabbit1img.style.visibility = 'visible';
    console.log("image change successfully for level2");
}
const thirdImage = rabbitid3.addEventListener("click", () => {
        rabbit1img3.src =  "./bunnyred3.png";
        setTimeout(changeImage3,400);
        console.log("onclick called countimage3");
        scorechanges();
        count = count + 1;
});

function functioncall7(){
    console.log("new level start");

    level = level + 1;

    let heading2 = document.getElementById("level2");

    smalllevel.innerHTML = "LEVEL:"+level ;

    heading.style.visibility = 'visible';
    heading.innerHTML = "LEVEL : "+level;

    setTimeout(()=> {
        console.log("setTimeout is running");
        heading.style.visibility = 'hidden';
    } ,3000)

    functioncall8();
}

function functioncall8(){

    function visible8(){
        position6 = position6 + 200;
        positionnn6 = positionnn6 + 200;
        positionthird6 = positionthird6 +100;

        rabbitid.style.left = position6 + 'px';
        rabbitid2.style.left = positionnn6 + 'px';
        rabbitid3.style.left = positionthird6 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
        rabbitid3.style.visibility = 'visible';
    }

    function moveElement6(){
        rabbit1img.src = "./bunnyy4.png";
        rabbit1img2.src = "./bunnyy5.png";
        rabbit1img3.src = "./bunnyy2.png";

        setTimeout(visible8,1000);
        
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
    }

    let interval7 = setInterval(moveElement6,2000);

    setTimeout(function(){
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
        console.log("interval 7 completed");        
        clearInterval(interval7);
        setTimeout(functioncall9,100);
    },7500);
}

function functioncall9(){

    function visible9(){
        position7 = position7 + 200;
        positionnn7 = positionnn7 + 200;
        positionthird7 = positionthird7 + 200;

        rabbitid.style.left = position7 + 'px';
        rabbitid2.style.left = positionnn7 + 'px';
        rabbitid3.style.left = positionthird7 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
        rabbitid3.style.visibility = 'visible';
    }
    function moveElement9(){
        rabbit1img.src = "./bunnyy2.png";
        rabbit1img2.src = "./bunnyy3.png"
        rabbit1img3.src = "./bunnyy1.png";
        setTimeout(visible9,1000);
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
    }

    let interval8 = setInterval(moveElement9,2000);

    setTimeout(function(){           
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
        console.log("interval 8 completed");        
        clearInterval(interval8);
        setTimeout(functioncall10,100);
    },7500);
}

function functioncall10(){

    function visible10(){
        position8 = position8 + 200;
        positionnn8 = positionnn8 + 200;
        positionthird8 = positionthird8 + 200;

        rabbitid.style.left = position8 + 'px';
        rabbitid2.style.left = positionnn8 + 'px';
        rabbitid3.style.left = positionthird8 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
        rabbitid3.style.visibility = 'visible';
    }
    function moveElement10(){
        rabbit1img.src = "./bunnyy3.png";
        rabbit1img2.src = "./bunnyy5.png"
        rabbit1img3.src = "./bunnyy4.png";
        setTimeout(visible10,1000);
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
    }

    let interval10 = setInterval(moveElement10,2000);

    setTimeout(function(){           
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
        console.log("interval 10 completed");        
        clearInterval(interval10);
        setTimeout(functioncall21,100);
        // setTimeout(functioncallwin,100)
    },7500);
}

//Level 4 is here
//*************************************** */

function functioncall21(){
    console.log("new 4th has started");

    level = level + 1;

    let heading2 = document.getElementById("level2");

    smalllevel.innerHTML = "LEVEL:"+level ;

    heading.style.visibility = 'visible';
    heading.innerHTML = "LEVEL : "+level;

    setTimeout(()=> {
        console.log("setTimeout is running");
        heading.style.visibility = 'hidden';
    } ,3000)

    functioncall22();
}
function functioncall22(){
    function visible22(){
        posi = posi + 200;
        posi6 = posi6 + 200;
        posithird6 = posithird6 +100;

        rabbitid.style.left = posi + 'px';
        rabbitid2.style.left = posi6 + 'px';
        rabbitid3.style.left = posithird6 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
        rabbitid3.style.visibility = 'visible';
    }

    function moveElement22(){
        rabbit1img.src = "./bunnyy4.png";
        rabbit1img2.src = "./bunnyy5.png";
        rabbit1img3.src = "./bunnyy2.png";

        setTimeout(visible22,1000);

        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
    }
    let interval22 = setInterval(moveElement22,2000);

    setTimeout(function(){
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
        console.log("interval 22 completed");        
        clearInterval(interval22);
        setTimeout(functioncall23,100);
    },7500);
}

function functioncall23(){
    function visible23(){
        posi10 = posi10 + 200;
        posi100 = posi100 + 200;
        posithird10 = posithird10 + 200;

        rabbitid.style.left = posi10 + 'px';
        rabbitid2.style.left = posi100 + 'px';
        rabbitid3.style.left = posithird10 + 'px';

        rabbitid.style.visibility = 'visible';
        rabbitid2.style.visibility = 'visible';
        rabbitid3.style.visibility = 'visible';
    }
    function moveElement23(){
        rabbit1img.src = "./bunnyy3.png";
        rabbit1img2.src = "./bunnyy5.png"
        rabbit1img3.src = "./bunnyy4.png";
        setTimeout(visible23,1000);
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
    }

    let interval23 = setInterval(moveElement23,2000);

    setTimeout(function(){           
        rabbitid.style.visibility = 'hidden';
        rabbitid2.style.visibility = 'hidden';
        rabbitid3.style.visibility = 'hidden';
        console.log("interval 10 completed");        
        clearInterval(interval23);
        setTimeout(functioncallwin,100)
    },7500);
}


// this is wining process
//***************************************************/

function functioncallwin(){
    if(count >= 15){

    heading.style.visibility = 'visible';
    heading.innerHTML = "You have won the Game";

    setTimeout(()=> {
        console.log("setTimeout is running");
        heading.style.visibility = 'hidden';
    } ,3000)
    }
    else{


    heading.style.visibility = 'visible';
    heading.innerHTML = "Game Lost";

    setTimeout(()=> {
        console.log("setTimeout is running");
        heading.style.visibility = 'hidden';
    } ,3000)
    }
}




