Questions = [
{
    text:'Which country below was NOT a permanent member of the UN Security Council in 1945 (at its formation)?',
    answers : [
        {option: 'USA', correct: 'false'},
        {option: 'Japan', correct: 'true'},
        {option: 'USSR', correct: 'false'},
        {option: 'China', correct: 'false'},
    ]
},
{
    text:'The acronym "M.A.D." stands for?',
    answers : [
        {option: 'Mutually Assured Defence', correct: 'false'},
        {option: 'Military And Defence', correct: 'false'},
        {option: 'Mutually Assured Destruction', correct: 'true'},
        {option: 'Militarily Assured Destruction', correct: 'false'},
    ]
},
{
    text:'ICBMs are:',
    answers : [
        {option: 'Nuclear powered submarines', correct: 'false'},
        {option: 'Short range nuclear missiles', correct: 'false'},
        {option: 'Conventional submarines', correct: 'false'},
        {option: 'Nuclear missiles', correct: 'true'},
    ]
},
{
    text:'A former bus driver and labor leader, this current president of  Venezuela is the hand picked succesor of Hugo Chavez',
    answers : [
        {option: 'Evo Morales', correct: 'false'},
        {option: 'Nicholas Maduro', correct: 'true'},
        {option: 'Raoul Cisneros', correct: 'false'},
        {option: 'Alejandro Junco de la Vega', correct: 'false'},
    ]
},
{
    text:'Bangladesh was recently in the news for a factory collapse that killed more than 1100 people.  Before 1971 this country used to be known as ...',
    answers : [
        {option: 'Balochistan', correct: 'false'},
        {option: 'East Pakistan', correct: 'true'},
        {option: 'Rhodesia', correct: 'false'},
        {option: 'The Hindu Kush', correct: 'false'},
    ]
}
];



options = Array.from(document.getElementsByClassName('btn'));
i = 0;
function showQuestion(){
    if(CurrentQuestionIndex < 4)
    {
        CurrentQuestionNumber = CurrentQuestionIndex + 1;
        document.getElementById('ques').innerText = CurrentQuestionNumber + " )" + Questions[CurrentQuestionIndex].text;
        (Questions[CurrentQuestionIndex].answers).forEach((e)=>{
            options[i].innerText = e.option;
            ++i;
        })
    }
    else
    {
        CurrentQuestionNumber = CurrentQuestionIndex + 1;
        document.getElementById('ques').innerText = CurrentQuestionNumber + " )" + Questions[CurrentQuestionIndex].text;
        (Questions[CurrentQuestionIndex].answers).forEach((e)=>{
            options[i].innerText = e.option;
            ++i;
        })
        document.getElementById('next').innerText = 'Submit';
    }
}

//Handling the option's
options.forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        optionSelected = ele.target.innerText;
        (Questions[CurrentQuestionIndex].answers).forEach((el)=>{
            if(el.correct == 'true')
            {
                correctOption = el.option;
            }
        })
        if(optionSelected == correctOption)
        {
            ele.target.style.backgroundColor = '#60e060';
            ++score;
        }
        else
        {
            ele.target.style.backgroundColor = '#ff4e4e';
            options.forEach((w)=>{
                if(w.innerText == correctOption)
                {
                    w.style.backgroundColor = '#60e060';
                }
            })
        }
    })    
})


//Handling the next button
document.getElementById('next').addEventListener('click',()=>{
    if(CurrentQuestionIndex < 4)
    {
        i = 0;
        ++CurrentQuestionIndex;
        options.forEach((e)=>{
            e.style.backgroundColor = 'aliceblue';
        })
        showQuestion();
    }
    else
    {
        document.getElementById('Section-2').style.display = 'none';
        document.getElementById('Section-3').style.display = 'flex';
        document.getElementById('score').innerText = score;
        options.forEach((e)=>{
            e.style.backgroundColor = 'aliceblue';
        })
        if(score<=3)
        {
            document.getElementById('scoreimg').src = 'low score.png';
        }
        else
        {
            document.getElementById('scoreimg').src = 'Trophy.png';
        }
        clearInterval(x);
        TimeInSeconds = 60;
    }
})

//Handling the reset button
document.getElementById('reset').addEventListener('click',()=>{
    document.getElementById('navbar').style.display = 'flex';
    document.getElementById('Section-1').style.display = 'flex';    
    document.getElementById('Section-2').style.display = 'none';
    document.getElementById('Section-3').style.display = 'none';
    i = 0;
    document.getElementById('next').innerText = 'Next';
    document.getElementById('timeover').innerText = 'Test Completed';
})


CurrentQuestionIndex = 0;
score = 0;
function startQuiz(){
    CurrentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

x = 0;
//Handling the let's play button
document.getElementById('play').addEventListener('click',()=>{
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('Section-1').style.display = 'none';    
    document.getElementById('Section-2').style.display = 'flex';
    x = setInterval(TimeManage, 1000);
    startQuiz();    
})


//Handling the timer
time = document.getElementById('time');
InitialTime = 1;
TimeInSeconds = InitialTime*60;
function TimeManage()
{
    if(TimeInSeconds > 0)
    {
        TimeMinutes = Math.floor(TimeInSeconds/60);
        TimeSeconds = TimeInSeconds % 60;
        if(TimeSeconds<10)
        {
            time.innerText = TimeMinutes + " : " + "0" + TimeSeconds;
        }
        else
        {
            time.innerText = TimeMinutes + " : " + TimeSeconds;
        }
        console.log(TimeInSeconds);
        TimeInSeconds = TimeInSeconds - 1 ;
    }
    else
    {
        document.getElementById('Section-2').style.display = 'none';
        document.getElementById('Section-3').style.display = 'flex';
        document.getElementById('score').innerText = score;
        options.forEach((e)=>{
            e.style.backgroundColor = 'aliceblue';
        })
        if(score<=3)
        {
            document.getElementById('scoreimg').src = 'low score.png';
        }
        else
        {
            document.getElementById('scoreimg').src = 'Trophy.png';
        }
        clearInterval(x);
        TimeInSeconds = 60;
    }
}

