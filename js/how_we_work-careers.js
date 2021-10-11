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