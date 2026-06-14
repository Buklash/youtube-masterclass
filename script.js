// SCROLL ANIMATIONS

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});
},
{
threshold:0.15
}
);

document
.querySelectorAll(
'.hero, .trust, .problem, .audience, .course-cover, .access-process, .learn-section, .results, .different, .bonus-section, .faq-section, .urgency, .cta-section'
)
.forEach((section) => {
section.classList.add('hidden');
observer.observe(section);
});
