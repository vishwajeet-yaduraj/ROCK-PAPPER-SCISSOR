
$("button").on("click", function(event){

var random1 = Math.floor(Math.random()*3)+1;

randomImage1="./images/Pic"+random1+".jpg";

document.querySelector(".img1").setAttribute("src",randomImage1);
    var class_Name = parseInt(event.target.className) ;
    randomImage2="./images/Pic"+class_Name+".jpg";
    document.querySelector(".img2").setAttribute("src",randomImage2);

if(random1===1){
    if(class_Name===1){
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    } else if(class_Name===2){
        document.querySelector("h1").innerHTML="You win 🚩";
    } else{
        document.querySelector("h1").innerHTML="🚩 Computer wins";
    }
} else if(random1===2){
    if(class_Name===1){
        document.querySelector("h1").innerHTML="🚩 Computer wins ";
    } else if(class_Name===2){
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    } else{
        document.querySelector("h1").innerHTML="You win 🚩";
    }
}else{
    if(class_Name===1){
        document.querySelector("h1").innerHTML="You win 🚩";
    } else if(class_Name===2){
        document.querySelector("h1").innerHTML="🚩 Computer wins";
    } else{
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    }
}
});






































// var random1 = Math.floor(Math.random()*3)+1;

// randomImage1="./images/Pic"+random1+".jpg";

// document.querySelector(".img1").setAttribute("src",randomImage1);

// var class_Name = Math.floor(Math.random()*3) + 1;

// randomImage2="./images/Pic"+class_Name+".jpg";

// document.querySelector(".img2").setAttribute("src",className);

// if(random1===1){
//     if(class_Name===1){
//         document.querySelector("h1").innerHTML="It's a tie bitch!";
//     } else if(class_Name===2){
//         document.querySelector("h1").innerHTML="Player 2 wins 🚩";
//     } else{
//         document.querySelector("h1").innerHTML="🚩 Player 1 wins";
//     }
// } else if(random1===2){
//     if(class_Name===1){
//         document.querySelector("h1").innerHTML=" Player 1 wins 🚩 ";
//     } else if(class_Name===2){
//         document.querySelector("h1").innerHTML="It's a tie bitch!";
//     } else{
//         document.querySelector("h1").innerHTML="Player 2 wins 🚩";
//     }
// }else{
//     if(class_Name===1){
//         document.querySelector("h1").innerHTML="🚩 Player 2 wins";
//     } else if(class_Name===2){
//         document.querySelector("h1").innerHTML="Player 1 wins 🚩";
//     } else{
//         document.querySelector("h1").innerHTML="It's a tie bitch!";
//     }
// }
