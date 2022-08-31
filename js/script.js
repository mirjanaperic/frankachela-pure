// back to top button
let scrollToTopBtn = document.getElementById('js-back-to-top');
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// banner
const bannerTitle = document.getElementById('js-banner-inner');

// hide logo on scroll
function logoHide() {
    const bannerImg = document.querySelector('.js-img-banner');
    if (window.scrollY > (bannerImg.clientHeight / 2)) {
        bannerTitle.style.display = 'none';
    } else {
        bannerTitle.style.display = 'block';
    }
}
document.addEventListener('scroll', () => {
    logoHide();
});
window.onload = () => {
    logoHide();
    document.querySelector('.js-img-banner').style.opacity = '0';
};

// form
let url = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdVfF2dS9gz52op83jJ3FqG_P5jt1_R8T6SRHLAfufDZJ2MRg/formResponse";
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        header: {
            'Content-Type': 'application/json'
        },
        body: getInputData()
    })
        .then(data => {
            document.getElementById('js-form-btn').innerText = "Gracias!";
            document.querySelector("#name").value = '';
            document.querySelector("#email").value = '';
            document.querySelector("#message").value = '';
        })
        .catch(err => console.error(err));
});

function getInputData() {
    let dataToPost = new FormData();

    dataToPost.append("entry.1597614004", document.querySelector("#name").value);
    dataToPost.append("emailAddress", document.querySelector("#email").value);
    dataToPost.append("entry.1911179559", document.querySelector("#message").value);

    return dataToPost;
}

// image animtions
var current = 0,
    slides = document.getElementsByClassName("js-img-about");

setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
}, 3000);

var currentContact = 0,
    slidesContact = document.getElementsByClassName("js-img-contact");

setInterval(function () {
    for (var i = 0; i < slidesContact.length; i++) {
        slidesContact[i].style.opacity = 0;
    }
    currentContact = (currentContact != slidesContact.length - 1) ? currentContact + 1 : 0;
    slidesContact[currentContact].style.opacity = 1;
}, 3000);

var currentBanner = 0,
    slidesBanner = document.getElementsByClassName("js-img-banner");

setInterval(function () {
    for (var i = 0; i < slidesBanner.length; i++) {
        slidesBanner[i].style.opacity = 0;
    }
    currentBanner = (currentBanner != slidesBanner.length - 1) ? currentBanner + 1 : 0;
    slidesBanner[currentBanner].style.opacity = 1;
}, 3000);

// marquee
const mq = window.matchMedia("(max-width: 768px)");
if (mq.matches) {
    let images = document.getElementById('js-clients-images');

    images.addEventListener('touchstart', function () {
        images.classList.add('paused');
    });
    images.addEventListener('touchend', function () {
        images.classList.remove('paused');
    });
}

// scroll with gsap
gsap.utils.toArray(".animation").forEach((element) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            invalidateOnRefresh: true,
            onEnter: () => {
                gsap.to(element, {
                    y: -50,
                    duration: 1,
                    opacity: 1
                });
            },
            onLeave: () => {
                gsap.to(element, {
                    y: -100,
                    duration: 1,
                    opacity: 0
                });
            },
            onEnterBack: () => {
                gsap.to(element, {
                    y: -50,
                    duration: 1,
                    opacity: 1
                });
            },
            onLeaveBack: () => {
                gsap.to(element, {
                    y: 0,
                    duration: 1,
                    opacity: 0
                });
            }
        }
    });
});
