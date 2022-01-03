const toggleBtn = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav__list');
toggleBtn.addEventListener('click', () => {
	navList.classList.toggle('active');
});
const firstBtnList = document.querySelector('.first');
const firstListItem = document.querySelectorAll('.firsts');
const secondBtnList = document.querySelector('.second');
const secondListItem = document.querySelectorAll('.seconds');
const thirdBtnList = document.querySelector('.third');
const thirdListItem = document.querySelectorAll('.thirds');
const fourthBtnList = document.querySelector('.fourth');
const fourthListItem = document.querySelectorAll('.fourths');
const fifthBtnList = document.querySelector('.fifth');
const fifthListItem = document.querySelectorAll('.fifths');
firstBtnList.addEventListener('click', (event) => {
	if (event.target.tagName = 'LI') {
		for (let i = 0; i < firstListItem.length; i++) {
			firstListItem[i].classList.remove('active');
		}
		event.target.classList.add('active');
	}
});
secondBtnList.addEventListener('click', (event) => {
	if (event.target.tagName = 'LI') {
		for (let i = 0; i < secondListItem.length; i++) {
			secondListItem[i].classList.remove('active');
		}
		event.target.classList.add('active');
	}
});
thirdBtnList.addEventListener('click', (event) => {
	if (event.target.tagName = 'LI') {
		for (let i = 0; i < thirdListItem.length; i++) {
			thirdListItem[i].classList.remove('active');
		}
		event.target.classList.add('active');
	}
});
fourthBtnList.addEventListener('click', (event) => {
	if (event.target.tagName = 'LI') {
		for (let i = 0; i < fourthListItem.length; i++) {
			fourthListItem[i].classList.remove('active');
		}
		event.target.classList.add('active');
	}
});
fifthBtnList.addEventListener('click', (event) => {
	if (event.target.tagName = 'LI') {
		for (let i = 0; i < fifthListItem.length; i++) {
			fifthListItem[i].classList.remove('active');
		}
		event.target.classList.add('active');
	}
});