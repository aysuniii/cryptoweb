var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const body = document.querySelector('body');
    var nav = document.querySelector('nav');

    if (scrollTop === 0) {
      nav.style.backgroundColor = "transparent";
    } else {
      nav.style.backgroundColor = "#403f83";
    }
  }

  window.addEventListener('scroll', handleScroll);
