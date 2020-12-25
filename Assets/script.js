

const start = document.querySelector(".start button");
const square = document.querySelector(".square");
const cancel = square.querySelector(".buttons .quit");
const try_again = square.querySelector(".buttons .again");
const quiz = document.querySelector(".quiz");
const results = document.querySelector(".results");
const option_list = document.querySelector(".option_list");
const timego = document.querySelector("header .timego")
const timeText = document.querySelector(".time .ttext ")
const timeCount = document.querySelector(".time .tsec");



//If Start Quiz Button clicked

start.onclick = ()=>{
    square.classList.add("activeInfo"); //show the info box
}

//If exit button clicked
cancel.onclick = ()=>{ 
    square.classList.remove("activeInfo"); //hide the info box
}

//If continue button clicked
try_again.onclick = ()=>{
    square.classList.remove("activeInfo"); //hide the info box
    quiz.classList.add("activeQuiz"); // show the quiz box
   showQuestions(0);
   queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = results.querySelector(".buttons .again");
const quit_quiz = results.querySelector(".buttons .quit");

restart_quiz.onclick = ()=> {
    quiz.classList.add("activeQuiz");
    results.classList.remove("activeResult");
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions (que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next.classList.remove("show");
}

quit.onclick = ()=> {
    window.location.reload();
}

const next = document.querySelector("footer .next");
const bottom_ques_counter = document.querySelector("footer .total_que");

//if next button clicked
next.onclick = ()=>{
   if(que_count < questions.length - 1){ 
       que_count++;
       que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine)
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next.classList.remove("show");

} else{
    clearInterval(counter);
    clearInterval(counterLine);
    showResultsbox();
}
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAtrribute("onclick", "optionSelected(this)");
    }
}

let checkIconTag = '<div class="icon check"><i class="fas fa-check-square"></i></div>';

let crossIconTag = '<div class="icon cross"><i class="fas fa-times-circle"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", checkIconTag);
}else{
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    console.log("Wrong Answer");

    //if anser is incorrect then automatically selecte correct answer
    for (i=0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correcAns){
        option_list.children[i].setAtrribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", checkIconTag);
        console.log("Auto selected correct answer.");
        }
    }
}
//once user selected disabled all options
for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
    
    }
    next.classList.add("show"); 
}

function showResults(){
    square.classList.remove("activeInfo");//hide the info box
    quiz.classList.remove("activeQuiz");// hide the quiz box
    results.classList.add("activeResult");//show the result box
    const scoreText = results.querySelector(".score");
    if(userScore > 3){
        let scoreTag = '<span>and congrats, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1) {
        let scoreTag = '<span>and nice, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{   
        let scoreTag = '<span>and sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer;

            for( i=0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAtrribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", checkIconTag);
                    console.log("Time off: Auto selected correct answer.");
                 }

                }
                for(i=0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled");
                }
                next.classList.add("show");
            }
            }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer(){
        times += 1;
        timego.style.width = time + "px";
        if(time > 549){
           clearInterval(counterLine);
        }
    }
}

function queCounter(index){
  let totalQuesCountTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions </span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}