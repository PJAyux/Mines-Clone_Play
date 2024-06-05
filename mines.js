
function backend(n){
var i=0;
var x=26;
while(i<n){
    while(true){
        x=Math.floor(Math.random()*25);
        console.log(x);
        x++;
        var x1=x.toString();
        var bomb=document.getElementById(x1);
        if ( bomb.value==="0"){
            bomb.setAttribute("value","1");
            break;
        }
    }
    i++;
}
}
var count=0;


flashfinal=document.getElementById("lostwin1");
flashfinal.style.visibility='hidden';
function lost(){
    var data1=document.getElementsByClassName("unit");
    for(var i=0;i<data1.length;i++){
        data1[i].style.backgroundColor="red";
    }
    var sound=new Audio("./audio.mp3");
    flashfinal.innerHTML="You Made   "+toflash;
    flashfinal.style.visibility='visible';
    sound.play();
}



function change(id){
    ch=document.getElementById(id);
    ch.style.background="linear-gradient(135deg,#B8860B,#CC9900,#FFDF00,#FFDF00,#CC9900,#B8860B)";
    if (ch.value!=="1"){
    var sound=new Audio("./click.mp3");
    curamount+=amounti*2;
        toflash=curamount.toString();
    toflash="$"+toflash+".00";
        console.log(toflash);
        flashmoney.innerHTML=toflash;
    sound.play();}
    if (ch.value==="1"){
        ch.style.background="red";
        sound=new Audio("./buzzer.mp3");
        sound.play();
        count++;
        curamount-=amounti*2;
        toflash=curamount.toString();
        toflash="$"+toflash+".00";
        console.log(toflash);
        flashmoney.innerHTML=toflash;
       // var chance=document.getElementById("flashchance");
    chancei.innerHTML=chancenum-count;
    // var mines=document.getElementById("flashleft");
    minesi.innerHTML=minenum.value-count;
        if (chancenum-count===0){
            lost();
        }
    }
}
var chancenum;
var minenum;
var amount;
var amounti;
var toflash;
var flashmoney;
var curamount=0;
var chancei=document.getElementById("flashchance");
var minesi=document.getElementById("flashleft");
function setup(){
    minenum=document.getElementById("minesnum");
    console.log(minenum.value);
    backend(minenum.value);
    amount=document.getElementById("amount");
    amounti=amount.value;
    flashmoney=document.getElementById("flashmoney");
    if (minenum.value>5){
    chancei.innerHTML=5;
    chancenum=5;}
    else{
        chancei.innerHTML=minenum.value;
        chancenum=minenum.value;
    }
    minesi.innerHTML=minenum.value;
}