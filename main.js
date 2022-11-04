// Scroll Progress-bar Animation start
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
// Scroll Progress-bar Animation end

//Get the button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.querySelector('.first-button').addEventListener('click', function() {
  document.querySelector('.navbar-icon').classList.toggle('open');
});
document.querySelector('.second-button').addEventListener('click', function() {
  document.querySelector('.navbar-icon2').classList.toggle('open');
});
document.querySelector('.third-button').addEventListener('click', function() {
  document.querySelector('.navbar-icon3').classList.toggle('open');
});
// Navbar start
// Navbar end 
  
// Header start 

// Header end 
    
// About start 
// About end 
      
// Education start 
// Education end 
        
// Skill start 
// Skill end 
  
// Portfolio start

// Portfolio end
  
// Profile start
// Profile end
  
// Foooter start
// Foooter end
  
