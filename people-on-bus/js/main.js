var number = function(busStops){
	// Good Luck!
	return busStops.reduce((sum, ppl, i, array) => sum + ppl[0] - ppl[1], 0)
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = number([[10,0],[3,5],[5,8]])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])
    } 
}


