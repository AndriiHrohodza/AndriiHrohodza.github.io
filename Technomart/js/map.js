var maplink = document.querySelector(".maplink");
var mappoput = document.querySelector(".maps");
var mapclose = document.querySelector(".popup-close");
var mapoverlay = document.querySelector(".modal-overlay");


maplink.addEventListener("click", function(event) {
        event.preventDefault();
        mappoput.classList.add("modal-content-show");
        mapoverlay.classList.add("modal-overlay-show");
        
    });
mapclose.addEventListener("click", function(event) {
		event.preventDefault();
		mappoput.classList.remove("modal-content-show")
        mapoverlay.classList.remove("modal-overlay-show");
});
mapoverlay.addEventListener("click", function(event) {
        mappoput.classList.remove("modal-content-show");
        mapoverlay.classList.remove("modal-overlay-show");
    });