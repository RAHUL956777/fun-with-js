function ageInDays(){
var barthYears = prompt(("What year were you born.....Good Friends?"));
var ageInDayss = (2021 - barthYears) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are ' + ageInDayss + 'days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/7p1.gif";
    div.appendChild(image);
}

//Challange-3  Rock paper sizers
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:', botChoice);

    results = decidedwinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decidedwinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'you lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'you tied!', 'color': 'yellow'};
    }else{
        return {'message': 'you won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

//Remove all the images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50,233, 1);>"
messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" +finalMessage['message'] +"</h1>"
botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38,24, 1);>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
}