// Theme toggle

document.getElementById('themeToggle').onclick=()=>document.body.classList.toggle('dark');
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800); // small delay for smooth feel
});


const frames = document.querySelectorAll(".gallery-frame");

frames.forEach(frame => {
  frame.addEventListener("mouseenter", () => {
    frame.style.transform = "scale(1.06)";
  });

  frame.addEventListener("mouseleave", () => {
    frame.style.transform = "scale(1)";
  });
});


// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const revealOnScroll=()=>{
reveals.forEach(r=>{
if(r.getBoundingClientRect().top<window.innerHeight-100)r.classList.add('active');
});
};
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();


// Modal Gallery
function openModal(img){
document.getElementById('modal').style.display='flex';
document.getElementById('modalImg').src=img;
}
function closeModal(){document.getElementById('modal').style.display='none';}
function openCertificate(pdfPath) {
  if (!pdfPath) {
    alert("Certificate file not found");
    return;
  }

  window.open(pdfPath, "_blank");
}
const icons = document.querySelectorAll(".social-icons a");

icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.15)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();