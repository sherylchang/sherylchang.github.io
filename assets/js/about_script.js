const mobileNavButton =  document.getElementById('mobile-only-nav-button');
const mobileNavBar = document.getElementById('mobile-only-nav-bar');

// function openNav() {
// 	mobileNavBar.style.height = "100vh";
// 	mobileNavButton.classList.add("button-switch");
// }


function toggleNav() {
	if (mobileNavBar.style.height == "0%" || mobileNavBar.style.height == "") {
		mobileNavBar.style.height = "100vh";
	} else {
		mobileNavBar.style.height = "0%";
	}
	mobileNavButton.classList.toggle("button-switch");
	document.body.classList.toggle("no-scroll");
}