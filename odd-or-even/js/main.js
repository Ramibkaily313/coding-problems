function oddOrEven(array) {
	//enter code here
   return array.reduce((sum, num) => sum + num,0) % 2 == 0 ? 'even' : 'odd'
 }

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = oddOrEven([0, 1, 5])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = oddOrEven([0, -1, -3])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = oddOrEven([-1023, -1, 3])
    } 
}


