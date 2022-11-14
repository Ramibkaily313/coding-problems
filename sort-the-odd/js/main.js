function sortArray(array) {
	// Return a sorted array.
	let filtered = array.filter(num => num % 2 !== 0).sort((a,b) => a - b)
	return array.map(num => num % 2 == 0 ? num : filtered.shift())
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = sortArray([5, 3, 2, 8, 1, 4, 11])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = sortArray([2, 22, 37, 11, 4, 1, 5, 0])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = sortArray([1, 111, 11, 11, 2, 1, 5, 0])
    } 
}


