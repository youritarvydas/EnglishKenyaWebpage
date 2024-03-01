// When the user scrolls down 20px from the top of the document, slide down the navbar
const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

const links = document.querySelectorAll('NavLink');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}
