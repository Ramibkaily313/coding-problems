function expandedForm(num) {
	// Your code here
	return String(num)
	  .split('').reverse()
	  .map((num, index) => num * Math.pow(10,index))
	  .filter((num) => num !== 0)
	  .reverse().join(' + ')
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = expandedForm(1200)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = expandedForm(42567)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = expandedForm(7653)
    } 
}


