function findOdd(A) {
	//happy coding!
	let counter = {}

	A.forEach(num => {
		if(!Object.keys(counter).includes(String(num))) {
		counter[num] = 1
		} else {
		counter[num]++
		}
	})

	for (let key in counter) {
		if (counter[key] % 2 !== 0) {
		return Number(key)
		}
	}
} 


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = findOdd([1,1,2])
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = findOdd([0,1,0,1,0])
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])
    } 
}


