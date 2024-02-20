function handleSubmit1(evt) {
	alert("Purple");
  }

function handleSubmit2(evt) {
    alert("Nobu");
  }

function handleSubmit3(evt) {
 alert("My Nightly Routine");
  }

let color = document.querySelector("#color");
color.addEventListener("click", handleSubmit1);

let place = document.querySelector("#place");
place.addEventListener("click", handleSubmit2);

let ritual = document.querySelector("#ritual");
ritual.addEventListener("click", handleSubmit3);