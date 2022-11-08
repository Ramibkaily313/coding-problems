function minMax(arr){
	return [Math.min(...arr), Math.max(...arr)]; // fix me!
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = minMax([1, 2, 3, 4, 5])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = minMax([2334454, 5])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = minMax([5])
    } 
}


