
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