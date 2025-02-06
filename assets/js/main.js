document.addEventListener('DOMContentLoaded', function () {
    const mySlider = new Splide('#mySlider', {
        type: 'slide',
        perPage: 1,
        fixedWidth: '240px',
        gap: '16px',
        pagination: true,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 2,
                fixedWidth: '224px',
                gap: '16px',
            },
            1120: {
                perPage: 3,
                fixedWidth: '240px',
                gap: '32px',
            }
        }
    });
    mySlider.mount();
});

document.addEventListener("DOMContentLoaded", function () {
    const showAllButton = document.getElementById("showAllButton");
    const slidesToToggle = document.querySelectorAll(".slide-9, .slide-10, .slide-11");
    let isExpanded = false;

    function toggleSlides() {
        isExpanded = !isExpanded;
        slidesToToggle.forEach(slide => {
            slide.style.display = isExpanded ? "flex" : "none";
        });
        showAllButton.textContent = isExpanded ? "Скрыть" : "Показать все";
    }

    slidesToToggle.forEach(slide => (slide.style.display = "none"));

    showAllButton.addEventListener("click", toggleSlides);
});
