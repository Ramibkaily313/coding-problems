function towerBuilder(nFloors) {
	// build here
	let newArr = []
	for (let i = 0; i < nFloors; i++) {
	  let spaces = ((nFloors - 1) * 2 + 1 - (i*2 + 1)) / 2
	  console.log(spaces)
	  newArr.push(' '.repeat(spaces) + '*'.repeat(i*2 + 1) + ' '.repeat(spaces))
	}
	return newArr;
  }

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = towerBuilder(1)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = towerBuilder(2)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = towerBuilder(3)
    } else if (click.target.classList.contains('fourth')) {
		document.querySelector('.fourth').innerText = towerBuilder(4)
	} else if (click.target.classList.contains('fifth')) {
		document.querySelector('.fifth').innerText = towerBuilder(5)
	}
}

