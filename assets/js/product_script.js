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

window.addEventListener('scroll', debounce(() => {
	page.style.setProperty('--bar-height', page.scrollTop/(page.scrollHeight - page.clientHeight)*100 + '%');
}));

// slowF(a,b,c)
// debounce(slowF)(a,b,c)

// const printArgs = () => arguments;
// printArgs('hello', 'sheryl')
// > ['hello','sheryl']
// slowF(a,b,c)
// debounce(slowF)(a,b,c)
// > arguments -> [a,b,c]
// > slowF(arguments) -> slowF(a,b,c)

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