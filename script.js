var number1 = Math.floor(Math.random()*6)+1;
var number2 = Math.floor(Math.random()*6)+1;

if(number1 > number2){
    document.querySelector('.heading').innerHTML = "Player 1 Won!"
    
}

if(number1 < number2){
    document.querySelector('.heading').innerHTML = "Player 2 Won!"
    
}
if(number1 == number2){
    document.querySelector('.heading').innerHTML = "Draw!"
    
}

if(number1 == 1){
    document.querySelector(".img1").setAttribute('src','./images/1.png');
}
if(number1 == 2){
    document.querySelector(".img1").setAttribute('src','./images/2.png');
}
if(number1 == 3){
    document.querySelector(".img1").setAttribute('src','./images/3.png');
}
if(number1 == 4){
    document.querySelector(".img1").setAttribute('src','./images/4.png');
}
if(number1 == 5){
    document.querySelector(".img1").setAttribute('src','./images/5.png');
}
if(number1 == 6){
    document.querySelector(".img1").setAttribute('src','./images/6.png');
}
if(number2 == 1){
    document.querySelector(".img2").setAttribute('src','./images/1.png');
}
if(number2 == 2){
    document.querySelector(".img2").setAttribute('src','./images/2.png');
}
if(number2 == 3){
    document.querySelector(".img2").setAttribute('src','./images/3.png');
}
if(number2 == 4){
    document.querySelector(".img2").setAttribute('src','./images/4.png');
}
if(number2 == 5){
    document.querySelector(".img2").setAttribute('src','./images/5.png');
}
if(number2 == 6){
    document.querySelector(".img2").setAttribute('src','./images/6.png');
}
