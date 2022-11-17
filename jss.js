const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.value;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    
    updateMoves(pInput, cInput);
    compareInputs(pInput, cInput);
    updateScore();
    if(checkWinner()){
      pScore = cScore= 0;
      updateScore();
    }
  });
});

function updateMoves(pInput, cInput){
  document.getElementById("p-move").src = `./assets/${pInput}.svg`;
  document.getElementById("c-move").src = `./assets/${cInput}.svg`;
}


function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    alert(`${currentMatch} Tie`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${currentMatch} = Debbie Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Jerico Win`);
      cScore++;
    }
  }
  //Check for Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = Debbie Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Jerico Win`);
      cScore++;
    }
  }
  //Check for Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = Debbie Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Jerico Win`);
      cScore++;
    }
  }
}

function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "Ay wow nanalo pero walang top up parin hahaha"
        : "Blehhh utot talo ka meheheeheh";
    alert(winner);
    return true;
  }
  return false;
}