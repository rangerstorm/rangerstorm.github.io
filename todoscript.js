function heading(){
	responsiveVoice.speak("Welcome to your task planner.");
	responsiveVoice.cancel();
}
function myfunc(){
	responsiveVoice.speak("Enter your task.");
	responsiveVoice.cancel();
}
document.querySelector('#userinput').focus();
var input = document.querySelector("#userinput");
var ol = document.querySelector("ol");
var enter = document.querySelector("#enterButton");
var li = document.querySelectorAll('li');

//function for insert
function insertIntoList(){
	if(input.value.length > 0){
		var li = document.createElement("li");
		var button = document.createElement("button");
		button.textContent = "Remove";
		li.textContent = input.value;
		responsiveVoice.speak(input.value);
		ol.appendChild(li);
		li.appendChild(button);
		button.classList.add('todobutton');
		input.value = "";
	}
}

//enter button entry
enter.addEventListener('click', insertIntoList)
input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		insertIntoList();
	}
})
//tts
//strikethrough for li items
ol.addEventListener('click', function(event){
	event.target.classList.toggle('done');
})
//over
document.addEventListener("mouseover",function(event){
	if(event.target.classList.contains('todobutton')){
		responsiveVoice.speak("Click to remove task.");
	}
});
//delete button
document.addEventListener('click', function(event){
	if(event.target.classList.contains('todobutton')){
		ol.removeChild(event.target.parentElement);
		responsiveVoice.speak("Task removed.");
	}
});