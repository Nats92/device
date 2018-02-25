"use strict";

var sliderControlsWrap = document.querySelector(".slider-controls");
var sliderControls = sliderControlsWrap.querySelectorAll("button");
var sliders = document.querySelectorAll(".slider-item");

sliderControls[0].addEventListener("click", function() {
	if (!sliderControls[0].classList.contains("active")) {
		for (var i = 0; i < sliderControls.length; i++) {
				if (sliderControls[i].classList.contains("active")) {
					sliderControls[i].classList.remove("active");
					sliderControls[0].classList.add("active");

					for (var j = 0; j < sliders.length; j++) {
						sliders[j].classList.add("hidden");
					}
					sliders[0].classList.remove("hidden");
					return;
				}
		}
	}
})
sliderControls[1].addEventListener("click", function() {
	if (!sliderControls[1].classList.contains("active")) {
		for (var i = 0; i < sliderControls.length; i++) {
			if (sliderControls[i].classList.contains("active")) {
				sliderControls[i].classList.remove("active");
				sliderControls[1].classList.add("active");

				for (var j = 0; j < sliders.length; j++) {
						sliders[j].classList.add("hidden");
					}
					sliders[1].classList.remove("hidden");
				return;
			}
		}
	}
	
})
sliderControls[2].addEventListener("click", function() {
	if (!sliderControls[2].classList.contains("active")) {
		for (var i = 0; i < sliderControls.length; i++) {
			if (sliderControls[i].classList.contains("active")) {
				sliderControls[i].classList.remove("active");
				sliderControls[2].classList.add("active");
				for (var j = 0; j < sliders.length; j++) {
						sliders[j].classList.add("hidden");
					}
					sliders[2].classList.remove("hidden");
				return;
			}
		}
	}
	
})