function disemvowel(str) {
	return str.split('').filter((letter) => !'aeiouAEIOU'.includes(letter)).join('')
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = disemvowel("I love coding")
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = disemvowel("Solving coding problems is fun")
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = disemvowel("I can do this all day")
    } 
}

