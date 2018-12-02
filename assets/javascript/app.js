$(document).ready(function() {
    // VARIABLES
    // ==================================================================================
    
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
            rightAnswerText: ``,
            dumbAnswerText: `He may have been old when he entered office, but Reagan wasn't THAT old...`,
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
            rightAnswerText: ``,
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
            rightAnswerText: ``,
            dumbAnswerText: `You're off by about 45 years...although The Beatles WERE a boy band!`,
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
            rightAnswerText: ``,
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
            rightAnswerText: ``,
            dumbAnswerText: `Not even close...but it's fun to wonder who Fidel would have supported - Bush or Gore?`,
            picture: `assets/images/hanging-chad.jpg`
        },
        {
            question: `At a press conference in 1991, this famous NBA player announced he had tested positive for HIV.`,
            answers: {
            a: `Michael Jordan`,
            b: `Lebron James`,
            c: `Magic Johnson`,
            d: `Dominique Wilkins`
            },
            correctAnswer: `c`,
            rightAnswerText: ``,
            dumbAnswerText: `Um, not quite...King James was 7 years old in 1991.`,
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
            rightAnswerText: ``,
            dumbAnswerText: `Just because the picture's in black and white doesn't mean it's from the 1920s...`,
            picture: `assets/images/jack-ruby.jpg`
        },
        {
            question: `Near the end of World War II, Winston Churchill, Franklin Delano Roosevelt, and Joseph Stalin met to discuss post-war issues at the __________.`,
            answers: {
            a: `Paris Agreement`,
            b: `Potsdam Conference`,
            c: `Warsaw Pact`,
            d: `Yalta Conference`
            },
            correctAnswer: `d`,
            rightAnswerText: ``,
            dumbAnswerText: `Nope - the Paris Climate Agreement was a huge success - until President Trump thought it was dumb...`,
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
            rightAnswerText: ``,
            dumbAnswerText: `How about you lay off the conspiracy theory websites for a little while, huh?`,
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
            rightAnswerText: ``,
            dumbAnswerText: `I know you didn't seriously pick a city as a country, did you??`,
            picture: `assets/images/tank-man.jpg`
        },
    ];

    let currentQuestion = 0;
    let rightAnswers = 0;
    let wrongAnswers = 0;
    let audio = new Audio("evil-laugh.mp3");
    let number = 31;
    let intervalId;
    
    // FUNCTIONS
    // ==================================================================================
    $(`#new-game`).on(`click`, newGame);
    
    
    function newGame() {
        $(`#new-game`).css("display", "none")
        audio.play();
        generateQuestion();
    }
    
    function thirty() {
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
        number--;
        $(`#time-remaining`).html(`Seconds remaining: ${number}`);
        if(number ===-1) {
            stop();
            alert(`Time's up!`);
            clearAnswers();
            generateQuestion();
        }
    }
    
    function stop() {
        clearInterval(intervalId);
        number = 31;
    }
    
    function clearAnswers() {
        $(`#answers`).html(``);
    }
    
    
    function generateQuestion(index) {
        thirty();
        $(`#question`).text(questionBank[currentQuestion].question);
        $(`#answers`).append(`<input type="radio" name="choices" value="a">${questionBank[currentQuestion].answers.a}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="b">${questionBank[currentQuestion].answers.b}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="c">${questionBank[currentQuestion].answers.c}<br>`);
        $(`#answers`).append(`<input type="radio" name="choices" value="d">${questionBank[currentQuestion].answers.d}<br>`);
        $(`#current-image`).attr(`src`, questionBank[currentQuestion].picture);
        let goodAnswer = questionBank[currentQuestion].correctAnswer;
        console.log(goodAnswer);
        
        currentQuestion++; 
    }
    
    
    




























});