//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가<유저번호 down!!
//랜덤번호>유저번호 up!
//reset 버튼을 누르면 게임 시작
//5번의 기회를 다쓰면 게임 끝(버튼 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지않는다
//유저가 이미입력한 숫자를 또입력하면 알려준다, 기회를 깍지않는다




let computerNum = 0;
let playButton = document.getElementById("playbutton");
let userInput = document.getElementById("user-input");
let resultArea =document.getElementById("resultArea");
let resetbutttom =document.getElementById("resetbutton");
let chances = 5;
let gameOver =false;
let chanceArea=document.getElementById("chanceArea");
let history=[]


playButton.addEventListener("click", play);
resetbutttom.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = ""
})

function pickRandomNum(){
    //Math.floor 소수점 버리는 함수
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답",computerNum)
}

function play(){
    let userValue = userInput.value
    
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다시 입력해주세요"
        return;
    }
    chances--;
    chanceArea.textContent=`남은기회: ${chances}번`;
    console.log(chances);


    if (userValue < computerNum){
        resultArea.textContent = "UP!"
    }else if(userValue > computerNum){
        resultArea.textContent = "down!"
    }else{
        resultArea.textContent = "맞춤!"
        playButton.disabled = true;
    }
   
    history.push(userValue)
     
    console.log(history);
    if(chances < 1){
        gameOver = true
    }
    
    if(gameOver == true){
        playButton.disabled = true
    }
}



function reset(){
  //user input 깨끗하게 정리
  userInput.value = ""
  //새로운번호 생성
  pickRandomNum();
  resultArea.textContent="결과가 나온다"
  playButton.disabled = false;
  chances = 5;
}
pickRandomNum();