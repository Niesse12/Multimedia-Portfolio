function playSound(sound) {
    var audio = new Audio();
    audio.src = sound + ".mp3";
    audio.play();
}