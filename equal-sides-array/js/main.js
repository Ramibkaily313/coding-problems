function findEvenIndex(arr) {
	return arr.findIndex((n, index, array) => 
	  array.slice(0, index).reduce((sum, num) => sum + num,0) === array.slice(index + 1).reduce((sum, num) => sum + num,0)
	)
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = findEvenIndex([1,2,3,4,3,2,1])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = findEvenIndex([1,100,50,-51,1,1])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = findEvenIndex([1,2,3,4,5,6])
    } 
}


