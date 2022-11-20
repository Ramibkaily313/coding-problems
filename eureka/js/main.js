function sumDigPow(a, b) {
	// Your code here
	let newArr = []
  
	for (let i = a; i <= b; i++) {
	  let arrNum = String(i).split('')
	  arrNum = arrNum.reduce((sum, num, index) => sum + Math.pow(num, index + 1),0)
	  if (arrNum === i) {
		newArr.push(i)
	  }
	}
	return newArr
  }


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = sumDigPow(90, 150)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = sumDigPow(50, 150)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = sumDigPow(10, 150)
    } 
}


