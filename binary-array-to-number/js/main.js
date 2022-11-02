const binaryArrayToNumber = arr => {
	// your code
	return parseInt(arr.join(''),2)
  };


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = binaryArrayToNumber(['1', '1', '1', '1'])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = binaryArrayToNumber(['1', '1', '0', '1'])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = binaryArrayToNumber(['1', '0', '1', '1'])
    } 
}


