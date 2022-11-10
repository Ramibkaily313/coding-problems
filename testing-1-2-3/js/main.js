var number=function(array){
	//your awesome code here
	return array.map((num, index) => `${index + 1}: ${num}`)
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = number([1, 2, 3, 4, 5])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = number(['Rami', 'El-Bkaily'])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = number(['Code', 'this', 'out'])
    } 
}


