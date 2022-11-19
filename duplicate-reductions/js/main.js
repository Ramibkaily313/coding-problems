function dirReduc(arr){
	// ...
	dirObj = {
	  NORTH: 'SOUTH',
	  SOUTH: 'NORTH',
	  EAST: 'WEST',
	  WEST: 'EAST'
	}
	arr.forEach((item, index, array) => {
	  if (array[index + 1] === dirObj[item] || array[index - 1] === dirObj[item]) {
		arr.splice(index, 2)
		dirReduc(arr)
	  } 
	})
	return arr
	
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"])
    } 
}


