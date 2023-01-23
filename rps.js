const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const bestOf3 = document.getElementById("3");
const bestOf5 = document.getElementById("5");
const bestOf7 = document.getElementById("7");
const playerCount = document.getElementById("playerCount");
const botCount = document.getElementById("botCount");
const tracker = document.getElementById("scores");
const playerArr = document.getElementById("playerplays");
const botArr = document.getElementById("botplays");
const botChoices = ["Rock", "Paper", "Scissors"];
let botChoise = Math.floor(Math.random() * botChoices.length);
let player = 0;
let bot = 0;
const playerPlays = [];
const botPlays = [];
const rockFunc = () => {
  botChoise = Math.floor(Math.random() * botChoices.length);
  playerPlays.unshift("<li>👊</li>");
  if (botChoices[botChoise] === "Scissors") {
    player++;
    botPlays.unshift("<li>✌️</li>");
  } else if (botChoices[botChoise] === "Paper") {
    bot++;
    botPlays.unshift("<li>✋</li>");
  } else {
    botPlays.unshift("<li>👊</li>");
  }
};
const paperFunc = () => {
  botChoise = Math.floor(Math.random() * botChoices.length);
  playerPlays.unshift("<li>✋</li>");
  if (botChoices[botChoise] === "Rock") {
    player++;
    botPlays.unshift("<li>👊</li>");
  } else if (botChoices[botChoise] === "Scissors") {
    bot++;
    botPlays.unshift("<li>✌️</li>");
  } else {
    botPlays.unshift("<li>✋</li>");
  }
};
const scissorsFunc = () => {
  botChoise = Math.floor(Math.random() * botChoices.length);
  playerPlays.unshift("<li>✌️</li>");
  if (botChoices[botChoise] === "Paper") {
    player++;
    botPlays.unshift("<li>✋</li>");
  } else if (botChoices[botChoise] === "Rock") {
    bot++;
    botPlays.unshift("<li>👊</li>");
  } else {
    botPlays.unshift("<li>✌️</li>");
  }
};
const winner3 = () => {
  counter();
  if (bot === 3) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Bot wins</h1>";
  } else if (player === 3) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Player wins</h1>";
  }
};
const winner5 = () => {
  counter();
  if (bot === 5) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Bot wins</h1>";
  } else if (player === 5) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Player wins</h1>";
  }
};
const winner7 = () => {
  counter();
  if (bot === 7) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Bot wins</h1>";
  } else if (player === 7) {
    playerArr.style.display = "none";
    botArr.style.display = "none";
    document.body.innerHTML += "<h1>Player wins</h1>";
  }
};
const hideBttns = () => {
  bestOf3.style.display = "none";
  bestOf5.style.display = "none";
  bestOf7.style.display = "none";
  tracker.style.display = "grid";
};
const append = () => {
  playerArr.innerHTML = `<ul>${playerPlays.join("   ")}</ul>`;
  botArr.innerHTML = `<ul>${botPlays.join("   ")}</ul>`;
};
const counter = () => {
  playerCount.innerHTML = player;
  botCount.innerHTML = bot;
};

//Initiation of game
bestOf3.addEventListener("click", () => {
  hideBttns();
  rock.addEventListener("click", () => {
    rockFunc();
    winner3();
    counter();
    append();
  });
  paper.addEventListener("click", () => {
    paperFunc();
    winner3();
    counter();
    append();
  });
  scissors.addEventListener("click", () => {
    scissorsFunc();
    winner3();
    counter();
    append();
  });
});
bestOf5.addEventListener("click", () => {
  hideBttns();
  rock.addEventListener("click", () => {
    rockFunc();
    winner5();
    counter();
    append();
  });
  paper.addEventListener("click", () => {
    paperFunc();
    winner5();
    counter();
    append();
  });
  scissors.addEventListener("click", () => {
    scissorsFunc();
    winner5();
    counter();
    append();
  });
});
bestOf7.addEventListener("click", () => {
  hideBttns();
  rock.addEventListener("click", () => {
    rockFunc();
    winner7();
    counter();
    append();
  });
  paper.addEventListener("click", () => {
    paperFunc();
    winner7();
    counter();
    append();
  });
  scissors.addEventListener("click", () => {
    scissorsFunc();
    winner7();
    counter();
    append();
  });
});
