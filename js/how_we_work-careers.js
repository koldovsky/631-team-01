// Events
(function () {
    const events = [
        {
            id: 1,
            name: "February",
            img: 'img/february.jpg',
            data: "February 20, 2020",
            time:"10:30am - 1:30pm",
            link:"Pre-register",
            description: 'The impact of mobile apps'
        },
        {
            id: 2,
            name: "March",
            img: 'img/march.jpg',
            data: "March 04, 2020",
            time:"11:00am - 2:00pm",
            link:"Pre-register",
            description: 'Which CRM to choose'
        },
        {
            id: 3,
            name: "June",
            img: 'img/june.jpg',
            data: "June 12, 2020",
            time:"4:30pm - 6:00pm",
            link:"Pre-register",
            description: 'Automation of simple tasks'
        },
        {
            id: 4,
            name: "July",
            img: 'img/july.jpg',
            data: "July 21, 2020",
            time:"10:30am - 1:30pm",
            link:"Pre-register",
            description: 'Making right decisions'
        }
    ]

    function renderEvents(events) {
        const eventsContainer = document.querySelector('.events_blocks');
        for (const event of events) {
            eventsContainer.innerHTML += 
                `<article class="event">
                    <div class="img_event_block" style="background-image: url(${event.img})"></div>
                    <div class="text_inside_events">
                        <p class="header-text-color events_data">${event.data}</p>
                        <p class="header-text-color events_time">${event.time}</p>
                        <div class="space_before_events_header">
                            <h3 id="h3-size" class="header_font-family header-text-color events_description">${event.description}</h3>
                        </div>
                        <div class="space_before_events_a">
                            <a class="a_events_blocks" href="#">${event.link}</a>
                        </div>
                    </div>
                </article>`;
        }   
    }
    renderEvents(events);
})();



// Carousel. Team Work
(function () {
    const slides = [
      '<img src="img/slide-1.png" alt="slide-1">',
      '<img src="img/slide-2.png" alt="slide-2">',
      '<img src="img/slide-3.png" alt="slide-3">',
      '<img src="img/slide-4.png" alt="slide-4">',
      '<img src="img/slide-5.png" alt="slide-5">',
      '<img src="img/slide-6.png" alt="slide-6">',
      '<img src="img/slide-7.png" alt="slide-7">',
      '<img src="img/slide-8.png" alt="slide-8">',
      '<img src="img/slide-9.png" alt="slide-9">',
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideBasket = document.querySelector(".carousel-team-work .slide-basket");
      let html = '';
      html = slides[currentSlide];
      const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
      html += slides[nextSlide];
      const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
      html += slides[next2Slide];
      slideBasket.innerHTML = html;
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      showCurrentSlide();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      showCurrentSlide();
    }
  
    showCurrentSlide();

    const btnPrev = document.querySelector(".carousel-team-work .slide-prev");
    btnPrev.addEventListener("click", prevSlide);
  
    const btnNext = document.querySelector(".carousel-team-work .slide-next");
    btnNext.addEventListener("click", nextSlide);
  })();