// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Scroll animation
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight - 100){
            el.classList.add("show");
        }
    });
});

 function handleSend(){
    const n = document.getElementById('fname').value;
    const e = document.getElementById('femail').value;
    const m = document.getElementById('fmessage').value;
    if(!n || !e || !m){ alert('Please fill in all required fields.'); return; }
    alert('Thanks ' + n + '! Your message has been sent. I\'ll get back to you soon!');
    document.getElementById('fname').value='';
    document.getElementById('femail').value='';
    document.getElementById('fsubject').value='';
    document.getElementById('fmessage').value='';
  }