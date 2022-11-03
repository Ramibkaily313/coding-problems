function likes(names) {
	// TODO
	let lastCaseAmt = names.length - 2
	if (names.length === 0) {
	  return 'no one likes this'
	} else if (names.length === 1) {
	  return `${names[0]} likes this`
	} else if (names.length === 2) {
	  return `${names[0]} and ${names[1]} like this`
	} else if (names.length === 3) {
	  return `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else {
	  return `${names[0]}, ${names[1]} and ${lastCaseAmt} others like this`
	}
}

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = likes(["Max", "John", "Mark"])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = likes(["Rami", "Zaha", "Zeeshan", "Ammar", "Naveed", "Danial", "Javeria"])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = likes(["Rami", "Zaha", "Jana", "Samar", "Marwan", "Jana"])
    } 
}


