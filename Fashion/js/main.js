const card = document.querySelector('.card');
card.addEventListener('mousemove', startRotate);
card.addEventListener('mouseout', stopRotate);

function startRotate(event) {
	const cardItem = this.querySelector('.card-item');
	const haflHeight = cardItem.offsetHeight / 2;
	const haflWidth = cardItem.offsetWidth / 2;
	console.log(haflHeight);
	cardItem.style.transform = 'rotateX(' + - 
	(event.offsetY - haflHeight) / 10 +'deg) rotateY(' +  
	(event.offsetX - haflWidth) / 10 +'deg)'
}
function stopRotate(event) {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}