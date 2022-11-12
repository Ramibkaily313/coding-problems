function deleteNth(arr,n){
	// ...
	let counterObj = {}
	return arr.filter(function(num) {
		// if the first element is true (i.e exists) add 1 to it, if not set it to 1
		counterObj[num] = (counterObj[num] + 1|| 1)
		//  return num if it passes the filters boolean check of:
		return counterObj[num] <= n
	})
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = deleteNth([1,1,3,3,7,2,2,2,2],3)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = deleteNth([1,1,1,1,1],5)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1],3)
    } 
}


