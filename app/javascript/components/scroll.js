const scroll = () => {
  window.addEventListener('scroll', (event) => {
    const bio = document.getElementById('bio');
    const bioPart1 = document.querySelector('.bio-part-1');
    const bioPart2 = document.querySelector('.bio-part-2');
    const portPart1 = document.querySelector('.portfolio-block-1');
    const portPart2 = document.querySelector('.portfolio-block-2');
    const portPart3 = document.querySelector('.portfolio-block-3');
    const portPart4 = document.querySelector('.portfolio-block-4');
    const contact = document.getElementById('contact');

    if (window.scrollY < 100) {
      bioPart1.style.opacity = 0.1;
    } else if (window.scrollY < 550) {
      bioPart1.style.opacity = 0.1 + (window.scrollY - 100) / (550 - 100);
    } else if (window.scrollY < 1300) {
      bioPart1.style.opacity = 1 - (window.scrollY - 900) / (1300 - 900);
      bioPart2.style.opacity = 0.1 + Math.max((window.scrollY - 900) / (1300 - 900), 0);
    } else if (window.scrollY < 2200) {
      bioPart2.style.opacity = 1 - (window.scrollY - 1550) / (2200 - 1550);
      portPart1.style.opacity =  0.1 + Math.max((window.scrollY - 1550) / (2200 - 1550), 0);
    } else if (window.scrollY < 2950) {
      portPart1.style.opacity = 1 - (window.scrollY - 2450) / (2950 - 2450);
      portPart2.style.opacity =  0.1 + Math.max((window.scrollY - 2450) / (2950 - 2450), 0);
    } else if (window.scrollY < 3700) {
      portPart2.style.opacity = 1 - (window.scrollY - 3250) / (3700 - 3250);
      portPart3.style.opacity =  0.1 + Math.max((window.scrollY - 3250) / (3700 - 3250), 0);
    } else if (window.scrollY < 4450) {
      portPart3.style.opacity = 1 - (window.scrollY - 4000) / (4450 - 4000);
      portPart4.style.opacity =  0.1 + Math.max((window.scrollY - 4000) / (4450 - 4000), 0);
    } else if (window.scrollY < 5200) {
      portPart4.style.opacity = 1 - (window.scrollY - 4750) / (5200 - 4750);
      contact.style.opacity = 0.1 + Math.max((window.scrollY - 4750) / (5200 - 4750), 0);
    }
  })
}

export { scroll };
