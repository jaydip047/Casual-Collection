$('.banner-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})


document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "light",
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        "searchfield"
                    ]
                },
                {
                    "position": "bottom",
                    "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa-brands fa-twitter'></a>",
                        "<a class='fa-brands fa-facebook-f' href='#/'></a>"
                    ]
                }
            ]
        });
    }
);
