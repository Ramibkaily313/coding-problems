const rps = (p1, p2) => {
	if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
	  return 'Player 1 won!'
	} else if (p1 === p2) {
	  return 'Draw!'
	} else {
	  return 'Player 2 won!'
	}
  };


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = rps('rock', 'scissors')
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = rps('scissors', 'paper')
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = rps('paper', 'rock')
    } 
}


