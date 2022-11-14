function getGrade (s1, s2, s3) {
	let avg = (s1 + s2 + s3)/3
	
	if (avg >= 90) {
	  return 'A'
	} else if (avg >= 80) {
	  return 'B'
	} else if (avg >= 70) {
	  return 'C'
	} else if (avg >= 60) {
	  return 'D'
	} else {
	  return 'F'
	}
}

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = getGrade(84,79,85)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = getGrade(75,70,79)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = getGrade(100,100,100)
    } 
}


