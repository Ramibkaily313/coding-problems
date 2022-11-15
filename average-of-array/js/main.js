function findAverage(array) {
	// your code here
	if (array.length === 0 ) {
	  return 0
	} else {
	  return array.reduce((sum, num) => sum + num, 0)/array.length
	}
	
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = findAverage([2, 10, 4, 0])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = findAverage([2, 10, 4, 4, 5])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = findAverage([2, 10, 4, 4, 12, 4])
    } 
}


