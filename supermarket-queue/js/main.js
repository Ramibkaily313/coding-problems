function queueTime(customers, n) {
	//TODO
	if (customers.length === 0) {
	  return 0
	}
	let counterObj = {}
	customers.forEach(function(customer, i, arr) {
	  if ((i + 1) <= n) {
		counterObj[i + 1] = customer
	  } else {
		let key = Object.keys(counterObj).reduce((key, v) => counterObj[v] < counterObj[key] ? v : key);
		counterObj[key] += customer
	  }
	})
	return Math.max(...Object.values(counterObj))
  }
  


let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = queueTime([1,2,3,4], 1)
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = queueTime([2,2,3,3,4,4], 2)
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = queueTime([1,2,3,4,5], 100)
    } 
}


