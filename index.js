var random1 = Math.floor(Math.random()*3)+1;

randomImage1="./images/Pic"+random1+".jpg";

document.querySelector(".img1").setAttribute("src",randomImage1);

var random2 = Math.floor(Math.random()*3) + 1;

randomImage2="./images/Pic"+random2+".jpg";

document.querySelector(".img2").setAttribute("src",randomImage2);

if(random1===1){
    if(random2===1){
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    } else if(random2===2){
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    } else{
        document.querySelector("h1").innerHTML="🚩 Player 1 wins";
    }
} else if(random1===2){
    if(random2===1){
        document.querySelector("h1").innerHTML=" Player 1 wins 🚩 ";
    } else if(random2===2){
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    } else{
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    }
}else{
    if(random2===1){
        document.querySelector("h1").innerHTML="🚩 Player 2 wins";
    } else if(random2===2){
        document.querySelector("h1").innerHTML="Player 1 wins 🚩";
    } else{
        document.querySelector("h1").innerHTML="It's a tie bitch!";
    }
}
