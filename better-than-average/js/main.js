function betterThanAverage(classPoints, yourPoints) {
	// Your code here
	return (classPoints.reduce((sum, num) => (sum + num), 0)/classPoints.length) > yourPoints ? false : true
  }

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = betterThanAverage([77, 88, 99, 66], 100)
    } 
}

