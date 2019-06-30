// declaring a function called updateDogName
function updateDogName() {
//telling the interpreter that the default action should not be taken for this event  
  event.preventDefault();
//declaring a variable called user input and using the method getElementById to target HTML input element with id "form-text"
  var userInput = document.getElementById("form-text");
//using the method getElementbyId to update the innerHTML of the H1 with id of dog name with the value of userInput
  document.getElementById("dog-name").innerHTML = userInput.value;
}
