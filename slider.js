// __________________________________IMAGE CAROUSEL SLIDER_________________________________
  // Image carousel slider
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button--right');
  const prevButton = document.querySelector('.carousel__button--left');
  const dotsNav = document.querySelector('.carousel__nav');
  const firstDot = document.querySelector('.firstDot');
  const dots = Array.from(dotsNav.children);
  
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  
  let slideNumber = [];
  let imgNr = 0;
  
  const currentSlide = track.querySelector('.current-slide');
  // let nextSlide = currentSlide;
  let prevSlide = currentSlide.previousElementSibling;
  let lastSlide = slides[9];  
  let firstSlide = slides[0];
  let restart = false;
  
  const setSlidePosition = () => {
  
    slides[0].style.left = slideWidth * 0 + 'px';
    slides[1].style.left = slideWidth * 1 + 'px';
    slides[2].style.left = slideWidth * 2 + 'px';
    slides[3].style.left = slideWidth * 3 + 'px';
    slides[4].style.left = slideWidth * 4 + 'px';
    slides[5].style.left = slideWidth * 5 + 'px';
    slides[6].style.left = slideWidth * 6 + 'px';
    slides[7].style.left = slideWidth * 7 + 'px';
    slides[8].style.left = slideWidth * 8 + 'px';
  
  
  }
  console.log(slideNumber);
  //  for each slide image = set slide position§
  slides.forEach(setSlidePosition);
  
  // ________________________________________________________________________
  
  const moveToSlide = (track, currentSlide, targetSlide) => {
    nextSlide = currentSlide.nextElementSibling;
  
    if(restart) {
      // track.style.transform = 'translateX(0px)';
      firstSlide.classList.add('current-slide');
      console.log("restart");
      restart = false;
    }
  
    else if(nextSlide == lastSlide){
      console.log("next slide = last");
      currentSlide.classList.remove('current-slide');
      firstSlide.classList.add('current-slide');
      nextSlide = currentSlide.nextElementSibling;
      restart = true;
      track.style.transform = 'translateX(0px)';
    }
  
    else {
      console.log("next slide");
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
  
      nextSlide = currentSlide.nextElementSibling;
      prevSlide = currentSlide.previousElementSibling;
  
      console.log(nextSlide);
      console.log(lastSlide);
    }
  }
  
  const updateDots = (currentDot, targetDot) => {
    
    if(restart){
      currentDot.classList.remove('current-slide');
      firstDot.classList.add('current-slide');
      restart = false;
    }
    else {
      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');
    }
  
  }
  
  // On click left, move slide to the right
  // And update indicator dots
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
  
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  })
  
  // On click right, move slide to the right
  // And update indicator dots
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const carouselTrack = track.querySelector('.carousel__track');
    // const firstDot = dotsNav.querySelector('.first-dot');
  
    if(restart){
      nextSlide.classList.add('firstSlide');
      currentSlide.classList.remove('.current-slide');
      // firstDot.classList.add('.current-slide');
      track.style.transform = 'translateX(+' + nextSlide.style.left + ')';
      // restart = false;
      moveToSlide(track, currentSlide, nextSlide);
      // updateDots(currentDot, firstDot);
    }
    else {
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector('.current-slide');
      const nextDot = currentDot.nextElementSibling;
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    }
    
  })
  
  // When click on nav indivators, move to that slide
  dotsNav.addEventListener('click', e => {
    // what indicator got clicked?
    const targetDot = e.target.closest('button');
  
    if (!targetDot) return;
  
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
  
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  })
    