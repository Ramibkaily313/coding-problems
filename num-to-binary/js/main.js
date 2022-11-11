function addBinary(a,b) {
	return (a + b).toString(2)
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = addBinary(1, 2)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = addBinary(51, 12)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = addBinary(100, 0)
    } 
}


