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
    showQuestions(0); 
    queCounter(1);
}
let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//if next button clicked
next_btn.onclick = ()=>{
   if(que_count < questions.length - 1){ 
       que_count++;
       que_numb++;
    showQuestions(que_numb);
    queCounter(1);
} else{
    console.log()
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector ("option_list");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    +  '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAtrribute("onclick", "optionSelected(this)");
    }

    }

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
    console.log("Answer is correct");
}else{
    answer.classList.add("incorrect");
    console.log("Answer is incorrect");
}
//once user selected disabled all options
for (let i = 0; i < allOptions; ii++) {
    option_list.children[i].classList.add("disabled");
    
}

}

function queCounter(index){
    const bottom_quest_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
//array and passing number
let questions = [
    {
        numb: 1,
        question: "What does Html stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
    ]
},
    
            {
                numb: 2,
                question: "What does CSS stand for?",
                answer: "Cascading Style Sheet",
                options: [
                    "Common Style Sheet",
                    "Color style sheet",
                    "Hyper Text Multiple Language",
                    "Hyper Tool Multi Language",
            ]
        },
        {
            numb: 3,
                question: "What does PHP stand for?",
                answer: "Hypertext Preprocessor",
                options: [
                    "Hypertext Preprocessor",
                    "Hypertext Programming",
                    "Hypertext Preprogramming",
                    "Hometext Preprocessor",
                ]

            
        },
        {
            numb: 4,
                question: "What does SQL stand for?",
                answer: "Structured Query Language",
                options: [
                    "Stylish Question Language",
                    "Stylesheet Query Language",
                    "Statement Question Language",
                    "Structured Query Language",
                ]

            
        },
        {
            numb: 5,
                question: "What does XML stand for?",
                answer: "extensible Markup Language",
                options: [
                    "extensible Markup Language",
                    "executable Multiple Language",
                    "extra Multiple Language",
                    "examine Multiple Language",
                ]

            
        },
];