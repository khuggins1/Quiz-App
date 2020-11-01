//getting all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//If Start Quiz Button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//If exit button clicked
start_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

//If continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
}