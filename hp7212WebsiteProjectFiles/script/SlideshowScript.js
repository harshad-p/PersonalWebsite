var slideNumber = 1;
var slideIndex = 0;
var slidesArray = document.getElementsByClassName("slide");
var slideNumberArray = document.getElementsByClassName("SlideNumber");

slideNumberArray[slideIndex].innerHTML = "Image " + slideNumber + " of " + slidesArray.length;

function goToNextSlide() {
	slidesArray[slideIndex].style.display = "none";
	slideIndex++;
	if (slideIndex == slidesArray.length){
		slideIndex = 0;
	}
	slideNumber = slideIndex + 1;
	slideNumberArray[slideIndex].innerHTML = "Image " + slideNumber + " of " + slidesArray.length;
	slidesArray[slideIndex].style.className = "ImageInfoContainer_display slide";
	slidesArray[slideIndex].style.display = "block";
}

function goToPreviousSlide() {
	slidesArray[slideIndex].style.display = "none";
	slideIndex--;
	if (slideIndex < 0){
		slideIndex = slidesArray.length - 1;
	}
	slideNumber = slideIndex + 1;
	slideNumberArray[slideIndex].innerHTML = "Image " + slideNumber + " of " + slidesArray.length;
	slidesArray[slideIndex].style.className = "ImageInfoContainer_display slide";
	slidesArray[slideIndex].style.display = "block";
}