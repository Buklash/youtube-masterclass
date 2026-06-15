// PREMIUM SCROLL ANIMATIONS

const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add('show');
}

});

},
{
threshold: 0.12
}
);

document
.querySelectorAll(
'.hero, .learn-section, .results, .bonus-section, .faq-section, .final-cta'
)
.forEach((section) => {

section.classList.add('hidden');
observer.observe(section);

});
