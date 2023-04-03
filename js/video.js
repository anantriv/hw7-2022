const video = document.querySelector("#player1");
console.log(video)
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;

	// console.log("autoplay is set to " +video.autoplay)
	// video.loop=false
	// console.log("loop is set to  "+ video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Hello");
	video.play();
	document.querySelector("#volume").textContent = video.volume *100 + "%";
	console.log("Play Video");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90
console.log("speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90
console.log("speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime +=10
	if( video.currentTime >= video.duration)
	video.currentTime = 0

console.log("current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click",function() {
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute";
		console.log("Muted");
	  } else {
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("Unmuted");
	  }
});

document.querySelector("#slider").addEventListener("change", function(){
    video.volume = this.value / 100;
  	document.querySelector("#volume").textContent = video.volume *100 + "%";
});

document.querySelector('#vintage').addEventListener('click', function(){
	video.className = "oldSchool"
})

document.querySelector('#orig').addEventListener('click', function(){
	video.className = ""
})