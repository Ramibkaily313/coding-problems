function duplicateEncode(word){
// ...
	return word.toLowerCase().split('').map((letter, i, arr) => 
		arr.indexOf(letter) === arr.lastIndexOf(letter) ? '(' : ')'
	).join('')
}


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = duplicateEncode('din')
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = duplicateEncode('recede')
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = duplicateEncode('Success')
    } 
}


