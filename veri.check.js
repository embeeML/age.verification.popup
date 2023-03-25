const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const verifyBtn = document.getElementById("verifyBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const popupContainer = document.getElementById("popup-container");
popupContainer.style.display = "block";

yesBtn.addEventListener("click", function() {
	overlay.classList.remove("show");
	alert("Thank You, Enjoy.");
});

noBtn.addEventListener("click", function() {
	overlay.classList.remove("show");
	alert("You must be over 18 years old to enter the site.");
});
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const hasSeenPopup = getCookie("seen_popup");

if (!hasSeenPopup) {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("show");


    // Set a cookie to remember that the visitor has seen the popup
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = "seen_popup=true;" + expires + ";path=/";
  
}


