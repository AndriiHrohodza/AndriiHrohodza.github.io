var list1 = document.querySelector(".list-1");
var list2 = document.querySelector(".list-2");
var list3 = document.querySelector(".list-3");
var ship = document.querySelector(".shiping");
var guarantee = document.querySelector(".guarantee");
var credit = document.querySelector(".credit");

list1.addEventListener("click", function(event) {
	event.preventDefault();
	list1.classList.add("active");
	list2.classList.remove("active");
	list3.classList.remove("active");
	ship.classList.add("display-block");
	guarantee.classList.remove("display-block");
	credit.classList.remove("display-block");
	
});
list2.addEventListener("click", function(event) {
	event.preventDefault();
	list1.classList.remove("active");
	list2.classList.add("active");
	list3.classList.remove("active");
	ship.classList.remove("display-block");
	guarantee.classList.add("display-block");
	credit.classList.remove("display-block");

});
list3.addEventListener("click", function(event) {
	event.preventDefault();
	list1.classList.remove("active");
	list2.classList.remove("active");
	list3.classList.add("active");
	ship.classList.remove("display-block");
	guarantee.classList.remove("display-block");
	credit.classList.add("display-block");

});







