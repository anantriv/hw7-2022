var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false
	console.log("autoplay is set to " +video.autoplay)
	video.loop=false
	console.log("loop is set to  "+ video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
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
	video.playbackRate *= 0.95
console.log("speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95
console.log("speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime +=15
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
    video.volume = slider.value / 100;
  volumeOutput.innerHTML = slider.value + "%";
});

