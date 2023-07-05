var player1="Player1";       //same class as the one we want to refer
var player2="Player2";

var result = document.querySelector('h1');

var c1=0;
    var c2=0;

    var c11=document.querySelector(".count1");
    var c22=document.querySelector(".count2");

function edit()
   {
    player1=prompt("Change Player 1 Name");
    player2=prompt("Change Player 2 Name");
        
    if(player1.length < 1 || player2.length < 1)
    {
        alert('Please Enter a valid Name');
        return;
    }
    document.querySelector(".P1").innerHTML=player1;
    document.querySelector(".P2").innerHTML=player2;
}

function roll()
{
    var diceNum1=document.querySelector(".img1");
    var diceNum2=document.querySelector(".img2");

    diceNum1.setAttribute("src","./im/diceroll.gif")
    diceNum2.setAttribute("src","./im/diceroll.gif")

    setTimeout(() => {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;//random number generated
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src','./im/dice'+randomNumber1+'.png');
        diceNum2.setAttribute('src','./im/dice'+randomNumber2+'.png');

        if(randomNumber1 === randomNumber2){
            result.innerHTML = "Draw!";
        }
        else if(randomNumber1 < randomNumber2){
            result.innerHTML = (player2 + " Wins!");
            c2+=1;
            c22.innerHTML=c2;
        }
        else{
            result.innerHTML=(player1 + " Wins!");
            c1+=1;
            c11.innerHTML=c1;
        }
    }, 1250);   
}

function fin()
{
    if(c1>c2){
        result.innerHTML = player1 + " Won this round!!";
    }
    else if(c1<c2){
        result.innerHTML = player2 + " Won this round!!";
    }
    else{
        result.innerHTML = "Round ended up in a Draw!";
    }

    c1=0;
    c2=0;

    c11.innerHTML=c1;
    c22.innerHTML=c2;
}