console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Your form has been submitted successfully!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function handleMouseover(evt) {
	alert("You're awesome!");
  }

let missKitty = document.getElementById("missKitty");
missKitty.addEventListener("mouseover", handleMouseover);