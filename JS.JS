// When the user scrolls down 20px from the top of the document, slide down the navbar
const toTop = document.querySelector(".to-top")
const Home = document.querySelector("Home")
const About = document.querySelector("About")
const Contact = document.querySelector("Contact")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

Home.onclick= function(e){ 
  Home.classList.add("active")
  About.classList.remove("active")
  Contact.classList.remove("active")
};
About.onclick= function(e){ 
  Home.classList.remove("active")
  About.classList.add("active")
  Contact.classList.remove("active")
};
Contact.onclick= function(e){ 
  Home.classList.remove("active")
  About.classList.remove("active")
  Contact.classList.add("active")
};
