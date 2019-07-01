function updateDogName() {
  event.preventDefault();
  var userInput = document.getElementById("form-text");
  document.getElementById("dog-name").innerHTML = userInput.value;
}
