  
  
  // play the audio file when the key is pressed
  function getKey(e) {
    // Get the code of the key we pressed
    const key = e.keyCode;
    updateDiv(key);
    playSound(key);
    
  }

  function playSound(key) {
    const playAudio = document.querySelector(`audio[data-key="${key}"]`);
    playAudio.currentTime = 0;
    playAudio.play();
  }

  function updateDiv(key){
    const drumDiv = document.querySelector(`div[data-key="${key}"]`);
    drumDiv.classList.add('playing');

  }

  function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  const keys = Array.from(document.getElementsByClassName("key"));
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", getKey);

  // play the css animation when the key is pressed (apply the .playing style/class where required)

  // return the state on key up? (if we need to?)