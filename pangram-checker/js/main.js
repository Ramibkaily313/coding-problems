function isPangram(string){
	//...
	let alph = 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.filter(letter => !string.toLowerCase().includes(letter))
	return alph.length > 0 ? false : true
	
}


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = isPangram("The quick brown fox jumps over the lazy dog.")
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = isPangram('Pack my box with five dozen liquor jugs.')
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = isPangram('abcdefghijklmnopqrstuvwxyz')
    } else if (click.target.classList.contains('fourth')) {
		document.querySelector('.fourth').innerText = isPangram("Not a pangram")
	} else if (click.target.classList.contains('fifth')) {
		document.querySelector('.fifth').innerText = isPangram("This also not a pangram")
	}
}


