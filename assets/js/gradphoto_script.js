const page = document.documentElement;

const debounce = function(fn) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() => fn.apply(context, args));
  };
};


function desktop(x) {
	window.addEventListener('scroll', debounce(() => {
		page.style.setProperty('--bar-width', page.scrollLeft/(page.scrollWidth - page.clientWidth)*100 + '%');
	}));
}

function mobile(x) {
	window.addEventListener('scroll', debounce(() => {
		page.style.setProperty('--bar-height', page.scrollTop/(page.scrollHeight - page.clientHeight)*100 + '%');
	}));
}

var x = window.matchMedia("(min-width: 600px)")
var y = window.matchMedia("(max-width: 600px)")
desktop(x);
mobile(y);


const mobileNavButton =  document.getElementById('mobile-only-nav-button');
const mobileNavBar = document.getElementById('mobile-only-nav-bar');

// function openNav() {
//  mobileNavBar.style.height = "100vh";
//  mobileNavButton.classList.add("button-switch");
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