//getting all required elements

const start = document.querySelector(".start");
const square = document.querySelector(".square");
const exit_btn = square.querySelector(".btn .quit");
const continue_btn = square.querySelector(".btn .again");
const quiz = document.querySelector(".qcube");
const results = document.querySelector(".results");
const questions = document.querySelector(".questList");
const timego = document.querySelector("header .timego")
const timeWord = document.querySelector(".time .ttext ")
const timeMany = quiz_box.querySelector(".time .tsec");



//If Start Quiz Button clicked

start.onclick = ()=>{
    square.classList.add("activeInfo"); //show the info box
}

//If exit button clicked
exit_btn.onclick = ()=>{
    square.classList.remove("activeInfo"); //hide the info box
}

//If continue button clicked
continue_btn.onclick = ()=>{
    square.classList.remove("activeInfo"); //hide the info box
    quiz.classList.add("activeQuiz"); // show the quiz box
   showQuestions(0);
   queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

let timeVale = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const 

restart_quiz.onclick = ()=> {
    result_box.classList.remove("activeResult");
        quiz_box.classList.add("activeQuiz")
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
}

//if next button clicked
next_btn.onclick = ()=>{
   if(que_count < questions.length - 1){ 
       que_count++;
       que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
} else{
    console.log("Questions completed");
    showResultsbox;

}
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +  '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelector(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAtrribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
    console.log("Answer is correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
}else{
    answer.classList.add("incorrect");
    console.log("Answer is incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    //if anser is incorrect then automatically selecte correct answer
    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAtrribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
    }
}
//once user selected disabled all options
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
    
    }
    next_btn.style = "block";
}

function showResultsbox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");// hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>'
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1) {
        let scoreTag = '<span>and nice, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>'
        scoreText.innerHTML = scoreTag;
    }
    else{   
        let scoreTag = '<span>and sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>'
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addzero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time > 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        startertimeLine.style.width = time + "px";
        if(time > 549){
           clearInterval(counterLine);
        }
    }
}

function queCounter(index){
   que_Count = quiz_box.querySelector(".total_que");
  let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    que_count.innerHTML = totalQuesCountTag;
}