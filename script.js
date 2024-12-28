const menuEl = document.querySelector('.menu');
const linkElmol = document.querySelector('.linksForMoble');
const imageConEl = document.querySelector('.image-home-section');
const imageChange = document.getElementById('multipledescription');
const serviceBox = document.querySelectorAll('.our-services');
const serviceBoxContainer = document.querySelector('.our-service-container-section')
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

const images = [
    'hospital website5.jpeg',
     'hospital website3.jpeg',
     'hospital website2.jpeg',
     'hospital website 4.jpeg'
]
let currentImage = 0;
menuEl.addEventListener('click', (events)=>{
    linkElmol.classList.toggle('active');
    menuEl.classList.toggle('change');
})
setInterval(()=>{
    currentImage = (currentImage + 1) % images.length;
    imageChange.src = images[currentImage];
}, 2000)
window.addEventListener('scroll', ()=>{
    const serviceSectionTop = serviceBoxContainer.offsetTop;
    const serviceSectionheight = serviceBoxContainer.offsetHeight;
    const windowScrollTop = window.scrollY;
    if(windowScrollTop >= serviceSectionTop - serviceSectionheight / 2){
        serviceBox.forEach((box)=>{
            box.classList.add('animation')
        })
    }
})

function updateSlideshow(index) {
    const slideshow = document.querySelector('.slideshow');
    const slideWidth = slides[0].offsetWidth;
  
    // For desktop, move by sets of 3; for mobile, move by 1
    const isDesktop = window.innerWidth >= 825;
    const transformValue = isDesktop ? index * 3 * slideWidth : index * slideWidth;
  
    slideshow.style.transform = `translateX(-${transformValue}px)`;
  
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  
  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlideshow(currentIndex);
    });
  });
  
  // Auto-slide functionality
  setInterval(() => {
    const isDesktop = window.innerWidth >= 825;
    const maxIndex = isDesktop ? 1 : 5; // 2 sets on desktop, 6 on mobile
  
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    updateSlideshow(currentIndex);
  }, 5000);
  
  // Initialize first slide
  updateSlideshow(0);