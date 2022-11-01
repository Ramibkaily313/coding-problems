function accum(s) {
    return s.split('').map((letter, index) => letter.toUpperCase() + letter.repeat(index).toLowerCase()).join('-')
}

let problems = document.querySelectorAll('.problem')

Array.from(problems).forEach(problem => problem.addEventListener('click', showAnswer))

function showAnswer(click) {
	if (click.target.classList.contains('first')) {
		document.querySelector('.first').innerText = accum("ZpglnRxqenU")
	} else if (click.target.classList.contains('second')) {
		document.querySelector('.second').innerText = accum("NyffsGeyylB")
	} else if (click.target.classList.contains('third')) {
		document.querySelector('.third').innerText = accum("MjtkuBovqrU")
    } else if (click.target.classList.contains('fourth')) {
		document.querySelector('.fourth').innerText = accum("EvidjUnokmM")
	} else if (click.target.classList.contains('fifth')) {
		document.querySelector('.fifth').innerText = accum("HbideVbxncC")
	}
}


// console.log(accum("NyffsGeyylB"));

// // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");

// console.log(accum("MjtkuBovqrU"));

// // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");

// console.log(accum("EvidjUnokmM"));

// // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");

// console.log(accum("HbideVbxncC"));

// // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

