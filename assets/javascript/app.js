$(document).ready(function() {
    // VARIABLES
    // ==================================================================================
    
    // This array contains multiple objects that house questions, answers, correct answers, responses to the user, and images
    const questionBank = [
        {
            question: `Which U.S. president was in office for the majority of the Civil War?`,
            answers: {
            a: `Ulysses S. Grant`,
            b: `Abraham Lincoln`,
            c: `Ronald Reagan`,
            d: `Thomas Jefferson`
            },
            correctAnswer: `b`,
            dumbAnswer: `c`,
            rightAnswerText: `Abraham Lincoln`,
            dumbAnswerText: `Reagan may have been old when he entered office, but he wasn't THAT old...`,
            picture: `assets/images/civil-war.jpg`
        },
        {
            question: `Which leader, shown below, advocated non-violent resistance to the British presence in India?`,
            answers: {
            a: `Aziz Ansari`,
            b: `Jawaharlal Nehru`,
            c: `Mahatma Gandhi`,
            d: `Indira Gandhi`
            },
            correctAnswer: `c`,
            dumbAnswer: `a`,
            rightAnswerText: `Mahatma Gandhi`,
            dumbAnswerText: `Wow...gonna start calling you the "Master of None"...`,
            picture: `assets/images/indian-leader.jpg`
        },
        {
            question: `In 1964, this band famously appeared on the Ed Sullivan Show for the first time.`,
            answers: {
            a: `The Rolling Stones`,
            b: `The Who`,
            c: `NSYNC`,
            d: `The Beatles`
            },
            correctAnswer: `d`,
            dumbAnswer: `c`,
            rightAnswerText: `The Beatles`,
            dumbAnswerText: `JT's got NOTHING on a young John Lennon!`,
            picture: `assets/images/ed-sullivan.jpg`
        },
        {
            question: `After spending 27 years in prison, Nelson Mandela was released in 1990, and went on to be elected president of which country?`,
            answers: {
            a: `South Africa`,
            b: `Kenya`,
            c: `Ethiopia`,
            d: `Canada`
            },
            correctAnswer: `a`,
            dumbAnswer: `d`,
            rightAnswerText: `South Africa`,
            dumbAnswerText: `Canada's leaders have all been way too polite to end up in prison...`,
            picture: `assets/images/freedom.jpg`
        },
        {
            question: `The 2000 U.S. presidential election was plagued by issues with ballots in which U.S. state?`,
            answers: {
            a: `Cuba`,
            b: `Texas`,
            c: `Florida`,
            d: `Minnesota`
            },
            correctAnswer: `c`,
            dumbAnswer: `a`,
            rightAnswerText: `Florida`,
            dumbAnswerText: `Not even close...Fidel didn't worry about pesky things like elections!`,
            picture: `assets/images/hanging-chad.jpg`
        },
        {
            question: `At a press conference in 1991, this NBA player announced he had tested positive for HIV.`,
            answers: {
            a: `Michael Jordan`,
            b: `Lebron James`,
            c: `Magic Johnson`,
            d: `Dominique Wilkins`
            },
            correctAnswer: `c`,
            dumbAnswer: `b`,
            rightAnswerText: `Magic Johnson`,
            dumbAnswerText: `I certainly hope not - considering Lebron was 7 years old in 1991.`,
            picture: `assets/images/announcement.jpg`
        },
        {
            question: `Who is nightclub owner Jack Ruby (back to the camera) seen firing at in the image below?`,
            answers: {
            a: `Lee Oswald`,
            b: `Lyndon Johnson`,
            c: `Mark David Chapman`,
            d: `Charlie Chaplin`
            },
            correctAnswer: `a`,
            dumbAnswer: `d`,
            rightAnswerText: `Lee Oswald`,
            dumbAnswerText: `Just because the picture's in black and white doesn't mean it's from the 1920s...`,
            picture: `assets/images/jack-ruby.jpg`
        },
        {
            question: `Near the end of World War II, Churchill, FDR, and Stalin met to discuss post-war issues at the __________.`,
            answers: {
            a: `Paris Agreement`,
            b: `Potsdam Conference`,
            c: `Warsaw Pact`,
            d: `Yalta Conference`
            },
            correctAnswer: `d`,
            dumbAnswer: `a`,
            rightAnswerText: `Yalta Conference`,
            dumbAnswerText: `Nope - the Paris Climate Agreement was a huge success - until Trump thought it was stupid...`,
            picture: `assets/images/big-three.jpg`
        },
        {
            question: `Which African dicator was in power for 42 years, until his overthrow, capture, and death in 2011?`,
            answers: {
            a: `Hosni Mubarak`,
            b: `Muammar Gaddafi`,
            c: `Barack Obama`,
            d: `Idi Amin`
            },
            correctAnswer: `b`,
            dumbAnswer: `c`,
            rightAnswerText: `Muammar Gaddafi`,
            dumbAnswerText: `I'm gonna need you lay off the conspiracy theory websites for a little while...`,
            picture: `assets/images/sunglasses.jpg`
        },
        {
            question: `The military response to protests in which Asian country led to the iconic photograph shown below?`,
            answers: {
            a: `China`,
            b: `Russia`,
            c: `Tokyo`,
            d: `Myanmar`
            },
            correctAnswer: `a`,
            dumbAnswer: `c`,
            rightAnswerText: `China`,
            dumbAnswerText: `I know you didn't seriously pick a city as a country, did you??`,
            picture: `assets/images/tank-man.jpg`
        },
    ];

    let currentQuestion = 0;
    let rightAnswers = 0;
    let wrongAnswers = 0;
    let audio = new Audio("assets/audio/evil-laugh.mp3");
    let audioHell = new Audio("assets/audio/in-hell.mp3");
    let audioBrilliant = new Audio("assets/audio/guinness.wav")
    let number = 15;
    let intervalId;

    
    // FUNCTIONS
    // ==================================================================================
    
    // Starts game when button is clicked
    $(`#new-game`).on(`click`, newGame);
    
    // Removes the start button, plays the evil laugh audio, and populates first question from array
    function newGame() {
        $(`#new-game`).css("display", "none")
        audio.play();
        generateQuestion();
    }
    
    // Sets an interval to count down every second
    function fifteen() {
        intervalId = setInterval(decrement, 1000);
    }
    
    // Decreases the number by one every second, writes the timer to the browser, and logs a wrong answer and advances to next question if time runs out
    function decrement() {
        number--;
        $(`#time-remaining`).html(`Seconds remaining: ${number}`);
        if(number === 0) {
            stop();
            wrongAnswers++;
            $(`#response`).html(`Refuse to click anything, huh? Interesting strategy!`);
            setTimeout(function() {
                clearAnswers();
                currentQuestion++;
                generateQuestion();
            }, 5000);
        }
    }
    
    // Clears our count down interval and resets the time number
    function stop() {
        clearInterval(intervalId);
        number = 15;
    }
    
    // Clears out the the old answers so new ones can be populated
    function clearAnswers() {
        $(`#answers`).html(``);
    }

    // Clears out the response to user so a new one can be populated after the new question
    function clearResponse() {
        $(`#response`).html(``);
    }
    
    // Handles if the user selects the correct answer (adds to wins, advances to next question in array)
    function rightAnswer() {
        rightAnswers++;    
        clearAnswers();
        currentQuestion++;
        generateQuestion();
    }

    // Handles if the user selects the wrong answer (add to losses, advances to next question in array)
    function wrongAnswer() {
        wrongAnswers++;
        clearAnswers();
        currentQuestion++;
        generateQuestion();
    }

    // Runs when all the questions have been completed, changes timer div to right answers, question div to wrong answers. 
    // One audio clip and gif display if wins are 6 or greater, the other if wins are less than 6
    // New game button text prompts to play again, on click page is refreshed
    function endScreen() {
        $(`#time-remaining`).text(`Correct Answers: ${rightAnswers}`);
        $(`#question`)
                .text(`Wrong Answers: ${wrongAnswers}`)
                .removeClass("bg-light");
        $(`#new-game`)
                .text(`Click here if you dare to try again...`)
                .css("display", "block")
                .attr("onClick", "window.location.reload()");
            if(rightAnswers <= 5) {
                $(`#current-image`).attr(`src`, `assets/images/fire-laugh.gif`);
                audioHell.play();
            } else {
                $(`#current-image`).attr(`src`, `assets/images/brilliant.gif`);
                audioBrilliant.play();
            }

        }
    
    // First checks to see if all questions have been complete; if not, inputs questions, answers, and responses       
    function generateQuestion(index) {
        if(rightAnswers + wrongAnswers === 10) {
            stop();
            clearResponse();
            endScreen();
        } else {
        clearResponse();
        $(`#time-remaining`).html(`Seconds remaining: ${number}`);
        fifteen();
        $(`#question`).text(questionBank[currentQuestion].question);
        $(`#answers`).append(`<input type="radio" name="choices" value="a" id="a"> ${questionBank[currentQuestion].answers.a}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="b" id="b"> ${questionBank[currentQuestion].answers.b}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="c" id="c"> ${questionBank[currentQuestion].answers.c}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="d" id="d"> ${questionBank[currentQuestion].answers.d}`);
        $(`#current-image`).attr(`src`, questionBank[currentQuestion].picture);
        let goodAnswer = questionBank[currentQuestion].correctAnswer;
        let dumbAnswer = questionBank[currentQuestion].dumbAnswer;
        console.log(goodAnswer);
            $(`input[type=radio]`).click(function() {
                let userGuess = $(`input[name=choices]:checked`).val();
                console.log(userGuess);
                if(userGuess === goodAnswer) {
                    $(`#response`).html(`You got it!`);
                    stop();
                    setTimeout(function() {
                        rightAnswer();
                    }, 1500);
                } else if(userGuess === dumbAnswer) {
                    $(`#response`).html(`${questionBank[currentQuestion].dumbAnswerText}`);
                    stop();
                    setTimeout(function() {
                        wrongAnswer();
                    }, 3500);
                } else {
                    $(`#response`).html(`Nope! The right answer was ${questionBank[currentQuestion].rightAnswerText}.`);
                    stop();
                    setTimeout(function() {
                        wrongAnswer();
                    }, 2500);
                }
            })
        }
        
    }
        
    
})
    
        




























