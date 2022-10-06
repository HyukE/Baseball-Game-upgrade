const userText = document.querySelector("#userText");
const startButton = document.querySelector("#startButton");
const reStart = document.querySelector("#reStart");
const showText1 = document.querySelector(".showText1");
const showText2 = document.querySelector(".showText2");
let makeNumber = [0,1,2,3,4,5,6,7,8,9];
let pickNumber =[];
let cou = 10;
let cou2 = 0;
let strike = 0;
let ball = 0;


startButton.addEventListener("click", function(){
    for(let i=0; i<3; i++){
        let pushNumber = makeNumber.splice(Math.floor(Math.random()*(10-i)),1)[0];
       pickNumber.push(pushNumber);
       }
       console.log(pickNumber);
    startButton.style.display = "none";
    userText.style.display = "block";
    showText1.style.display = "block";
    showText2.style.display = "block";
    
    showText2.textContent = '남은기회' +cou+'번'
});

userText.addEventListener("keypress", function(key){
    if(key.keyCode===13){
        if(userText.value.length === 3){
            play();
            userText.value = "";
            strike =0;
            ball = 0;
        }
        else{
            alert("숫자 3개를 입력해주세요.");
        }
    }
});

function play(){
    cou--;
    cou2++;
    if(userText.value === pickNumber.join('')){
        showText1.textContent = "홈런"
        showText2.textContent = cou2+"번만에 성공!"
        gamegg();
    }
    else if(cou===0){
        gamegg();
       showText2.textContent = "남은기회가 없습니다.";
    }   
    else{
        for(let i=0; i<pickNumber.length; i++){
        if(pickNumber[i]===Number(userText.value[i])){
            strike++;
        }
        else if(pickNumber.indexOf(Number(userText.value[i]))>-1){
            ball++;
        }
        }
        showText1.textContent = strike+"스트라이크"+ball+"볼";
        showText2.textContent = "남은기회"+cou+"번";
    }
}
function gamegg(){
    userText.style.display = "none";
    reStart.style.display = "block";
}
reStart.addEventListener("click", function(){
    location.reload();
});