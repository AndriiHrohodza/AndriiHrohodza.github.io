var link = document.querySelector(".write-btn");
var poput = document.querySelector(".write-us");
var close = document.querySelector(".popup-close");
var overlay = document.querySelector(".modal-overlay");
var name = poput.querySelector("[name=name]");

link.addEventListener("click", function(event) {
        event.preventDefault();
        poput.classList.add("modal-content-show");
        overlay.classList.add("modal-overlay-show");
        
    });
close.addEventListener("click", function(event) {
		event.preventDefault();
		poput.classList.remove("modal-content-show")
        overlay.classList.remove("modal-overlay-show");
});
overlay.addEventListener("click", function(event) {
        poput.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
    });