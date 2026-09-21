//protect
// 슬라이드
const currentPage = document.querySelector(".protect_page .current");
const protectSwiper = new Swiper(".protectSwiper",{
    slidesPerView: 1, spaceBetween: 0, speed: 800, loop: true, autoplay: { delay: 3000, disableOnInteraction: false, }, on: {
        slideChange: function () {
            currentPage.textContent = this.realIndex + 1;
        }
    }
});

// AI content slide-in
const aiContent = document.querySelector(".ai_content");
if (aiContent) {
    const aiObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    aiObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );
    aiObserver.observe(aiContent);
}

// faq
const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq_question");
    question.addEventListener("click", () => {
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});
