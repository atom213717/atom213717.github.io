// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {

  alert("Czy nie masz tak czasami, że chcesz coś zrobić, ale nie wierz co konkretnego? ... tak powstają takie kanały na YouTube, jak mój. Na podobnej zasadzie na tej stronie dodałem ten konami code ... bo mogłem i chciałem, ale nie miałem na to większego pomysłu. Finalnie czy to coś złego? Raczej nie, ciekawość i chęci do zanurzenia się w nieznane 'hobby' może w przyszłości jakoś ci pomóc ... może ... kiedyś ... a może będzie to poprostu ciekawszym sposobem na spędzenie samemu czasu i nic więcej. ");
}
