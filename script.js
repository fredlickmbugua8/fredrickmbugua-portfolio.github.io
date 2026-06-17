// ==========================
// TYPING EFFECT
// ==========================

const titles = [
    "Founder & CEO of DravTech",
    "Software Developer",
    "Data Analyst",
    "Political Analyst",
    "Communication Analyst",
    "AI & Machine Learning Enthusiast"
];

let titleIndex = 0;
let charIndex = 0;

function typeEffect() {

    const element = document.getElementById("typing");

    if (!element) return;

    if (charIndex < titles[titleIndex].length) {

        element.textContent += titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {

    const element = document.getElementById("typing");

    if (!element) return;

    if (element.textContent.length > 0) {

        element.textContent =
            element.textContent.slice(0, -1);

        setTimeout(eraseEffect, 40);

    } else {

        titleIndex++;

        if (titleIndex >= titles.length) {
            titleIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            parseInt(counter.innerText.replace("+", ""));

        let count =
            +counter.getAttribute("data-count") || 0;

        const increment = target / 50;

        if (count < target) {

            count += increment;

            counter.innerText =
                Math.ceil(count) + "+";

            counter.setAttribute(
                "data-count",
                count
            );

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target + "+";
        }
    };

    updateCounter();
});


// ==========================
// FADE IN ON SCROLL
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.2
});

document
.querySelectorAll(
".card, .project-card, .stat-box"
)
.forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);
});


// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";
    }

});


// ==========================
// CONTACT FORM
// ==========================

const form =
document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", (e)=>{

        e.preventDefault();

        alert(
            "Thank you for reaching out! Your message has been received."
        );

        form.reset();
    });

}